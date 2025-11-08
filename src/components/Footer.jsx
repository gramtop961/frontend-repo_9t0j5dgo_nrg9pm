export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-black/20 bg-black py-8 text-center text-sm text-white/60">
      © {year} AI FORGE
    </footer>
  );
}
