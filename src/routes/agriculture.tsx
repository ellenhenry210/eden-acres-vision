import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import farmAerial from "@/assets/farm-aerial.png.asset.json";
import cropFarm from "@/assets/crop-farm.png.asset.json";
import greenhouses from "@/assets/greenhouses.png.asset.json";
import soilless from "@/assets/soilless-farming.png.asset.json";
import orchard from "@/assets/orchard.png.asset.json";
import livestock from "@/assets/livestock.png.asset.json";
import livestockAerial from "@/assets/livestock-aerial.png.asset.json";
import mills from "@/assets/mills.png.asset.json";

export const Route = createFileRoute("/agriculture")({
  head: () => ({
    meta: [
      { title: "Agriculture — Eden Acres Ranch Estate" },
      { name: "description", content: "Mechanized crop farming, greenhouses, orchards, fisheries, and biosecure livestock at Eden Acres — engineered as one integrated ecosystem." },
      { property: "og:title", content: "Agriculture at Eden Acres" },
      { property: "og:description", content: "Precision agriculture meets world-class animal welfare across 60+ integrated acres." },
      { property: "og:image", content: farmAerial.url },
      { name: "twitter:image", content: farmAerial.url },
    ],
  }),
  component: Agriculture,
});

const divisions = [
  { title: "Open-Field Crops", img: cropFarm, blurb: "Mechanized cereals, roots and staples grown on rotationally-managed fields." },
  { title: "Greenhouses", img: greenhouses, blurb: "Climate-controlled production for premium vegetables and specialty crops." },
  { title: "Soilless Farming", img: soilless, blurb: "Vertical, hydroponic and aeroponic systems for year-round high-value yields." },
  { title: "Orchards", img: orchard, blurb: "Heritage and tropical fruit orchards framing the estate's landscape." },
  { title: "Livestock", img: livestock, blurb: "Cattle, dairy, sheep, goats and poultry raised in humane, rotational pastures." },
  { title: "Mills & Processing", img: mills, blurb: "On-site milling, feed production and post-harvest handling." },
];

function Agriculture() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="relative min-h-[70vh] overflow-hidden">
        <img src={farmAerial.url} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-primary/95" />
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-[1400px] flex-col justify-end px-6 pb-20 pt-40 text-primary-foreground lg:px-10">
          <div className="text-[10px] uppercase tracking-[0.36em] text-gold">Agriculture & Livestock</div>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.02] text-balance md:text-7xl">
            Sixty acres of <span className="italic text-gold">integrated production.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-light text-primary-foreground/85">
            From open-field grain to soilless towers and heritage livestock — every
            division of Eden Acres feeds the next, closing the loop between land,
            animal, and table.
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {divisions.map((d) => (
              <article key={d.title} className="group">
                <figure className="relative aspect-[4/3] overflow-hidden">
                  <img src={d.img.url} alt={d.title} className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                </figure>
                <h3 className="mt-5 font-serif text-2xl text-primary">{d.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.blurb}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-warm/50 py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid gap-12 lg:grid-cols-12 items-center">
          <figure className="relative aspect-[16/10] overflow-hidden lg:col-span-7">
            <img src={livestockAerial.url} alt="Aerial livestock view" className="h-full w-full object-cover" />
          </figure>
          <div className="lg:col-span-5">
            <div className="text-[10px] uppercase tracking-[0.32em] text-emerald">Integrated by design</div>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl text-balance">Where crop, livestock and land regenerate one another.</h2>
            <p className="mt-6 text-lg font-light text-muted-foreground">Rotational grazing improves soils, manure fuels biogas, biogas powers greenhouses, greenhouses feed the estate — a circular architecture that scales.</p>
            <Link to="/sustainability" className="mt-8 inline-block text-[11px] uppercase tracking-[0.28em] text-emerald hover:text-gold">Read the sustainability model →</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
