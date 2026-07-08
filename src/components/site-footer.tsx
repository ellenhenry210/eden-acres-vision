import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="text-[11px] uppercase tracking-[0.32em] text-gold">Eden Acres</div>
            <h3 className="mt-4 font-serif text-3xl text-balance max-w-md">
              A landmark destination where agriculture, luxury, and nature converge.
            </h3>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-gold/80 mb-4">Explore</div>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/master-plan" className="hover:text-gold">Master Plan</Link></li>
              <li><Link to="/agriculture" className="hover:text-gold">Agriculture</Link></li>
              <li><Link to="/aquarium" className="hover:text-gold">Aquarium Atrium</Link></li>
              <li><Link to="/hospitality" className="hover:text-gold">Hospitality</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-gold/80 mb-4">Estate Office</div>
            <address className="not-italic text-sm text-primary-foreground/80 leading-relaxed">
              Eden Acres Ranch Estate<br />
              Nigeria<br />
              <Link to="/contact" className="text-gold hover:underline underline-offset-4">General enquiries →</Link>
            </address>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gold/15 flex flex-col md:flex-row justify-between gap-4 text-xs text-primary-foreground/60">
          <div>© {new Date().getFullYear()} Eden Acres Ranch Estate. All rights reserved.</div>
          <div className="tracking-[0.24em] uppercase text-gold/70">Live · Grow · Race · Thrive</div>
        </div>
      </div>
    </footer>
  );
}