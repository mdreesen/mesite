import Contact from "@/components/Contact";
import PageTransition from "@/components/PageTransition";

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="h-32" />
      <Contact />
    </PageTransition>
  );
}
