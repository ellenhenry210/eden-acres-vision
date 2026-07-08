import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/eden-acres-logo.png";

const links = [
  { to: "/", label: "Estate" },
  { to: "/master-plan", label: "Master Plan" },
  { to: "/agriculture", label: "Agriculture" },
  { to: "/aquarium", label: "Aquarium Atrium" },
  { to: "/hospitality", label: "Hospitality" },
  { to: "/recreation", label: "Recreation" },
  { to: "/sustainability", label: "Sustainability" },
  { to: "/investment", label: "Investment" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-primary/85 border-b border-gold/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Eden Acres Ranch Estate" className="h-11 w-11 rounded-full object-cover ring-1 ring-gold/40" />
          <div className="hidden sm:block leading-tight">
            <div className="font-serif text-lg text-primary-foreground tracking-wide">Eden Acres</div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-gold/90">Ranch Estate</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {links.slice(1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[11px] uppercase tracking-[0.22em] text-primary-foreground/80 hover:text-gold transition-colors"
              activeProps={{ className: "text-gold" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/investment"
          className="hidden md:inline-flex items-center gap-2 border border-gold/60 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-gold hover:bg-gold hover:text-gold-foreground transition-colors"
        >
          Enquire
        </Link>
      </div>
    </header>
  );
}