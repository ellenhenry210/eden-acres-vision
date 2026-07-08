import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonPage } from "@/components/coming-soon-page";

export const Route = createFileRoute("/master-plan")({
  head: () => ({
    meta: [
      { title: "Master Plan — Eden Acres Ranch Estate" },
      { name: "description", content: "Explore the interactive master plan of Eden Acres — a world-class, self-sustaining ranch ecosystem." },
    ],
  }),
  component: () => (
    <ComingSoonPage
      eyebrow="Chapter II — The Master Vision"
      title="An interactive aerial map of the entire estate."
      description="From private livestock and operations to the guest and amenity zone and the racing and equestrian precinct — every district of Eden Acres, revealed."
    />
  ),
});
