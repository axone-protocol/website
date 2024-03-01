import SectionWithImage from "app/components/sectionWithImage";
import { fullWidthImageClass } from "app/lib/utils";

export default function ResourcesSection() {
  return (
    <SectionWithImage
      title={{
        text: "Axone is the universal protocol to connect, share and monetize resources between all AI services.",
        size: "lg",
      }}
      alignContent="center"
      textAlign="left"
      image={{
        component: <div className={fullWidthImageClass} />,
        position: "right",
      }}
    />
  );
}
