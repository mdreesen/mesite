import Stack from "@/components/Stack";
import Metrics from "@/components/Metrics";
import PageTransition from "@/components/PageTransition";

export default function StackPage() {
  return (
    <PageTransition>
      <div className="h-32" />
      <Stack />
      <Metrics />
    </PageTransition>
  );
}
