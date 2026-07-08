import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonPage } from "@/components/coming-soon-page";

export const Route = createFileRoute("/agriculture")({
  head: () => ({
    meta: [
      { title: "Agriculture — Eden Acres Ranch Estate" },
      { name: "description", content: "Mechanized crop farming, greenhouses, orchards, fisheries, and soilless production at Eden Acres." },
    ],
  }),
  component: () => (
    <ComingSoonPage
      eyebrow="Chapters III & IV — Farming & Livestock"
      title="Precision agriculture meets world-class animal welfare."
      description="Mechanized crop fields, greenhouses, orchards, soilless towers, fisheries, and biosecure livestock facilities — engineered as one integrated ecosystem."
    />
  ),
});
