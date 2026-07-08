import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Eden Acres Ranch Estate" },
      { name: "description", content: "Speak with the Eden Acres estate office — hospitality, investment, press and general enquiries." },
      { property: "og:title", content: "Contact Eden Acres" },
      { property: "og:description", content: "Enquiries for hospitality, investment and press." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [subject, setSubject] = useState("Hospitality");
  const buildMailto = (data: FormData) => {
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const body = `Name: ${name}%0AEmail: ${email}%0A%0A${encodeURIComponent(message)}`;
    return `mailto:office@edenacresranch.com?subject=${encodeURIComponent("Eden Acres · " + subject)}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="pt-32 pb-12 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="text-[10px] uppercase tracking-[0.36em] text-gold">Contact</div>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl text-balance max-w-4xl">Speak with the <span className="italic text-gold">estate office.</span></h1>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10 grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-8">
            {[
              ["Hospitality", "stay@edenacresranch.com"],
              ["Investment", "partners@edenacresranch.com"],
              ["Press", "press@edenacresranch.com"],
              ["General", "office@edenacresranch.com"],
            ].map(([t, e]) => (
              <div key={t}>
                <div className="text-[10px] uppercase tracking-[0.32em] text-emerald">{t}</div>
                <div className="mt-2 font-serif text-xl text-primary">{e}</div>
              </div>
            ))}
          </div>
          <form
            className="lg:col-span-7 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              window.location.href = buildMailto(data);
            }}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Name</span>
                <input required name="name" className="mt-2 w-full border border-border bg-transparent px-4 py-3 focus:border-gold focus:outline-none" />
              </label>
              <label className="block">
                <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Email</span>
                <input required type="email" name="email" className="mt-2 w-full border border-border bg-transparent px-4 py-3 focus:border-gold focus:outline-none" />
              </label>
            </div>
            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Subject</span>
              <select value={subject} onChange={(e) => setSubject(e.target.value)} className="mt-2 w-full border border-border bg-transparent px-4 py-3 focus:border-gold focus:outline-none">
                {["Hospitality","Investment","Press","General"].map(o => <option key={o}>{o}</option>)}
              </select>
            </label>
            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Message</span>
              <textarea required name="message" rows={6} className="mt-2 w-full border border-border bg-transparent px-4 py-3 focus:border-gold focus:outline-none" />
            </label>
            <button type="submit" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-[11px] uppercase tracking-[0.28em] hover:bg-primary/90">
              Send enquiry →
            </button>
          </form>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
