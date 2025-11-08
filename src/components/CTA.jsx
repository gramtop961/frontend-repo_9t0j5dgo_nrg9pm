import { Rocket } from "lucide-react";

export default function CTA() {
  return (
    <section id="start" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-purple-600 via-blue-600 to-orange-500 p-1">
          <div className="rounded-2xl bg-white p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
                Ready to build with AI?
              </h3>
              <p className="mt-2 text-slate-600 max-w-xl">
                Kickstart your next website or app in minutes. No code, no hassle, just your vision.
              </p>
            </div>
            <a href="#" className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-5 py-3 text-sm font-medium hover:bg-slate-800 shadow">
              <Rocket className="h-4 w-4" /> Get early access
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
