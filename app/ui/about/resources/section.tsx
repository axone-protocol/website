import SectionWithSideImage from "app/components/section/sectionWithSideImage";
import AxoneLogo from "app/components/axoneLogo";

export default function ResourcesSection() {
  return (
    <div className="pb-28">
      <SectionWithSideImage
        title={{
          text: "Axone is the universal protocol to connect, share and monetize resources between all AI services.",
          size: "lg",
        }}
        alignContent="center"
        textAlign="left"
        image={{
          component: <AxoneLogo className="w-2/3 sm:w-3/5" />,
          position: "right",
        }}
      />
    </div>
  );
}
