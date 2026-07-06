import type { Metadata } from "next";
import ImageGenerator from "@/components/ImageGenerator";

export const metadata: Metadata = {
  title: "Try the Generator | Sutertai",
  description:
    "Generate an image from a text prompt using Sutertai's generative AI engine.",
};

export default function GeneratePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">
          Text to <span className="gradient-text">Image</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-zinc-400">
          Type a description below and Sutertai&apos;s generative AI engine
          will render it into an image. This is a live demo of the same
          technology behind our text-to-image product.
        </p>
      </div>
      <ImageGenerator />
      <p className="mt-8 text-center text-xs text-zinc-500">
        Text-to-video generation is part of our full product. Reach out via
        the{" "}
        <a href="/contact" className="text-violet-300 hover:underline">
          contact page
        </a>{" "}
        to learn more.
      </p>
    </div>
  );
}
