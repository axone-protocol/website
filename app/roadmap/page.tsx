import type { Metadata } from 'next';
import IntroductionSection from 'app/ui/roadmap/introduction/section';
import LastYearsSection from 'app/ui/roadmap/lastYears/section';
import Q12024Section from 'app/ui/roadmap/Q12024/section';
import Q22024Section from 'app/ui/roadmap/Q22024/section';

export const metadata: Metadata = {
  title: 'Axone - Roadmap',
  description:
    'Axone roadmap is essential for understanding the project\'s trajectory and the anticipated significant developments',
};

export default function Roadmap () {
  return (
    <>
      <IntroductionSection />
      <LastYearsSection />
      <Q12024Section />
      <Q22024Section />
    </>
  );
}
