import { useState } from "react";
import Spline from "@splinetool/react-spline";

const WEBHOOK_URL = "https://davedandemo.app.n8n.cloud/webhook-test/06a670b3-4a9e-4c20-90d8-8f5eb507affe";

export default function Hero() {
  const [projectName, setProjectName] = useState("");
  const [projectBrief, setProjectBrief] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleStart = async () => {
    if (!projectBrief.trim()) return;
    setLoading(true);
    setStatus("");
    try {
      const payload = {
        brand: "AI FORGE",
        intent: "start_building",
        timestamp: new Date().toISOString(),
        page: { title: "AI FORGE", tagline: "Build with an AI coding agent" },
        ui: { hasSpline: true, components: ["Navbar", "Hero", "Footer"] },
        project: {
          name: projectName.trim() || undefined,
          brief: projectBrief.trim(),
        },
      };

      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Webhook failed");
      setStatus("Sent! Check your workflow.");
      setProjectName("");
      setProjectBrief("");
    } catch (e) {
      setStatus("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative isolate">
      {/* Full-width Spline cover (no UI layered on top) */}
      <div className="relative h-[72vh] w-full overflow-hidden bg-black">
        <Spline
          scene="https://prod.spline.design/t7ourXf4CdN9XTF3/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        {/* Keep overlays non-interactive and subtle for depth while preserving the dark theme */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
      </div>

      {/* Content section on solid black background (no background behind title) */}
      <div className="bg-black py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-[#74ACDF] sm:text-6xl">
            AI FORGE
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-lg text-white/85">
            Launch your next idea with an AI agent that designs, codes, and deploys.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl px-4 text-left">
          <label htmlFor="projectName" className="block text-sm font-medium text-white/85">
            Project name (optional)
          </label>
          <input
            id="projectName"
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="e.g., NeoVoice, ShopSwift, HealthPilot"
            className="mt-1 w-full rounded-md border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/50 shadow focus:border-[#74ACDF] focus:outline-none focus:ring-2 focus:ring-[#74ACDF]/40"
          />

          <label htmlFor="projectBrief" className="mt-6 block text-sm font-medium text-white/85">
            Project brief & prompt
          </label>
          <textarea
            id="projectBrief"
            value={projectBrief}
            onChange={(e) => setProjectBrief(e.target.value)}
            placeholder="Describe what you want to build. Include goals, features, style, target users, and any tech requirements."
            rows={5}
            className="mt-1 w-full rounded-md border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/50 shadow focus:border-[#74ACDF] focus:outline-none focus:ring-2 focus:ring-[#74ACDF]/40"
          />
          <div className="mt-2 text-right text-xs text-white/60">{projectBrief.length}/2000</div>

          <div className="mt-6 flex items-center justify-start gap-3">
            <button
              onClick={handleStart}
              disabled={loading || !projectBrief.trim()}
              className="rounded-md bg-[#0A84FF] px-6 py-3 text-sm font-semibold text-white shadow ring-1 ring-white/10 transition hover:bg-[#0066CC] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A84FF] disabled:opacity-60"
            >
              {loading ? "Sending..." : "Start building"}
            </button>
            {status && <span className="text-sm text-white/80">{status}</span>}
          </div>
        </div>
      </div>
    </section>
  );
}
