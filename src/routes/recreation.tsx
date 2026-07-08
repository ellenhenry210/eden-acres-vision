import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import horseTrack from "@/assets/horse-track.png.asset.json";
import golf from "@/assets/golf-course.png.asset.json";
import horsingAcademy from "@/assets/horsing-academy.png.asset.json";
import equestrianAcademy from "@/assets/equestrian-academy.png.asset.json";
import mudTrack from "@/assets/mud-track.png.asset.json";

export const Route = createFileRoute("/recreation")({
  head: () => ({
    meta: [
      { title: "Recreation — Eden Acres Ranch Estate" },
      { name: "description", content: "Championship golf, equestrian sport, thoroughbred horse racing and mud-track events across the Eden Acres estate." },
      { property: "og:title", content: "Recreation at Eden Acres" },
      { property: "og:description", content: "Golf, equestrian, horse & mud racing on a championship estate in Nigeria." },
      { property: "og:image", content: horseTrack.url },
      { name: "twitter:image", content: horseTrack.url },
    ],
  }),
  component: Recreation,
});

const pillars = [
  { title: "Eden Acres Racecourse", img: horseTrack, blurb: "A grandstand racecourse designed for the continent's premier thoroughbred meetings." },
  { title: "Championship Golf", img: golf, blurb: "An 18-hole course threading fairways through orchards, lakes and native woodland." },
  { title: "Equestrian Academy", img: equestrianAcademy, blurb: "A world-class academy for dressage, show-jumping and classical horsemanship." },
  { title: "Equestrian Training", img: horsingAcademy, blurb: "Stables, arenas, and instruction for riders at every level." },
  { title: "Mud-Track Events", img: mudTrack, blurb: "Off-road motorsport, adventure racing and community festival grounds." },
];

function Recreation() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="relative min-h-[70vh] w-full overflow-hidden">
        <img src={horseTrack.url} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-primary/95" />
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-[1400px] flex-col justify-end px-6 pb-20 pt-40 text-primary-foreground lg:px-10">
          <div className="text-[10px] uppercase tracking-[0.36em] text-gold">Recreation</div>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.02] text-balance md:text-7xl">
            The estate at <span className="italic text-gold">full stride.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-light text-primary-foreground/85">
            From championship greens to thundering racecourses, Eden Acres brings
            world-class sport into the everyday life of the estate.
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 space-y-24">
          {pillars.map((p, i) => (
            <article key={p.title} className={`grid items-center gap-12 lg:grid-cols-12 ${i % 2 ? "lg:[&>figure]:order-2" : ""}`}>
              <figure className="relative lg:col-span-7 aspect-[16/10] overflow-hidden">
                <img src={p.img.url} alt={p.title} className="h-full w-full object-cover" />
              </figure>
              <div className="lg:col-span-5">
                <div className="text-[10px] uppercase tracking-[0.32em] text-emerald">0{i + 1}</div>
                <h2 className="mt-4 font-serif text-3xl md:text-5xl text-balance">{p.title}</h2>
                <p className="mt-6 text-lg font-light text-muted-foreground leading-relaxed">{p.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-24">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-balance">Host your event at Eden Acres.</h2>
          <p className="mt-6 text-primary-foreground/75 font-light">Racing meetings, tournaments, private hospitality — enquire for availability.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-3 bg-gold text-gold-foreground px-8 py-4 text-[11px] uppercase tracking-[0.28em] hover:bg-gold/90">
            Enquire →
          </Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}