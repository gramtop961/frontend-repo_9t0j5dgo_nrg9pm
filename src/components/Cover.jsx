import Spline from "@splinetool/react-spline";

export default function Cover() {
  return (
    <section className="relative isolate">
      <div className="relative h-[64vh] w-full overflow-hidden bg-black">
        <Spline
          scene="https://prod.spline.design/t7ourXf4CdN9XTF3/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
      </div>
      <div className="bg-black py-10">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-[#74ACDF] sm:text-6xl">AI FORGE</h1>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-lg text-white/85">
            Build with an AI coding agent. Describe your idea, see a live preview, and iterate.
          </p>
        </div>
      </div>
    </section>
  );
}
