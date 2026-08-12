import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-12">
      <Reveal>
        <span className="eyebrow">Frontend &amp; Full-Stack Engineer</span>
        <h1 className="text-hero">
          Michael Dreesen friendly neighborhood developer.
        </h1>
        <p className="mt-7 max-w-[44ch] text-stone text-[clamp(1rem,1.2vw,1.15rem)]">
          Performance engineering and SaaS architecture. Based in Kalispell, Montana.
        </p>
      </Reveal>
      <div className="absolute bottom-14 left-12 flex items-center gap-3 text-[0.75rem] tracking-[0.06em] text-stone">
        <div className="w-px h-8 bg-[linear-gradient(var(--color-clay),transparent)] animate-scrollcue" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
