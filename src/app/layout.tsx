import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, Newsreader } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "FishFolk — Local knowledge, shared wisdom",
    template: "%s | FishFolk",
  },
  description:
    "Preserve local wisdom, share observations, and learn from the experiences of fishing communities.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${bebasNeue.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
