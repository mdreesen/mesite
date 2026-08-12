import Reveal from "@/components/Reveal";
import { current_year } from "@/lib/date_time";

export default function Contact() {
  return (
    <footer className="section pt-40 pb-20 border-t border-line" id="contact">
      <Reveal>
        <h2 className="text-contact-h2">Let&apos;s build something that holds up.</h2>
        <div className="mt-11 flex flex-wrap gap-9">
          <a
            href="mailto:mdreesen90@gmail.com"
            className="text-[0.9rem] text-stone border-b border-transparent pb-0.5 transition-colors hover:text-clay hover:border-clay"
          >
            mdreesen90@gmail.com
          </a>
          <a
            href="https://mdreesen.com"
            className="text-[0.9rem] text-stone border-b border-transparent pb-0.5 transition-colors hover:text-clay hover:border-clay"
          >
            mdreesen.com
          </a>
          <a
            href="https://linkedin.com/in/mdreesen"
            target="_blank"
            className="text-[0.9rem] text-stone border-b border-transparent pb-0.5 transition-colors hover:text-clay hover:border-clay"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/mdreesen"
            target="_blank"
            className="text-[0.9rem] text-stone border-b border-transparent pb-0.5 transition-colors hover:text-clay hover:border-clay"
          >
            GitHub
          </a>
        </div>
      </Reveal>
      <div className="mt-[4.5rem] text-[0.75rem] text-stone">
        © {current_year()} Michael Dreesen — Kalispell, MT
      </div>
    </footer>
  );
}
