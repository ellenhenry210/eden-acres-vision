import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import aerial from "@/assets/estate-aerial.png.asset.json";

export const Route = createFileRoute("/master-plan")({
  head: () => ({
    meta: [
      { title: "Master Plan — Eden Acres Ranch Estate" },
      { name: "description", content: "The full aerial master plan of Eden Acres — twenty interconnected districts of agriculture, hospitality, recreation and sustainability." },
      { property: "og:title", content: "The Eden Acres Master Plan" },
      { property: "og:description", content: "A holistic view of Africa's most complete agricultural estate." },
      { property: "og:image", content: aerial.url },
      { name: "twitter:image", content: aerial.url },
    ],
  }),
  component: MasterPlan,
});

const zones = [
  ["Agricultural Belt", "Open crops, greenhouses, orchards and soilless towers."],
  ["Livestock & Operations", "Cattle, dairy, poultry, sheep, goats and processing."],
  ["Aquarium & Gardens", "The signature aquarium atrium and botanical gardens."],
  ["Hospitality Village", "Villas, guest houses, wellness, dining and events."],
  ["Sport & Recreation", "Golf, equestrian, racecourse and mud-track precinct."],
  ["Community Commons", "Marketplace, education, and shared civic spaces."],
];

function MasterPlan() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="pt-32 pb-10 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="text-[10px] uppercase tracking-[0.36em] text-gold">Chapter II · Master Plan</div>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl text-balance max-w-4xl">
            One estate. <span className="italic text-gold">Twenty districts.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-light text-primary-foreground/80">
            Every district of Eden Acres was designed to strengthen the next — a
            single, integrated map of production, hospitality, and stewardship.
          </p>
        </div>
      </section>
      <section className="bg-primary pb-24 text-primary-foreground">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <figure className="overflow-hidden ring-1 ring-gold/20">
            <img src={aerial.url} alt="Aerial master plan of Eden Acres" className="w-full h-auto" />
          </figure>
        </div>
      </section>
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {zones.map(([t, d], i) => (
            <div key={t} className="border-t border-border pt-6">
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
