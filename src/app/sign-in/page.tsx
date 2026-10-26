import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/placeholder-page";

export const metadata: Metadata = {
  title: "Sign in",
  description:
    "FishFolk accounts are not available in this preview. No authentication is configured yet.",
};

export default function SignInPage() {
  return (
    <PlaceholderPage
      eyebrow="Sign in"
      title="Community accounts are not available yet."
      description="FishFolk is still in preview. Sign-in will let contributors keep track of their observations, but no authentication is configured in this build."
    />
  );
}
