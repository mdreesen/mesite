import Projects from "@/components/Projects";
import PageTransition from "@/components/PageTransition";

export default function WorkPage() {
  return (
    <PageTransition>
      <div className="h-32" />
      <Projects />
    </PageTransition>
  );
}
