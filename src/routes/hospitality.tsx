import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import villaA from "@/assets/villa-a.png.asset.json";
import villaB from "@/assets/villa-b.png.asset.json";
import guestHouses from "@/assets/guest-houses.png.asset.json";
import waterfall from "@/assets/garden-waterfall.png.asset.json";

export const Route = createFileRoute("/hospitality")({
  head: () => ({
    meta: [
      { title: "Hospitality — Eden Acres Ranch Estate" },
      { name: "description", content: "Luxury villas, guest houses, wellness gardens and fine dining set within the Eden Acres landscape." },
      { property: "og:title", content: "Hospitality at Eden Acres" },
      { property: "og:description", content: "Private villas and restorative retreats framed by botanical gardens and waterfalls." },
      { property: "og:image", content: villaA.url },
      { name: "twitter:image", content: villaA.url },
    ],
  }),
  component: Hospitality,
});

function Hospitality() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="relative min-h-[70vh] overflow-hidden">
        <img src={waterfall.url} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-primary/95" />
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-[1400px] flex-col justify-end px-6 pb-20 pt-40 text-primary-foreground lg:px-10">
          <div className="text-[10px] uppercase tracking-[0.36em] text-gold">Hospitality</div>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.02] text-balance md:text-7xl">
            Stays that feel <span className="italic text-gold">like another world.</span>
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid gap-6 md:grid-cols-3">
          {[
            { title: "Villa · Type I", img: villaA, blurb: "Signature private residences with garden and pool." },
            { title: "Villa · Type II", img: villaB, blurb: "Contemporary two-storey villas for extended stays." },
            { title: "Guest Houses", img: guestHouses, blurb: "Elegant guest suites for shorter visits and retreats." },
          ].map((v) => (
            <article key={v.title}>
              <figure className="relative aspect-[4/5] overflow-hidden">
                <img src={v.img.url} alt={v.title} className="h-full w-full object-cover" />
              </figure>
              <h3 className="mt-5 font-serif text-2xl text-primary">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.blurb}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-24 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-serif text-3xl md:text-5xl">Reserve a private stay.</h2>
          <p className="mt-4 text-primary-foreground/75 font-light">Enquiries welcomed year-round for individuals, families and private groups.</p>
          <Link to="/contact" className="mt-8 inline-flex bg-gold text-gold-foreground px-8 py-4 text-[11px] uppercase tracking-[0.28em] hover:bg-gold/90">Contact the estate →</Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
