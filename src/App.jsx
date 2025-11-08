import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0F1F] via-[#0B1022] to-[#0E1224] text-white">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
