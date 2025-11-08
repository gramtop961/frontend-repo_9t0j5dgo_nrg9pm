import { Rocket, Settings, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400" />
          <span className="font-semibold tracking-tight">AuraBuilder AI</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#how" className="hover:text-slate-900">How it works</a>
          <a href="#pricing" className="hover:text-slate-900">Pricing</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900">
            <Settings className="h-4 w-4" /> Customize
          </button>
          <button className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-3 py-2 text-sm font-medium hover:bg-slate-800">
            <User className="h-4 w-4" /> Sign in
          </button>
          <button className="hidden sm:inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-purple-600 via-blue-600 to-orange-500 text-white px-3 py-2 text-sm font-medium shadow-md hover:opacity-95">
            <Rocket className="h-4 w-4" /> Launch
          </button>
        </div>
      </div>
    </header>
  );
}
