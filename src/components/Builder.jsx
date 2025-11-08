import { useState } from "react";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

export default function Builder() {
  const [name, setName] = useState("");
  const [target, setTarget] = useState("web");
  const [brief, setBrief] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [plan, setPlan] = useState(null);
  const [previewHTML, setPreviewHTML] = useState("\n  <div style=\"padding:24px;color:#999;font-family:Inter,system-ui,sans-serif\">\n    <div style=\"max-width:560px;margin:0 auto\">\n      <h2>Preview will appear here</h2>\n      <p>Enter a brief and click Build to generate a live preview.</p>\n    </div>\n  </div>\n");

  const handleBuild = async () => {
    if (!brief.trim()) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_BASE}/api/build`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name || undefined, brief, target }),
      });
      if (!res.ok) throw new Error(`Build failed: ${res.status}`);
      const data = await res.json();
      setPlan(data.plan);
      setPreviewHTML(data.preview_html);
    } catch (e) {
      setError(e.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="grid grid-cols-1 gap-6 px-4 py-10 md:grid-cols-2">
      {/* Left: Chat / Prompt input */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm text-white/80">Project name (optional)</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., NovaFit, ShopSwift"
            className="mt-1 w-full rounded-md border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/50 shadow focus:border-[#74ACDF] focus:outline-none focus:ring-2 focus:ring-[#74ACDF]/40"
          />
        </div>

        <div>
          <label className="block text-sm text-white/80">Target</label>
          <div className="mt-1 flex gap-2">
            {[
              { key: "web", label: "Website" },
              { key: "mobile", label: "Mobile App" },
            ].map((opt) => (
              <button
                key={opt.key}
                onClick={() => setTarget(opt.key)}
                className={`rounded-md px-3 py-2 text-sm ring-1 ring-white/10 transition ${
                  target === opt.key ? "bg-white/20" : "bg-white/5 hover:bg-white/10"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm text-white/80">Prompt</label>
          <textarea
            value={brief}
            onChange={(e) => setBrief(e.target.value)}
            rows={8}
            placeholder="Describe what to build. Include features, style, audience, and tech."
            className="mt-1 w-full rounded-md border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/50 shadow focus:border-[#74ACDF] focus:outline-none focus:ring-2 focus:ring-[#74ACDF]/40"
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleBuild}
            disabled={loading || !brief.trim()}
            className="rounded-md bg-[#0A84FF] px-6 py-3 text-sm font-semibold text-white shadow ring-1 ring-white/10 transition hover:bg-[#0066CC] disabled:opacity-60"
          >
            {loading ? "Building…" : "Build"}
          </button>
          {error && <span className="text-sm text-red-400">{error}</span>}
        </div>

        {plan && (
          <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-white/80">
            <div className="font-semibold text-white">Plan</div>
            <pre className="mt-2 whitespace-pre-wrap break-words">{JSON.stringify(plan, null, 2)}</pre>
          </div>
        )}
      </div>

      {/* Right: Preview */}
      <div className="min-h-[420px] overflow-hidden rounded-xl border border-white/10 bg-white/5">
        <iframe
          title="Preview"
          className="h-[70vh] w-full bg-black"
          srcDoc={previewHTML}
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    </section>
  );
}
