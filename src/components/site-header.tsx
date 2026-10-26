"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, CloseIcon, MenuIcon } from "@/components/icons";

const navigation = [
  { label: "Discover", href: "/app" },
  { label: "Community", href: "/app" },
  { label: "Sign in", href: "/sign-in" },
];

const buttonStyles =
  "inline-flex items-center justify-center gap-2 rounded-[2px] bg-accent px-5 py-2.5 text-[13px] font-medium text-background transition-colors hover:bg-[#3b655a]";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="border-b border-line bg-background">
      <div className="mx-auto flex h-20 max-w-[1240px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="font-serif text-[1.4rem] font-medium tracking-[-0.03em] text-foreground"
          onClick={() => setMenuOpen(false)}
        >
          FishFolk
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[13px] font-medium text-muted-strong transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/app/share" className={buttonStyles}>
            Share your knowledge
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/app/share"
            className="rounded-[2px] bg-accent px-3 py-2 text-[11px] font-medium text-background"
          >
            Share your knowledge
          </Link>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-[2px] border border-line text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <span className="sr-only">
              {menuOpen ? "Close navigation menu" : "Open navigation menu"}
            </span>
            {menuOpen ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          id="mobile-navigation"
          className="border-t border-line bg-background px-5 pb-8 pt-2 sm:px-8 md:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-line py-4 font-serif text-xl tracking-[-0.02em] text-foreground transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/app/share"
              onClick={() => setMenuOpen(false)}
              className={`${buttonStyles} mt-6 w-full`}
            >
              Share your knowledge
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
