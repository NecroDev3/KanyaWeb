"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export type NavItem = {
  label: string;
  href?: string;
  onClick?: () => void;
};

export function SiteHeader({
  tagline = "Empowering through skills",
  items,
}: {
  tagline?: string;
  items: NavItem[];
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleItem = (item: NavItem) => {
    item.onClick?.();
    setOpen(false);
  };

  return (
    <header className="w-full bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3 px-4 py-3 md:px-6 md:py-4">
        <div className="min-w-0 flex items-center gap-2 sm:gap-3">
          <Link
            href="/"
            className="font-bold text-xl sm:text-2xl md:text-3xl hover:text-[#cf4500] transition-colors shrink-0"
          >
            KanyaCSI
          </Link>
          <p className="hidden sm:block text-sm text-gray-300 truncate">
            {tagline}
          </p>
        </div>

        <nav className="hidden md:block" aria-label="Main">
          <ul className="flex items-center gap-6 text-base">
            {items.map((item) => (
              <li key={item.label}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center hover:text-[#cf4500] transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleItem(item)}
                    className="inline-flex min-h-11 items-center hover:text-[#cf4500] transition-colors"
                  >
                    {item.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center min-h-11 min-w-11 rounded-lg border border-white/20 hover:bg-white/10"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          className="md:hidden border-t border-white/10 bg-black mobile-menu"
          aria-label="Mobile"
        >
          <ul className="flex flex-col px-4 py-3">
            {items.map((item) => (
              <li key={item.label} className="border-b border-white/10 last:border-b-0">
                {item.href ? (
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-12 items-center text-base hover:text-[#cf4500]"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleItem(item)}
                    className="flex w-full min-h-12 items-center text-left text-base hover:text-[#cf4500]"
                  >
                    {item.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
