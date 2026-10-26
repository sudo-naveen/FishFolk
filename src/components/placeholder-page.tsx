import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type PlaceholderPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  showShareLink?: boolean;
  children?: ReactNode;
};

export function PlaceholderPage({
  eyebrow,
  title,
  description,
  showShareLink = true,
  children,
}: PlaceholderPageProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main id="main" className="flex-1">
        <div className="mx-auto flex max-w-[1120px] flex-col justify-center px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-accent uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-[18ch] font-display text-[clamp(2.75rem,6vw,4.5rem)] leading-[0.95] tracking-[0.01em] text-balance">
            {title}
          </h1>
          <p className="mt-6 max-w-[55ch] text-[17px] leading-7 text-muted-strong">
            {description}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline hover:underline-offset-4"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to FishFolk
            </Link>
            {showShareLink ? (
              <Link
                href="/app/share"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-strong hover:text-accent"
              >
                Share your knowledge
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : null}
          </div>
          {children}
          <p className="mt-16 max-w-[55ch] border-t border-line pt-6 text-sm leading-6 text-muted-strong">
            This is a preview route. The full experience is still being built,
            and nothing here represents live community data.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
