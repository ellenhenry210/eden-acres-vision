import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import logo from "@/assets/eden-acres-logo.png";
import entrance from "@/assets/entrance.png.asset.json";
import estateAerial from "@/assets/estate-aerial.png.asset.json";
import farmAerial from "@/assets/farm-aerial.png.asset.json";
import cropFarm from "@/assets/crop-farm.png.asset.json";
import greenhouses from "@/assets/greenhouses.png.asset.json";
import orchard from "@/assets/orchard.png.asset.json";
import soilless from "@/assets/soilless-farming.png.asset.json";
import livestock from "@/assets/livestock.png.asset.json";
import livestockAerial from "@/assets/livestock-aerial.png.asset.json";
import mills from "@/assets/mills.png.asset.json";
import waterfall from "@/assets/garden-waterfall.png.asset.json";
import villaA from "@/assets/villa-a.png.asset.json";
import villaB from "@/assets/villa-b.png.asset.json";
import guestHouses from "@/assets/guest-houses.png.asset.json";
import golf from "@/assets/golf-course.png.asset.json";
import horseTrack from "@/assets/horse-track.png.asset.json";
import mudTrack from "@/assets/mud-track.png.asset.json";
import equestrianAcademy from "@/assets/equestrian-academy.png.asset.json";
import horsingAcademy from "@/assets/horsing-academy.png.asset.json";
import mall from "@/assets/mall.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eden Acres Ranch Estate — Africa's Most Complete Agricultural Estate" },
      { name: "description", content: "A master-planned luxury ranch estate in Nigeria uniting mechanized agriculture, hospitality, wellness, recreation and sustainability into one visionary destination." },
      { property: "og:image", content: estateAerial.url },
      { name: "twitter:image", content: estateAerial.url },
    ],
  }),
  component: Index,
});

function Eyebrow({ chapter, label }: { chapter: string; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-[10px] uppercase tracking-[0.36em] text-gold">{chapter}</span>
      <span className="h-px w-10 bg-gold/60" />
      <span className="text-[10px] uppercase tracking-[0.32em] text-primary-foreground/70">{label}</span>
    </div>
  );
}

