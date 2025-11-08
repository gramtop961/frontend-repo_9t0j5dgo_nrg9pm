import Navbar from "./components/Navbar";
import Cover from "./components/Cover";
import Builder from "./components/Builder";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Cover />
      <Builder />
      <Footer />
    </div>
  );
}
