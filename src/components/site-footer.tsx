import Link from "next/link";

const footerLinks = [
  { label: "Discover", href: "/app" },
  { label: "Community", href: "/app" },
  { label: "Sign in", href: "/sign-in" },
];

export function SiteFooter() {
  return (
    <footer className="on-accent bg-accent text-background">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="border-t border-background/20 py-12">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
            <div>
              <Link
                href="/"
                className="font-serif text-2xl font-medium tracking-[-0.03em]"
              >
                FishFolk
              </Link>
              <p className="mt-3 max-w-sm text-sm leading-6 text-background">
                A voice-first home for community knowledge from the water.
              </p>
            </div>

            <nav
              aria-label="Footer"
              className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-background"
            >
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="transition-colors hover:text-background"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <p className="mt-12 text-xs text-background">
            © 2026 FishFolk. Built for community knowledge.
          </p>
        </div>
      </div>
    </footer>
  );
}
