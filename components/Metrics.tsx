"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "@/components/Reveal";

// TODO: replace with real, defensible numbers from actual projects.
const METRICS = [
  { to: 40, suffix: "%", label: "Faster time-to-interactive after a rendering pipeline rework" },
  { to: 5, suffix: "+", label: "Years shipping production frontend & full-stack systems" },
  { to: 12, suffix: "k", label: "Concurrent sessions handled on an SSE-driven dashboard" },
];

export default function Metrics() {
  const valueRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggers = METRICS.map((metric, i) => {
      const el = valueRefs.current[i];
      if (!el) return null;
      const counter = { val: 0 };
      return ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        once: true,
        onEnter: () =>
          gsap.to(counter, {
            val: metric.to,
            duration: 1.4,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = Math.round(counter.val) + metric.suffix;
            },
          }),
      });
    });

    return () => triggers.forEach((t) => t?.kill());
  }, []);

  return (
    <section className="section">
      <Reveal>
        <span className="eyebrow">Impact</span>
        <h2 className="text-section-h2">A few numbers worth showing.</h2>
      </Reveal>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-12 border-t border-line pt-14">
        {METRICS.map((metric, i) => (
          <div key={metric.label}>
            <div
              className="font-display font-medium text-clay text-[clamp(2.5rem,4.6vw,3.4rem)]"
              ref={(el) => {
                valueRefs.current[i] = el;
              }}
            >
              0{metric.suffix}
            </div>
            <div className="mt-2.5 text-stone text-[0.95rem] max-w-[26ch]">
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
