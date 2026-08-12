"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const STAGES = [
  {
    index: "Everything",
    title: "Every option, all at once",
    body: "Powerful in theory. Exhausting to actually use.",
  },
  {
    index: "Reduced",
    title: "Most of it removed",
    body: "What's left is what earns its place.",
  },
  {
    index: "Considered",
    title: "Less, but considered",
    body: "The same principle applied to software as to a well-made chair.",
  },
];

const POINT_COUNT = 260;
const NODE_COLOR = 0xb5502c; // --clay
const LINE_COLOR = 0x5f6f52; // --moss

// Evenly distributes points on a sphere surface — the "resolved" target shape.
function fibonacciSphere(count: number, radius: number): Float32Array {
  const positions = new Float32Array(count * 3);
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;
    const x = Math.cos(theta) * r;
    const z = Math.sin(theta) * r;
    positions[i * 3] = x * radius;
    positions[i * 3 + 1] = y * radius;
    positions[i * 3 + 2] = z * radius;
  }
  return positions;
}

function scatteredCloud(count: number, radius: number): Float32Array {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    // random point inside a cube, roughly 2x the sphere's radius —
    // reads as "chaotic" rather than another sphere
    positions[i * 3] = (Math.random() - 0.5) * radius * 4;
    positions[i * 3 + 1] = (Math.random() - 0.5) * radius * 4;
    positions[i * 3 + 2] = (Math.random() - 0.5) * radius * 4;
  }
  return positions;
}

export default function Philosophy() {
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
    camera.position.z = 4.5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width(), height());
    container.appendChild(renderer.domElement);

    const radius = 1.2;
    const start = scatteredCloud(POINT_COUNT, radius);
    const target = fibonacciSphere(POINT_COUNT, radius);
    const current = new Float32Array(start);

    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute("position", new THREE.BufferAttribute(current, 3));
    pointsGeo.attributes.position.setUsage(THREE.DynamicDrawUsage);

    const pointsMat = new THREE.PointsMaterial({
      color: NODE_COLOR,
      size: 0.045,
      transparent: true,
      opacity: 0.85,
    });
    const cloud = new THREE.Points(pointsGeo, pointsMat);

    // A faint sphere outline that only appears once the form has resolved
    const outlineGeo = new THREE.SphereGeometry(radius, 24, 16);
    const outlineMat = new THREE.LineBasicMaterial({
      color: LINE_COLOR,
      transparent: true,
      opacity: 0,
    });
    const outline = new THREE.LineSegments(new THREE.WireframeGeometry(outlineGeo), outlineMat);

    const group = new THREE.Group();
    group.add(cloud);
    group.add(outline);
    scene.add(group);

    let running = false;
    let rafId: number | null = null;
    const renderFrame = () => renderer.render(scene, camera);

    const loop = () => {
      if (!running) return;
      rafId = requestAnimationFrame(loop);
      group.rotation.y += 0.0012;
      renderFrame();
    };

    const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const updateScene = (progress: number) => {
      const posAttr = pointsGeo.getAttribute("position") as THREE.BufferAttribute;
      for (let i = 0; i < POINT_COUNT * 3; i++) {
        current[i] = lerp(start[i], target[i], progress);
      }
      posAttr.needsUpdate = true;

      group.rotation.y = lerp(0, Math.PI * 1.4, progress);
      outlineMat.opacity = clamp((progress - 0.75) / 0.25, 0, 1) * 0.4;
      camera.position.z = lerp(4.5, 3.2, progress);

      const stageIndex = clamp(Math.floor(progress * 3), 0, 2);
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
      stageRefs.current[2]?.classList.add("is-active");
      if (hintRef.current) hintRef.current.style.display = "none";
    } else {
      trigger = ScrollTrigger.create({
        trigger: pinEl.parentElement ?? pinEl,
        start: "top top",
        end: "+=220%",
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
      pointsGeo.dispose();
      pointsMat.dispose();
      outlineGeo.dispose();
      outline.geometry.dispose();
      outlineMat.dispose();
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section>
      <div className="pin-section pin-section-alt" ref={pinRef}>
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
