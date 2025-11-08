import { Code2, Smartphone, Wand2, LayoutTemplate } from "lucide-react";

const features = [
  {
    icon: Wand2,
    title: "Voice-first creation",
    desc: "Explain your idea conversationally. The agent translates it into designs, components, and code.",
  },
  {
    icon: LayoutTemplate,
    title: "Beautiful, brand-ready UI",
    desc: "Modern layouts, premium typography, and accessible design out of the box.",
  },
  {
    icon: Code2,
    title: "Production-grade code",
    desc: "Clean React frontends and scalable APIs with best practices and testing hooks.",
  },
  {
    icon: Smartphone,
    title: "Web + Mobile",
    desc: "Generate responsive web and ready-to-wrap mobile experiences in one flow.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            Everything you need to ship fast
          </h2>
          <p className="mt-3 text-slate-600">
            From concept to launch, our AI handles the heavy lifting while you focus on your product.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-black/5 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.05)] hover:shadow-sm transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400 text-white grid place-items-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
