import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export function ComingSoonPage({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteNav />
      <main className="flex-1 flex items-center bg-primary text-primary-foreground">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10 py-40 w-full">
          <div className="text-[11px] uppercase tracking-[0.32em] text-gold">{eyebrow}</div>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05] text-balance max-w-4xl">
            {title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-primary-foreground/75 font-light leading-relaxed">
            {description}
          </p>
          <div className="mt-14 flex items-center gap-4">
            <div className="h-px w-16 bg-gold" />
            <span className="text-[10px] uppercase tracking-[0.28em] text-gold/80">
              Chapter in preparation
            </span>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}