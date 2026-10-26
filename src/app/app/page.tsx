import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/placeholder-page";

export const metadata: Metadata = {
  title: "Discover",
  description:
    "The planned home for searching and browsing FishFolk community observations.",
};

export default function DiscoverPage() {
  return (
    <PlaceholderPage
      eyebrow="Discover"
      title="Community knowledge, gathered in one place."
      description="This is the planned home for saved observations. Search, categories, source details, and the evidence behind results will live here once the community library is connected."
    />
  );
}
