"use client";

import { useEffect, useRef } from "react";
import Reveal from "@/components/Reveal";

import { insuranceFeature, stratacacheFeatures, ascendFeatures, westernRockiesConstruction, ghostformFeatures } from '@/lib/projects';

// TODO: swap in real case studies — title, one-line summary, stack, outcome.
const PROJECTS = [
  insuranceFeature, 
  stratacacheFeatures, 
  ascendFeatures, 
  westernRockiesConstruction,
  ghostformFeatures
];

export default function Projects() {
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || reduceMotion) return;

    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];

    const handlers = cards.map((card) => {
      const onMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(600px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg)`;
      };
      const onLeave = () => {
        card.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg)";
      };
      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
      return { card, onMove, onLeave };
    });

    return () => {
      handlers.forEach(({ card, onMove, onLeave }) => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <section className="section" id="work">
      <Reveal>
        <span className="eyebrow">Selected work</span>
        <h2 className="text-section-h2">A few things worth a closer look.</h2>
      </Reveal>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
        {PROJECTS.map((project, i) => (
          <div
            className="bg-bone-2 border border-line rounded-md p-9 [transform-style:preserve-3d] transition-[transform,border-color] duration-150 ease-out will-change-transform hover:border-stone"
            key={project.title}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
          >
            <span className="text-[0.7rem] uppercase tracking-[0.08em] text-moss font-medium">
              {project.tag}
            </span>
            
            <div>
              <a className="mt-5 text-[0.7rem] uppercase tracking-[0.08em] text-moss font-medium" href={project?.github_href}>Visit Github</a>
            </div>
            <h3 className="font-display font-medium text-[1.4rem] mt-3.5 mb-2">
              {project.title}
            </h3>
            <p className="text-stone text-[0.95rem]">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
