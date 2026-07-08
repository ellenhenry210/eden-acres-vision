import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import aerial from "@/assets/estate-aerial.png.asset.json";

export const Route = createFileRoute("/investment")({
  head: () => ({
    meta: [
      { title: "Investment — Eden Acres Ranch Estate" },
      { name: "description", content: "Partner with Eden Acres — a diversified agricultural, hospitality and infrastructure platform for the next generation." },
      { property: "og:title", content: "Invest in Eden Acres" },
      { property: "og:description", content: "A diversified, long-horizon estate investment across agriculture, hospitality and recreation." },
      { property: "og:image", content: aerial.url },
      { name: "twitter:image", content: aerial.url },
    ],
  }),
  component: Investment,
});

function Investment() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="relative min-h-[70vh] overflow-hidden">
        <img src={aerial.url} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-primary" />
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-[1400px] flex-col justify-end px-6 pb-20 pt-40 text-primary-foreground lg:px-10">
          <div className="text-[10px] uppercase tracking-[0.36em] text-gold">Investment</div>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl md:text-7xl text-balance">
            A generational estate, <span className="italic text-gold">open by invitation.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-light text-primary-foreground/80">
            Eden Acres is a diversified, long-horizon platform — spanning agriculture,
            hospitality, recreation and infrastructure. We work with a small circle
            of aligned partners.
          </p>
        </div>
      </section>
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid gap-10 md:grid-cols-3">
          {[
            ["Diversified", "Revenue across food production, hospitality, sport and real estate."],
            ["Resilient", "Vertically integrated systems reduce input, weather and market risk."],
            ["Impactful", "Measurable contribution to food security, employment and sustainability."],
          ].map(([t, d]) => (
            <div key={t}>
              <div className="font-serif text-4xl text-primary">{t}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-primary text-primary-foreground py-24 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-serif text-3xl md:text-5xl">Request the investment brief.</h2>
          <p className="mt-4 text-primary-foreground/75 font-light">Available on request to qualified partners.</p>
          <Link to="/contact" className="mt-8 inline-flex bg-gold text-gold-foreground px-8 py-4 text-[11px] uppercase tracking-[0.28em] hover:bg-gold/90">Contact the estate office →</Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