function EyebrowLight({ chapter, label }: { chapter: string; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-[10px] uppercase tracking-[0.36em] text-emerald">{chapter}</span>
      <span className="h-px w-10 bg-gold" />
      <span className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">{label}</span>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* CHAPTER I — Entrance / Hero */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <img
          src={entrance.url}
          alt="The grand entrance to Eden Acres Ranch Estate at golden hour"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-primary/95" />
        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-end px-6 pb-24 pt-40 text-primary-foreground lg:px-10">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-px w-12 bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.36em] text-gold">
              Eden Acres Ranch Estate · Nigeria
            </span>
          </div>
          <h1 className="max-w-5xl text-balance font-serif text-5xl leading-[1.02] md:text-7xl lg:text-[104px]">
            Where a nation's<span className="italic text-gold"> abundance</span> begins.
          </h1>
          <p className="mt-10 max-w-2xl text-lg font-light leading-relaxed text-primary-foreground/85 md:text-xl">
            A master-planned luxury estate where mechanized agriculture, hospitality,
            wellness, recreation, and environmental stewardship exist as one
            integrated ecosystem — Africa's most ambitious ranch destination.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a href="#chapter-2" className="inline-flex items-center gap-3 bg-gold px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-gold-foreground transition-colors hover:bg-gold/90">
              Enter the estate <span aria-hidden>→</span>
            </a>
            <Link to="/investment" className="inline-flex items-center gap-3 border border-primary-foreground/40 px-8 py-4 text-[11px] uppercase tracking-[0.28em] transition-colors hover:border-gold hover:text-gold">
              Investment vision
            </Link>
          </div>
        </div>
      </section>

      {/* CHAPTER II — Aerial reveal */}
      <section id="chapter-2" className="relative bg-primary py-32 text-primary-foreground lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid items-start gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Eyebrow chapter="Chapter II" label="A vision from above" />
              <h2 className="mt-8 font-serif text-4xl leading-[1.05] text-balance md:text-6xl">
                One estate. <span className="italic text-gold">Twenty worlds.</span>
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-lg font-light leading-relaxed text-primary-foreground/80">
                Eden Acres is not a farm. Not a resort. Not an agricultural company.
                It is a landmark destination where world-class agriculture, luxury
                architecture, environmental stewardship, and unforgettable experiences
                come together in one visionary estate.
              </p>
              <dl className="mt-14 grid gap-10 border-t border-gold/20 pt-10 sm:grid-cols-3">
                {[
                  { k: "20+", v: "Interconnected divisions" },
                  { k: "10", v: "Chapters of experience" },
                  { k: "1", v: "Integrated ecosystem" },
                ].map((s) => (
                  <div key={s.k}>
                    <dt className="font-serif text-5xl text-gold">{s.k}</dt>
                    <dd className="mt-3 text-[11px] uppercase tracking-[0.22em] text-primary-foreground/60">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="mt-20 overflow-hidden rounded-sm ring-1 ring-gold/25">
            <img src={estateAerial.url} alt="Aerial master plan view of Eden Acres" className="h-auto w-full" />
          </div>
          <div className="mt-6 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-primary-foreground/50">
            <span>Master Plan · Wholistic View</span>
            <Link to="/master-plan" className="text-gold hover:underline">Explore the master plan →</Link>
          </div>
        </div>
      </section>

      {/* CHAPTER III — Agriculture */}
      <section className="py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <EyebrowLight chapter="Chapter III" label="Cultivated at scale" />
              <h2 className="mt-8 font-serif text-4xl leading-[1.05] text-balance md:text-6xl">
                Mechanized agriculture, <span className="italic text-emerald">reimagined for Africa.</span>
              </h2>
            </div>
            <p className="lg:col-span-6 text-lg font-light leading-relaxed text-muted-foreground">
              Sixty-plus acres of plant-based farming — from open-field cereals and root
              crops to climate-controlled greenhouses, soilless towers, and heritage
              orchards. Every division is designed to produce world-class yields with
              minimal environmental footprint.
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-6">
            <figure className="relative col-span-6 aspect-[16/9] overflow-hidden md:col-span-4">
              <img src={farmAerial.url} alt="Aerial view of Eden Acres farms" className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105" />
              <figcaption className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.28em] text-white/90">Total plant-based farm view</figcaption>
            </figure>
            <figure className="relative col-span-3 aspect-square overflow-hidden md:col-span-2 md:aspect-[16/9]">
              <img src={cropFarm.url} alt="Row crop farming at Eden Acres" className="h-full w-full object-cover" />
              <figcaption className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.28em] text-white/90">Crop farms</figcaption>
            </figure>
            <figure className="relative col-span-3 aspect-square overflow-hidden md:col-span-2">
              <img src={greenhouses.url} alt="Greenhouses" className="h-full w-full object-cover" />
              <figcaption className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.28em] text-white/90">Greenhouses</figcaption>
            </figure>
            <figure className="relative col-span-3 aspect-square overflow-hidden md:col-span-2">
              <img src={soilless.url} alt="Soilless vertical farming" className="h-full w-full object-cover" />
              <figcaption className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.28em] text-white/90">Soilless towers</figcaption>
            </figure>
            <figure className="relative col-span-6 aspect-[16/9] overflow-hidden md:col-span-2">
              <img src={orchard.url} alt="Fruit orchards" className="h-full w-full object-cover" />
              <figcaption className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.28em] text-white/90">Orchards</figcaption>
            </figure>
          </div>
          <div className="mt-8 text-right">
            <Link to="/agriculture" className="text-[11px] uppercase tracking-[0.28em] text-emerald hover:text-gold">
              Enter the farms →
            </Link>
          </div>
        </div>
      </section>

      {/* CHAPTER IV — Livestock */}
      <section className="relative overflow-hidden bg-stone-warm/50 py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid items-start gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <EyebrowLight chapter="Chapter IV" label="Living heritage" />
              <h2 className="mt-8 font-serif text-4xl leading-[1.05] text-balance md:text-6xl">
                Livestock raised with <span className="italic text-emerald">discipline and dignity.</span>
              </h2>
              <p className="mt-8 text-lg font-light leading-relaxed text-muted-foreground">
                Cattle, dairy, sheep, goats, and poultry are managed in humane,
                rotationally-grazed pastures alongside integrated aquaculture — every
                system feeding into the next, closing the loop.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8">
                {[
                  ["Cattle & Dairy", "Rotational grazing"],
                  ["Poultry", "Free-range flocks"],
                  ["Sheep & Goats", "Heritage breeds"],
                  ["Aquaculture", "Integrated fisheries"],
                ].map(([a, b]) => (
                  <div key={a}>
                    <div className="font-serif text-xl text-primary">{a}</div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{b}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7 grid gap-4">
              <figure className="relative aspect-[16/10] overflow-hidden">
                <img src={livestockAerial.url} alt="Aerial view of the livestock ranges" className="h-full w-full object-cover" />
              </figure>
              <div className="grid grid-cols-2 gap-4">
                <figure className="relative aspect-square overflow-hidden">
                  <img src={livestock.url} alt="Cattle at Eden Acres" className="h-full w-full object-cover" />
                </figure>
                <figure className="relative aspect-square overflow-hidden">
                  <img src={mills.url} alt="On-site mills and feed processing" className="h-full w-full object-cover" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER V — Gardens & Aquarium */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <img src={waterfall.url} alt="The gardens and waterfall at Eden Acres" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/50 to-transparent" />
        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] items-center px-6 py-32 text-primary-foreground lg:px-10">
          <div className="max-w-xl">
            <Eyebrow chapter="Chapter V" label="Signature sanctuaries" />
            <h2 className="mt-8 font-serif text-4xl leading-[1.05] text-balance md:text-6xl">
              Gardens, waterfalls, and a <span className="italic text-gold">living aquarium</span> atrium.
            </h2>
            <p className="mt-8 text-lg font-light leading-relaxed text-primary-foreground/85">
              Botanical gardens flow into koi ponds and cascading waterfalls; at the
              estate's heart, the Grand Living Aquarium Atrium rises across multiple
              levels — floor-to-ceiling freshwater tanks defining a new architectural
              landmark for the continent.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/aquarium" className="inline-flex items-center gap-3 border border-gold px-6 py-3 text-[11px] uppercase tracking-[0.28em] text-gold hover:bg-gold hover:text-gold-foreground">
                The Aquarium Atrium →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER VI — Hospitality */}
      <section className="py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-3xl">
            <EyebrowLight chapter="Chapter VI" label="Live, stay, retreat" />
            <h2 className="mt-8 font-serif text-4xl leading-[1.05] text-balance md:text-6xl">
              Private villas. <span className="italic text-emerald">Restorative retreats.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">
              A collection of guest villas and private residences framed by the
              landscape — designed for wellness, gathering, and long, unhurried stays.
            </p>
          </div>
          <div className="mt-16 grid gap-4 md:grid-cols-12">
            <figure className="relative aspect-[4/5] overflow-hidden md:col-span-5">
              <img src={villaA.url} alt="Guest villa exterior" className="h-full w-full object-cover" />
              <figcaption className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[0.28em] text-white">Villa · Type I</figcaption>
            </figure>
            <figure className="relative aspect-[4/5] overflow-hidden md:col-span-4">
              <img src={villaB.url} alt="Alternate villa design" className="h-full w-full object-cover" />
              <figcaption className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[0.28em] text-white">Villa · Type II</figcaption>
            </figure>
            <figure className="relative aspect-[4/5] overflow-hidden md:col-span-3">
              <img src={guestHouses.url} alt="Guest houses" className="h-full w-full object-cover" />
              <figcaption className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[0.28em] text-white">Guest houses</figcaption>
            </figure>
          </div>
          <div className="mt-8 text-right">
            <Link to="/hospitality" className="text-[11px] uppercase tracking-[0.28em] text-emerald hover:text-gold">
              Discover hospitality →
            </Link>
          </div>
        </div>
      </section>

      {/* CHAPTER VII — Recreation */}
      <section className="bg-primary py-32 text-primary-foreground lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Eyebrow chapter="Chapter VII" label="Unforgettable pursuits" />
              <h2 className="mt-8 font-serif text-4xl leading-[1.05] text-balance md:text-6xl">
                A championship playground <span className="italic text-gold">beneath open skies.</span>
              </h2>
            </div>
            <p className="lg:col-span-5 text-lg font-light leading-relaxed text-primary-foreground/75">
              Golf, equestrian sport, thoroughbred horse racing and mud-track events —
              recreation at Eden Acres is designed to host both quiet mornings and
              the continent's most spectacular occasions.
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-12">
            <figure className="relative aspect-[16/10] overflow-hidden md:col-span-7">
              <img src={horseTrack.url} alt="Horse racecourse at sunset" className="h-full w-full object-cover" />
              <figcaption className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[0.28em] text-white">Eden Acres Racecourse</figcaption>
            </figure>
            <figure className="relative aspect-[16/10] overflow-hidden md:col-span-5">
              <img src={golf.url} alt="Golf course clubhouse" className="h-full w-full object-cover" />
              <figcaption className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[0.28em] text-white">Championship golf</figcaption>
            </figure>
            <figure className="relative aspect-[16/10] overflow-hidden md:col-span-4">
              <img src={horsingAcademy.url} alt="Equestrian training" className="h-full w-full object-cover" />
              <figcaption className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[0.28em] text-white">Equestrian training</figcaption>
            </figure>
            <figure className="relative aspect-[16/10] overflow-hidden md:col-span-4">
              <img src={equestrianAcademy.url} alt="The Equestrian Academy" className="h-full w-full object-cover" />
              <figcaption className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[0.28em] text-white">Equestrian Academy</figcaption>
            </figure>
            <figure className="relative aspect-[16/10] overflow-hidden md:col-span-4">
              <img src={mudTrack.url} alt="Mud track motorsport" className="h-full w-full object-cover" />
              <figcaption className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[0.28em] text-white">Mud-track events</figcaption>
            </figure>
          </div>
          <div className="mt-8 text-right">
            <Link to="/recreation" className="text-[11px] uppercase tracking-[0.28em] text-gold hover:underline">
              Explore recreation →
            </Link>
          </div>
        </div>
      </section>

      {/* CHAPTER VIII — Sustainability */}
      <section className="py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <EyebrowLight chapter="Chapter VIII" label="Regenerative by design" />
            <h2 className="mt-8 font-serif text-4xl leading-[1.05] text-balance md:text-6xl">
              A closed loop, from <span className="italic text-emerald">soil to sunlight.</span>
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg font-light leading-relaxed text-muted-foreground">
              Solar arrays power operations. Biogas converts organic waste. Water is
              harvested, recycled, and returned to the land. Every division is
              designed so that the estate gives back more than it takes.
            </p>
            <div className="mt-12 grid gap-8 border-t border-border pt-10 sm:grid-cols-2">
              {[
                ["Solar & Renewable", "On-site generation across the estate."],
                ["Biogas & Composting", "Livestock and crop waste made productive."],
                ["Water Stewardship", "Rainwater harvesting and closed-loop irrigation."],
                ["Circular Systems", "Every output becomes another division's input."],
              ].map(([a, b]) => (
                <div key={a}>
                  <div className="font-serif text-2xl text-primary">{a}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER IX — Estate Life (mall / community) */}
      <section className="relative overflow-hidden bg-stone-warm/50 py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid gap-16 lg:grid-cols-12 items-center">
          <figure className="relative lg:col-span-7 aspect-[16/10] overflow-hidden">
            <img src={mall.url} alt="Eden Acres estate commons and retail" className="h-full w-full object-cover" />
          </figure>
          <div className="lg:col-span-5">
            <EyebrowLight chapter="Chapter IX" label="A living community" />
            <h2 className="mt-8 font-serif text-4xl leading-[1.05] text-balance md:text-5xl">
              An estate that <span className="italic text-emerald">gathers people.</span>
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-muted-foreground">
              Marketplaces, dining, wellness and education spaces bring residents,
              guests, and neighbouring communities together — the everyday rhythm of
              a destination that lives all year round.
            </p>
          </div>
        </div>
      </section>

      {/* CHAPTER X — Investment */}
      <section className="relative min-h-screen overflow-hidden bg-primary text-primary-foreground">
        <img src={estateAerial.url} alt="Eden Acres from above" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/85 to-primary" />
        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-center px-6 py-32 lg:px-10">
          <Eyebrow chapter="Chapter X" label="Join the vision" />
          <h2 className="mt-8 max-w-4xl font-serif text-4xl leading-[1.02] text-balance md:text-7xl">
            Be part of Africa's most <span className="italic text-gold">complete estate.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-primary-foreground/80">
            A diversified, long-horizon investment across agriculture, hospitality,
            recreation, and infrastructure. Partnership opportunities are open by
            invitation.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link to="/investment" className="inline-flex items-center gap-3 bg-gold px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-gold-foreground hover:bg-gold/90">
              Investment overview →
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-3 border border-primary-foreground/40 px-8 py-4 text-[11px] uppercase tracking-[0.28em] hover:border-gold hover:text-gold">
              Enquire privately
            </Link>
          </div>
          <div className="mt-24 flex items-center gap-4">
            <img src={logo} alt="" className="h-14 w-14 rounded-full object-cover ring-1 ring-gold/40" />
            <div>
              <div className="font-serif text-xl">Eden Acres Ranch Estate</div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-gold/80">Nigeria · Est. 2026</div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}