import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Animated conic-gradient background ("flower" color transformation) */}
      <motion.div
        aria-hidden
        className="fixed inset-0 z-0 blur-3xl opacity-70"
        style={{
          backgroundImage:
            "conic-gradient(from 0deg at 50% 50%, #1E90FF, #000000, #FFD700, #FF1E1E, #1E90FF)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      {/* Subtle dark overlay to keep content readable */}
      <div className="pointer-events-none fixed inset-0 z-10 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />

      <div className="relative z-20">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </div>
  );
}
