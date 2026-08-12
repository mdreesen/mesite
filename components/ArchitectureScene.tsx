"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const STAGES = [
  {
    index: "01 — Start",
    title: "A single idea",
    body: "isolated, typed, and easy to reason about.",
  },
  {
    index: "02 — Wire it up",
    title: "State and structure",
    body: "Hooks, stores, and the data flowing cleanly between them.",
  },
  {
    index: "03 — Connect it",
    title: "End to end",
    body: "REST and SSE talking to real services and a real database.",
  },
  {
    index: "04 — Scale it",
    title: "A system that holds",
    body: "The shape an architecture takes under real, sustained load.",
  },
];

// Ink-toned line drawing, like an architectural sketch — not a neon network.
const LINE_COLOR = 0x221d17; // --ink
const NODE_COLOR = 0xb5502c; // --clay

export default function ArchitectureScene() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const stageRefs = useRef<Array<HTMLDivElement | null>>([]);
  const hintRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const pinEl = pinRef.current;
    if (!container || !pinEl) return;

    gsap.registerPlugin(ScrollTrigger);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const width = () => container.clientWidth;
    const height = () => container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width() / height(), 0.1, 100);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width(), height());
    container.appendChild(renderer.domElement);

    const geo = new THREE.IcosahedronGeometry(1.3, 1);

    const edgesGeo = new THREE.EdgesGeometry(geo);
    const edgesMat = new THREE.LineBasicMaterial({
      color: LINE_COLOR,
      transparent: true,
      opacity: 0.12,
    });
    const edges = new THREE.LineSegments(edgesGeo, edgesMat);

    const pointsMat = new THREE.PointsMaterial({
      color: NODE_COLOR,
      size: 0.05,
      transparent: true,
      opacity: 0.9,
    });
    const points = new THREE.Points(geo, pointsMat);

    const group = new THREE.Group();
    group.add(edges);
    group.add(points);
    group.scale.setScalar(0.35);
    scene.add(group);

    let running = false;
    let rafId: number | null = null;

    const renderFrame = () => renderer.render(scene, camera);

    const loop = () => {
      if (!running) return;
      rafId = requestAnimationFrame(loop);
      group.rotation.z += 0.0006;
      renderFrame();
    };

    const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const updateScene = (progress: number) => {
      group.rotation.y = progress * Math.PI * 2.2;
      group.rotation.x = progress * Math.PI * 0.45;

      const scaleT = clamp(progress / 0.15, 0, 1);
      group.scale.setScalar(lerp(0.35, 1, scaleT));

      edgesMat.opacity = lerp(0.12, 0.5, progress);
      pointsMat.opacity = lerp(0.4, 0.95, progress);
      camera.position.z = lerp(4, 2.5, progress);

      const stageIndex = clamp(Math.floor(progress * 4), 0, 3);
      stageRefs.current.forEach((el, i) => {
        el?.classList.toggle("is-active", i === stageIndex);
      });

      renderFrame();
    };

    const onResize = () => {
      camera.aspect = width() / height();
      camera.updateProjectionMatrix();
      renderer.setSize(width(), height());
      renderFrame();
    };
    window.addEventListener("resize", onResize);

    let trigger: ScrollTrigger | null = null;

    if (reduceMotion) {
      updateScene(1);
      stageRefs.current[3]?.classList.add("is-active");
      if (hintRef.current) hintRef.current.style.display = "none";
    } else {
      trigger = ScrollTrigger.create({
        trigger: pinEl.parentElement ?? pinEl,
        start: "top top",
        end: "+=300%",
        pin: pinEl,
        scrub: 1,
        onUpdate: (self) => updateScene(self.progress),
        onToggle: (self) => {
          running = self.isActive;
          if (running) loop();
        },
      });
    }

    return () => {
      running = false;
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      trigger?.kill();
      renderer.dispose();
      geo.dispose();
      edgesGeo.dispose();
      edgesMat.dispose();
      pointsMat.dispose();
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section>
      <div className="pin-section" ref={pinRef}>
        <div className="pin-canvas" ref={containerRef} />

        <div>
          {STAGES.map((stage, i) => (
            <div
              className="stage"
              data-stage={i}
              key={stage.title}
              ref={(el) => {
                stageRefs.current[i] = el;
              }}
            >
              <span className="stage-index">{stage.index}</span>
              <h3 className="text-stage-title">{stage.title}</h3>
              <p className="text-stone">{stage.body}</p>
            </div>
          ))}
        </div>

        <div className="pin-hint" ref={hintRef}>
          Keep scrolling
        </div>
      </div>
    </section>
  );
}
