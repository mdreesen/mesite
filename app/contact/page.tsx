import type { Metadata } from "next";
import Contact from "@/components/Contact";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Contact | White Raven Web Developer",
  description: "Full Stack Web Developer",
};

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="h-32" />
      <Contact />
    </PageTransition>
  );
}
