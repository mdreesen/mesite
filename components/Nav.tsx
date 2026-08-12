"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { directionBetween } from "@/lib/route-order";

const LINKS = [
  { href: "/stack", label: "Stack" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    // viewTransitionName anchors this element across navigations — see
    // the matching ::view-transition-group(site-header) rule in
    // globals.css, which stops it from sliding with the page content.
    <nav
      className="fixed inset-x-0 top-0 z-[100] flex items-center justify-between lg:px-12 md:px-12 px-6 py-8 bg-[linear-gradient(to_bottom,var(--color-bone)_40%,transparent)]"
      style={{ viewTransitionName: "site-header" }}
    >
      <Link
        href="/"
        className="font-display lg:text-[1.1rem] md:text-[1.1rem] font-medium text-ink text-[.7rem]"
        transitionTypes={[directionBetween(pathname, "/")]}
      >
        Michael Dreesen
      </Link>
      <div className="flex gap-10">
        {LINKS.map((link) => {
          const isCurrent = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              transitionTypes={[directionBetween(pathname, link.href)]}
              className={`text-[0.8rem] tracking-[0.08em] uppercase border-b transition-colors ${
                isCurrent
                  ? "text-ink border-clay"
                  : "text-stone border-transparent hover:text-clay"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
