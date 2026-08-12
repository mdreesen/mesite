import dynamic from "next/dynamic";
import Link from "next/link";
import Hero from "@/components/Hero";
import PageTransition from "@/components/PageTransition";
import ArchitectureScene from "@/components/ArchitectureScene";
import Philosophy from "@/components/Philosophy";
// const ArchitectureScene = dynamic(
//   () => import("@/components/ArchitectureScene"),
//   { ssr: false }
// );
// const Philosophy = dynamic(() => import("@/components/Philosophy"), {
//   ssr: false,
// });

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <ArchitectureScene />
      <Philosophy />
      <section className="section pt-0 pb-24">
        <Link href="/stack" className="font-display text-[1.4rem] text-clay border-b border-transparent transition-colors hover:border-clay">
          See the toolkit &rarr;
        </Link>
      </section>
    </PageTransition>
  );
}
