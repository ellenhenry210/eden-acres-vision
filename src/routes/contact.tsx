import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonPage } from "@/components/coming-soon-page";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Eden Acres Ranch Estate" },
      { name: "description", content: "Speak with the Eden Acres estate office — enquiries, hospitality, investment, and press." },
    ],
  }),
  component: () => (
    <ComingSoonPage
      eyebrow="Contact"
      title="Speak with the estate office."
      description="For hospitality, investment, press, and general enquiries. A full contact experience with enquiry form and estate map is being prepared."
    />
  ),
});
