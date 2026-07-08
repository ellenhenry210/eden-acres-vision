import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonPage } from "@/components/coming-soon-page";

export const Route = createFileRoute("/investment")({
  head: () => ({
    meta: [
      { title: "Investment — Eden Acres Ranch Estate" },
      { name: "description", content: "Partner with Eden Acres — a scalable agricultural infrastructure platform with diversified revenue streams." },
    ],
  }),
  component: () => (
    <ComingSoonPage
      eyebrow="Chapter X — Investing in the Future"
      title="Join us in building Africa's most iconic agricultural estate."
      description="A scalable infrastructure platform with diversified revenue streams, generational upside, and measurable impact on food security, employment, and sustainability."
    />
  ),
});
