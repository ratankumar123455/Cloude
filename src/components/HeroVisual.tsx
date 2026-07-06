export default function HeroVisual() {
  return (
    <div className="relative mx-auto h-[420px] w-full max-w-md lg:mx-0">
      <div
        className="absolute -inset-16 -z-10 blur-3xl"
        style={{
          background:
            "radial-gradient(220px circle at 30% 20%, rgba(99,102,241,0.55), transparent 65%), radial-gradient(260px circle at 80% 70%, rgba(167,139,250,0.45), transparent 65%)",
        }}
        aria-hidden="true"
      />

      {/* Main glass panel: mock generation UI */}
      <div className="glass-panel absolute inset-x-4 top-8 rounded-2xl p-5">
        <div className="flex items-center justify-between">
          <span className="mono-label text-[9px] text-muted-2">sutertai.studio</span>
          <span className="flex gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--violet-bright)]/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--indigo-bright)]/70" />
          </span>
        </div>
        <p className="mono-label mt-4 text-[9px] text-muted-2">Prompt</p>
        <p className="mt-1 text-sm text-paper">
          “Product photo, ceramic bottle, studio light, 8k”
        </p>
        <div
          className="mt-5 h-40 w-full rounded-xl"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(99,102,241,0.55), rgba(167,139,250,0.4) 45%, rgba(17,24,39,0.9))",
          }}
          aria-hidden="true"
        />
        <div className="mt-4 flex items-center gap-2">
          <span className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
            <span className="block h-full w-3/4 rounded-full bg-gradient-brand" />
          </span>
          <span className="mono-label text-[9px] text-muted-2">4.2s</span>
        </div>
      </div>

      {/* Floating chips */}
      <div className="glass-panel absolute -left-2 bottom-16 float-slow rounded-xl px-4 py-3">
        <p className="mono-label text-[9px] text-muted-2">Video</p>
        <p className="mt-1 text-sm text-paper">Motion synced</p>
      </div>
      <div className="glass-panel absolute -right-4 top-2 float-slow-delayed rounded-xl px-4 py-3">
        <p className="mono-label text-[9px] text-muted-2">API</p>
        <p className="mt-1 text-sm text-paper">99.9% uptime</p>
      </div>
    </div>
  );
}
