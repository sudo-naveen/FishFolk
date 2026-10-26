import Link from "next/link";

const footerLinks = [
  { label: "Discover", href: "/app" },
  { label: "Community", href: "/app" },
  { label: "Sign in", href: "/sign-in" },
];

export function SiteFooter() {
  return (
    <footer className="on-accent bg-accent text-background">
      <div className="mx-auto max-w-[1120px] px-4 py-6 sm:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
            <Link
              href="/"
              className="font-display text-xl leading-none tracking-[0.02em]"
            >
              FishFolk
            </Link>
            <p className="text-xs leading-5 text-background">
              A voice-first home for community knowledge from the water.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-background"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <p className="mt-4 text-[11px] text-background">
          © 2026 FishFolk. Built for community knowledge.
        </p>
      </div>
    </footer>
  );
}
