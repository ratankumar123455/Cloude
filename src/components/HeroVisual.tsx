const frames = [
  { id: "01", tone: "linear-gradient(150deg, rgba(31,169,113,0.5), rgba(27,36,38,0.92) 70%)" },
  { id: "02", tone: "linear-gradient(150deg, rgba(52,211,199,0.35), rgba(27,36,38,0.92) 70%)" },
  { id: "03", tone: "linear-gradient(150deg, rgba(74,222,147,0.55), rgba(27,36,38,0.92) 70%)", active: true },
  { id: "04", tone: "linear-gradient(150deg, rgba(31,169,113,0.25), rgba(27,36,38,0.92) 70%)" },
];

export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md py-12 lg:mx-0">
      <div
        className="absolute -inset-16 -z-10 blur-3xl"
        style={{
          background:
            "radial-gradient(220px circle at 30% 20%, rgba(31,169,113,0.35), transparent 65%), radial-gradient(260px circle at 80% 70%, rgba(52,211,199,0.18), transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="glass-panel rounded-2xl p-5">
        <div className="flex items-center justify-between">
          <span className="mono-label text-[9px] text-muted-2">sutertai / light table</span>
          <span className="flex items-center gap-1.5">
            <span className="status-dot" />
            <span className="mono-label text-[9px] text-scope">live</span>
          </span>
        </div>

        {/* sprocket ticks */}
        <div className="mt-4 flex justify-between px-1">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="h-1 w-1 rounded-full bg-[var(--line-strong)]" />
          ))}
        </div>

        <div className="mt-2 grid grid-cols-4 gap-2">
          {frames.map((frame) => (
            <div key={frame.id} className="relative">
              <div
                className="h-20 rounded-md border"
                style={{
                  backgroundImage: frame.tone,
                  borderColor: frame.active ? "var(--signal)" : "var(--line)",
                  boxShadow: frame.active ? "0 0 0 2px rgba(31,169,113,0.25)" : "none",
                }}
              />
              <p className="mono-label mt-1.5 text-[8.5px] text-muted-2">{frame.id}</p>
            </div>
          ))}
        </div>

        <div className="mt-2 flex justify-between px-1">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="h-1 w-1 rounded-full bg-[var(--line-strong)]" />
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-[var(--line)] pt-4">
          <div>
            <p className="mono-label text-[9px] text-muted-2">Prompt — frame 03</p>
            <p className="mt-1 max-w-[220px] text-[13px] text-paper">
              “Ceramic bottle, golden hour, 85mm, shallow depth of field”
            </p>
          </div>
          <div className="text-right">
            <p className="mono-label text-[9px] text-muted-2">seed</p>
            <p className="font-display mt-1 text-sm text-generated">048231</p>
          </div>
        </div>
      </div>

      <div className="glass-panel absolute left-2 bottom-0 float-slow rounded-xl px-4 py-3">
        <p className="mono-label text-[9px] text-muted-2">Exposure</p>
        <p className="mt-1 text-sm text-paper">4.2s / frame</p>
      </div>
      <div className="glass-panel absolute right-2 top-0 float-slow-delayed rounded-xl px-4 py-3">
        <p className="mono-label text-[9px] text-muted-2">Uptime</p>
        <p className="mt-1 text-sm text-paper">99.9%</p>
      </div>
    </div>
  );
}
