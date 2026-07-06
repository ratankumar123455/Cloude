const REPLICATE_MODEL = "black-forest-labs/flux-schnell";
const MAX_PROMPT_LENGTH = 500;
const POLL_INTERVAL_MS = 1500;
const POLL_TIMEOUT_MS = 45_000;

type ReplicatePrediction = {
  id: string;
  status: "starting" | "processing" | "succeeded" | "failed" | "canceled";
  output: string[] | string | null;
  error: string | null;
  urls?: { get?: string };
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function POST(request: Request) {
  const token = process.env.REPLICATE_API_TOKEN;

  if (!token) {
    return Response.json(
      {
        error:
          "Image generation isn't configured yet. Set REPLICATE_API_TOKEN in the environment to enable it.",
      },
      { status: 503 },
    );
  }

  let prompt: string;
  try {
    const body = await request.json();
    prompt = typeof body?.prompt === "string" ? body.prompt.trim() : "";
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!prompt) {
    return Response.json({ error: "Prompt is required." }, { status: 400 });
  }
  if (prompt.length > MAX_PROMPT_LENGTH) {
    return Response.json(
      { error: `Prompt must be under ${MAX_PROMPT_LENGTH} characters.` },
      { status: 400 },
    );
  }

  try {
    const createRes = await fetch(
      `https://api.replicate.com/v1/models/${REPLICATE_MODEL}/predictions`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Prefer: "wait=25",
        },
        body: JSON.stringify({
          input: {
            prompt,
            aspect_ratio: "1:1",
            num_outputs: 1,
            output_format: "webp",
          },
        }),
      },
    );

    if (!createRes.ok) {
      const detail = await createRes.text();
      return Response.json(
        { error: `Generation request failed: ${detail || createRes.statusText}` },
        { status: createRes.status === 401 ? 500 : 502 },
      );
    }

    let prediction = (await createRes.json()) as ReplicatePrediction;

    const deadline = Date.now() + POLL_TIMEOUT_MS;
    while (
      (prediction.status === "starting" || prediction.status === "processing") &&
      Date.now() < deadline
    ) {
      await sleep(POLL_INTERVAL_MS);
      const pollUrl = prediction.urls?.get ?? `https://api.replicate.com/v1/predictions/${prediction.id}`;
      const pollRes = await fetch(pollUrl, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!pollRes.ok) break;
      prediction = (await pollRes.json()) as ReplicatePrediction;
    }

    if (prediction.status === "succeeded") {
      const imageUrl = Array.isArray(prediction.output)
        ? prediction.output[0]
        : prediction.output;
      if (!imageUrl) {
        return Response.json(
          { error: "Generation finished but no image was returned." },
          { status: 502 },
        );
      }
      return Response.json({ imageUrl });
    }

    if (prediction.status === "failed" || prediction.status === "canceled") {
      return Response.json(
        { error: prediction.error || "Image generation failed." },
        { status: 502 },
      );
    }

    return Response.json(
      { error: "Generation is taking longer than expected. Please try again." },
      { status: 504 },
    );
  } catch {
    return Response.json(
      { error: "Unexpected error while generating the image." },
      { status: 500 },
    );
  }
}
