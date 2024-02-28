import OrchestrationSection from "app/ui/about/orchestration/section";
import ResourcesSection from "app/ui/about/resources/section";
import VisionSection from "app/ui/about/vision/section";
import CoordinationSection from "app/ui/about/coordination/section";
import PurposeSection from "app/ui/about/purpose/section";
import AboutAxoneSection from "app/ui/about/axone/section";

export default function About() {
  return (
    <>
      <OrchestrationSection />
      <ResourcesSection />
      <VisionSection />
      <CoordinationSection />
      <PurposeSection />
      <AboutAxoneSection />
    </>
  );
}
