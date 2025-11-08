import { useState } from "react";
import Spline from "@splinetool/react-spline";

const WEBHOOK_URL = "https://davedandemo.app.n8n.cloud/webhook-test/06a670b3-4a9e-4c20-90d8-8f5eb507affe";

export default function Hero() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleStart = async () => {
    setLoading(true);
    setStatus("");
    try {
      const payload = {
        brand: "AI FORGE",
        intent: "start_building",
        timestamp: new Date().toISOString(),
        page: { title: "AI FORGE", tagline: "Build with an AI coding agent" },
        ui: { hasSpline: true, components: ["Navbar", "Hero"] },
      };

      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Webhook failed");
      setStatus("Sent! Check your workflow.");
    } catch (e) {
      setStatus("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative isolate">
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      <div className="mx-auto -mt-40 max-w-4xl px-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-[#74ACDF] sm:text-6xl">
          AI FORGE
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-balance text-lg text-white/80">
          Launch your next idea with an AI agent that designs, codes, and deploys.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={handleStart}
            disabled={loading}
            className="rounded-md bg-[#0A84FF] px-6 py-3 text-sm font-semibold text-white shadow ring-1 ring-white/10 transition hover:bg-[#0066CC] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A84FF] disabled:opacity-60"
          >
            {loading ? "Sending..." : "Start building"}
          </button>
          {status && <span className="text-sm text-white/70">{status}</span>}
        </div>
      </div>
    </section>
  );
}
