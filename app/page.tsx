import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Philosophy from "@/components/Philosophy";
import PageTransition from "@/components/PageTransition";
import ArchitectureScene from "@/components/ArchitectureScene";

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
