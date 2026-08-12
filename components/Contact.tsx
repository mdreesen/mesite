import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <footer className="section pt-40 pb-20 border-t border-line" id="contact">
      <Reveal>
        <h2 className="text-contact-h2">Let&apos;s build something that holds up.</h2>
        <div className="mt-11 flex flex-wrap gap-9">
          <a
            href="mailto:you@example.com"
            className="text-[0.9rem] text-stone border-b border-transparent pb-0.5 transition-colors hover:text-clay hover:border-clay"
          >
            you@example.com
          </a>
          <a
            href="https://mdreesen.com"
            className="text-[0.9rem] text-stone border-b border-transparent pb-0.5 transition-colors hover:text-clay hover:border-clay"
          >
            mdreesen.com
          </a>
          <a
            href="#"
            className="text-[0.9rem] text-stone border-b border-transparent pb-0.5 transition-colors hover:text-clay hover:border-clay"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-[0.9rem] text-stone border-b border-transparent pb-0.5 transition-colors hover:text-clay hover:border-clay"
          >
            GitHub
          </a>
        </div>
      </Reveal>
      <div className="mt-[4.5rem] text-[0.75rem] text-stone">
        © 2026 Michael Dreesen — Kalispell, MT
      </div>
    </footer>
  );
}
