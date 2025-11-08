import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/20 bg-gradient-to-b from-[#0A0F1F] to-black/95 backdrop-blur supports-[backdrop-filter]:bg-[#0A0F1F]/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Logo />
      </div>
    </header>
  );
}
