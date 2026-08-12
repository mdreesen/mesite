import type { Metadata } from "next";
import Projects from "@/components/Projects";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Applications | White Raven Web Developer",
  description: "Full Stack Web Developer",
};

export default function WorkPage() {
  return (
    <PageTransition>
      <div className="h-32" />
      <Projects />
    </PageTransition>
  );
}
