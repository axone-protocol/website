import IntroductionSection from "app/ui/roadmap/introduction/section";
import LastYearsSection from "app/ui/roadmap/lastYears/section";
import Q12024Section from "app/ui/roadmap/Q12024/section";
import Q22024Section from "app/ui/roadmap/Q22024/section";

export default function Roadmap() {
  return (
    <>
      <IntroductionSection />
      <LastYearsSection />
      <Q12024Section />
      <Q22024Section />
    </>
  );
}
