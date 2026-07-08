import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import waterfall from "@/assets/garden-waterfall.png.asset.json";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Sustainability — Eden Acres Ranch Estate" },
      { name: "description", content: "Solar generation, biogas, rainwater harvesting, and closed-loop farming at the core of Eden Acres." },
      { property: "og:title", content: "Sustainability at Eden Acres" },
      { property: "og:description", content: "A closed-loop estate: from soil to sunlight, every system supports the next." },
      { property: "og:image", content: waterfall.url },
      { name: "twitter:image", content: waterfall.url },
    ],
  }),
  component: Sustainability,
});

const pillars = [
  ["Solar & Renewables", "On-site solar generation across the estate powers agriculture, hospitality and community operations."],
  ["Biogas & Composting", "Livestock and crop waste are converted into clean energy and organic fertility."],
  ["Water Stewardship", "Rainwater harvesting, greywater recycling and closed-loop irrigation preserve every drop."],
  ["Circular Agriculture", "Every output — manure, silage, pruning, seed — becomes input for another division."],
  ["Biodiversity", "Native planting, pollinator corridors and protected woodland maintain the living landscape."],
  ["Community Impact", "Employment, training and local sourcing anchor the estate in the region it serves."],
];

function Sustainability() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="relative min-h-[60vh] overflow-hidden">
        <img src={waterfall.url} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-primary/95" />
        <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-[1400px] flex-col justify-end px-6 pb-20 pt-40 text-primary-foreground lg:px-10">
          <div className="text-[10px] uppercase tracking-[0.36em] text-gold">Sustainability</div>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl md:text-7xl text-balance">
            An estate that <span className="italic text-gold">gives back more</span> than it takes.
          </h1>
        </div>
      </section>
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map(([t, d], i) => (
            <div key={t}>
              <div className="text-[10px] uppercase tracking-[0.32em] text-emerald">0{i + 1}</div>
              <h3 className="mt-3 font-serif text-2xl text-primary">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
