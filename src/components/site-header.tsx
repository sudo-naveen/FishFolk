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
  "inline-flex items-center justify-center gap-1.5 rounded-[2px] bg-accent px-3.5 py-2 text-[12px] font-medium text-background transition-colors hover:bg-[#3b655a]";

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
      <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="font-display text-[1.5rem] leading-none tracking-[0.02em] text-foreground"
          onClick={() => setMenuOpen(false)}
        >
          FishFolk
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
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
            Share knowledge
            <ArrowUpRight className="h-3 w-3" />
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/app/share"
            className="inline-flex h-9 items-center rounded-[2px] bg-accent px-3 text-[11px] font-medium text-background"
          >
            Share knowledge
          </Link>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-[2px] border border-line text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <span className="sr-only">
              {menuOpen ? "Close navigation menu" : "Open navigation menu"}
            </span>
            {menuOpen ? (
              <CloseIcon className="h-4 w-4" />
            ) : (
              <MenuIcon className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          id="mobile-navigation"
          className="border-t border-line bg-background px-4 pb-4 pt-1 sm:px-6 md:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-line py-3 text-[15px] font-medium text-foreground transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/app/share"
              onClick={() => setMenuOpen(false)}
              className={`${buttonStyles} mt-3 w-full py-2.5`}
            >
              Share knowledge
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
