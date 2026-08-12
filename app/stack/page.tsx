import type { Metadata } from "next";
import Stack from "@/components/Stack";
import Metrics from "@/components/Metrics";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Stack | White Raven Web Developer",
  description: "Full Stack Web Developer",
};

export default function StackPage() {
  return (
    <PageTransition>
      <div className="h-32" />
      <Stack />
      <Metrics />
    </PageTransition>
  );
}
