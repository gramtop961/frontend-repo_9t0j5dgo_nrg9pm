import React, { useMemo } from "react";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  // Gather minimal, non-sensitive context to send when user clicks Start Building
  const payload = useMemo(() => ({
    brand: "AI FORGE",
    intent: "start_building",
    timestamp: new Date().toISOString(),
    // Page snapshot: basic info; avoid heavy or sensitive content
    page: {
      title: "Build stunning websites and mobile apps with your voice.",
      tagline:
        "Describe what you want. Our AI crafts pixel-perfect designs, clean code, and deploys to the cloud in minutes.",
    },
    ui: {
      hasSpline: true,
      components: ["Navbar", "Hero"],
    },
  }), []);

  async function handleStart() {
    try {
      await fetch(
        "https://davedandemo.app.n8n.cloud/webhook-test/06a670b3-4a9e-4c20-90d8-8f5eb507affe",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      // Optional: basic feedback
      alert("Sent to webhook. We'll reach out shortly!");
    } catch (e) {
      console.error(e);
      alert("Unable to reach webhook. Please try again.");
    }
  }

  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-black/5">
            AI Website & App Builder
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900">
            Build stunning websites and mobile apps with your voice.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-700 max-w-2xl">
            Describe what you want. Our AI crafts pixel-perfect designs, clean code, and deploys to the cloud in minutes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button onClick={handleStart} className="inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-5 py-3 text-sm font-medium hover:bg-slate-800">
              Start building
            </button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.18),rgba(59,130,246,0.14),rgba(249,115,22,0.12)_70%)]" />
    </section>
  );
}
