import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonPage } from "@/components/coming-soon-page";

export const Route = createFileRoute("/hospitality")({
  head: () => ({
    meta: [
      { title: "Hospitality & Recreation — Eden Acres Ranch Estate" },
      { name: "description", content: "Luxury villas, wellness, fine dining, golf, equestrian, and racing at Eden Acres." },
    ],
  }),
  component: () => (
    <ComingSoonPage
      eyebrow="Chapters VII & VIII — Hospitality & Recreation"
      title="A weekend that feels like another world."
      description="Guest villas, wellness sanctuaries, fine dining, equestrian academy, horse and mud racing, golf, and event pavilions — set within a private landscape."
    />
  ),
});
