import Link from "next/link";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import PageTransition from "@/components/PageTransition";
import ArchitectureScene from "@/components/ArchitectureScene";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <ArchitectureScene />
      <Philosophy />
      <Projects />
      <Contact />
    </PageTransition>
  );
}
