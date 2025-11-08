import Spline from "@splinetool/react-spline";

export default function Cover() {
  return (
    <section className="relative isolate">
      <div className="relative h-[70vh] w-full overflow-hidden bg-black">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        {/* Soft top and bottom fades that don't block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
      </div>

      <div className="bg-black py-10">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="inline-block h-2 w-2 rounded-full bg-sky-400" />
            Iridescent identity • fintech • modern • futuristic
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Build Web or Mobile Interfaces with AI
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-lg text-white/85">
            Describe what you want. We send your prompt to a webhook, wait for its response, and render a live preview of the website or mobile app interface.
          </p>
        </div>
      </div>
    </section>
  );
}
