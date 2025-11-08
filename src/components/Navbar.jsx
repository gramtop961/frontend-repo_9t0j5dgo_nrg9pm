import React from "react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400" />
          <span className="font-semibold tracking-tight">AI FORGE</span>
        </div>
        {/* Minimal header per request: no feature/how/pricing links, no sign in or launch */}
        <div className="hidden md:flex items-center gap-4" />
      </div>
    </header>
  );
}
