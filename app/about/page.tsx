import type { Metadata } from 'next';
import AboutAxoneSection from 'app/ui/about/axone/section';
import CoordinationSection from 'app/ui/about/coordination/section';
import OrchestrationSection from 'app/ui/about/orchestration/section';
import PurposeSection from 'app/ui/about/purpose/section';
import ResourcesSection from 'app/ui/about/resources/section';
import VisionSection from 'app/ui/about/vision/section';

export const metadata: Metadata = {
  title: 'Axone - About us',
  description:
    'Axone is an open network that lets users buy or sell any off-chain resource securely and efficiently',
};

export default function About () {
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
