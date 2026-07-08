import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonPage } from "@/components/coming-soon-page";

export const Route = createFileRoute("/aquarium")({
  head: () => ({
    meta: [
      { title: "The Grand Living Aquarium Atrium — Eden Acres" },
      { name: "description", content: "A signature architectural sanctuary at the heart of Eden Acres — freshwater aquariums that span multiple levels." },
    ],
  }),
  component: () => (
    <ComingSoonPage
      eyebrow="Chapter V — Signature Architecture"
      title="A sanctuary of glass, water, and light."
      description="Floor-to-ceiling freshwater aquariums extend across multiple levels — a defining architectural centerpiece designed to evoke calm, elegance, and wonder."
    />
  ),
});
