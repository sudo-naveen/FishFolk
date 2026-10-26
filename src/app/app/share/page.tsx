import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/placeholder-page";

export const metadata: Metadata = {
  title: "Share your knowledge",
  description:
    "The planned observation entry point for FishFolk, with text and voice capture that is reviewed before publishing.",
};

export default function ShareObservationPage() {
  return (
    <PlaceholderPage
      eyebrow="Share your knowledge"
      title="An observation begins with what you noticed."
      description="This is the planned observation entry point. Text and voice capture will be available here, with a review step before anything is published."
      showShareLink={false}
    />
  );
}
