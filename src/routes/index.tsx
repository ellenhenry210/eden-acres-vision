import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import logo from "@/assets/eden-acres-logo.png";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-primary text-primary-foreground">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(1200px 700px at 70% 30%, oklch(0.45 0.11 155 / 0.55), transparent 60%), radial-gradient(900px 600px at 10% 90%, oklch(0.78 0.14 82 / 0.15), transparent 60%)",
          }}
        />
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: "linear-gradient(oklch(0.97 0.02 90) 1px, transparent 1px), linear-gradient(90deg, oklch(0.97 0.02 90) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 pt-32 pb-20 w-full">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px w-12 bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.32em] text-gold">
              Eden Acres Ranch Estate · Nigeria
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.02] text-balance max-w-5xl">
            Building Africa's most complete
            <span className="italic text-gold"> agricultural estate.</span>
          </h1>

          <p className="mt-10 max-w-2xl text-lg md:text-xl text-primary-foreground/80 leading-relaxed font-light">
            A luxury ranch ecosystem where mechanized agriculture, sustainability,
            hospitality, and recreation come together to define a new benchmark
            for the continent.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#vision"
              className="inline-flex items-center gap-3 bg-gold text-gold-foreground px-8 py-4 text-[11px] uppercase tracking-[0.28em] hover:bg-gold/90 transition-colors"
            >
              Explore the Estate
              <span aria-hidden>→</span>
            </a>
            <a
              href="/investment"
              className="inline-flex items-center gap-3 border border-primary-foreground/40 px-8 py-4 text-[11px] uppercase tracking-[0.28em] hover:border-gold hover:text-gold transition-colors"
            >
              Investment Opportunities
            </a>
          </div>

          <div className="absolute bottom-10 right-6 lg:right-10 hidden md:flex items-center gap-4 text-[10px] uppercase tracking-[0.28em] text-primary-foreground/60">
            <span>Scroll to enter</span>
            <span className="h-8 w-px bg-gold/60" />
          </div>
        </div>
      </section>

      {/* Vision teaser */}
      <section id="vision" className="py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.32em] text-emerald">Chapter I</div>
            <div className="mt-4 h-px w-16 bg-gold" />
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.08] text-balance">
              Not a farm. Not a resort. A living ecosystem.
            </h2>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl font-light">
              Eden Acres is a master-planned estate where mechanized food production,
              renewable infrastructure, luxury hospitality, world-class recreation,
              education, and environmental stewardship exist as one integrated whole —
              each part strengthening the next.
            </p>

            <dl className="mt-16 grid sm:grid-cols-3 gap-10 border-t border-border pt-10">
              {[
                { k: "60+", v: "Acres of integrated plant-based farming" },
                { k: "20+", v: "Interconnected estate divisions" },
                { k: "1", v: "Grand Living Aquarium Atrium" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="font-serif text-5xl text-primary">{s.k}</dt>
                  <dd className="mt-3 text-sm text-muted-foreground uppercase tracking-[0.18em]">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-primary text-primary-foreground py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.32em] text-gold">The Estate</div>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl text-balance">
              Ten chapters. One continuous journey.
            </h2>
            <p className="mt-6 text-primary-foreground/70 max-w-xl font-light">
              From the entrance gate to the investment vision — the full cinematic experience
              is being crafted. What follows is a first glimpse.
            </p>
          </div>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/15">
            {[
              ["Agriculture", "Mechanized crops, greenhouses, orchards, fisheries."],
              ["Livestock", "Cattle, dairy, sheep, goats, poultry, aquaculture."],
              ["Aquarium Atrium", "A signature architectural sanctuary."],
              ["Hospitality", "Villas, wellness, fine dining, retreats."],
              ["Recreation", "Golf, equestrian, horse & mud racing."],
              ["Sustainability", "Solar, biogas, water recycling, circular systems."],
              ["Research", "Agricultural innovation & education."],
              ["Investment", "Diversified, scalable, long-horizon."],
            ].map(([title, sub]) => (
              <div key={title} className="bg-primary p-8 group hover:bg-sidebar-accent transition-colors">
                <div className="font-serif text-2xl text-gold">{title}</div>
                <p className="mt-3 text-sm text-primary-foreground/70 leading-relaxed">{sub}</p>
                <div className="mt-8 text-[10px] uppercase tracking-[0.28em] text-gold/70 opacity-0 group-hover:opacity-100 transition-opacity">
                  In development →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder note (transparent to the user, replaces missing sections gracefully) */}
      <section className="py-32 bg-stone-warm/40">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <img src={logo} alt="Eden Acres crest" className="mx-auto h-24 w-24 rounded-full ring-1 ring-gold/40 object-cover" />
          <div className="mt-8 text-[11px] uppercase tracking-[0.32em] text-emerald">Coming next</div>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl text-balance">
            The full cinematic journey awaits your imagery.
          </h2>
          <p className="mt-6 text-muted-foreground font-light leading-relaxed">
            The ten-chapter scrolling experience — entrance gate, aerial reveal, farms,
            livestock, aquarium, gardens, villas, recreation, sustainability, investment —
            is scaffolded and ready to be brought to life the moment your renders arrive.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
