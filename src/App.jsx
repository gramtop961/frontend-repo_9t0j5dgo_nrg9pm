import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <CTA />
      </main>
      <footer className="border-t border-black/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-sm text-slate-600">
          <p>© {new Date().getFullYear()} AuraBuilder AI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
