import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonPage } from "@/components/coming-soon-page";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Sustainability — Eden Acres Ranch Estate" },
      { name: "description", content: "Solar, biogas, water recycling, and circular farming at the core of Eden Acres." },
    ],
  }),
  component: () => (
    <ComingSoonPage
      eyebrow="Chapter IX — Sustainability"
      title="Every system supports another."
      description="Solar energy, biogas, rainwater harvesting, water recycling, waste-to-energy, and circular farming — sustainability engineered into the DNA of the estate."
    />
  ),
});
