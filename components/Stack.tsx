"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "@/components/Reveal";

const TOOLS = [
  "TypeScript",
  "React / Next.js",
  "Vue / Nuxt.js",
  "Svelte 5",
  "Node.js",
  "REST APIs",
  "SSE",
  "SQL",
  "MongoDB",
  "Tailwind / SCSS",
];

export default function Stack() {
  const pillRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggers = pillRefs.current.map((pill, i) => {
      if (!pill) return null;
      return ScrollTrigger.create({
        trigger: pill,
        start: "top 90%",
        toggleActions: "play none none reverse",
        onEnter: () =>
          gsap.to(pill, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: i * 0.04,
          }),
      });
    });

    return () => triggers.forEach((t) => t?.kill());
  }, []);

  return (
    <section className="section" id="stack">
      <Reveal>
        <span className="eyebrow">Toolkit</span>
        <h2 className="text-section-h2">What it&apos;s built with, most days.</h2>
      </Reveal>
      <div className="flex flex-wrap gap-3">
        {TOOLS.map((tool, i) => (
          <span
            className="text-[0.9rem] px-5 py-2.5 border border-line rounded text-stone opacity-0 -translate-y-3 hover:border-clay hover:text-ink transition-colors"
            key={tool}
            ref={(el) => {
              pillRefs.current[i] = el;
            }}
          >
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}
