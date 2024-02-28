import SectionWithImage from "app/components/sectionWithImage";
import { roadmapSectionImageClass } from "app/lib/utils";

export default function Q12024Section() {
  return (
    <SectionWithImage
      title={{ text: "Q1 2024", size: "lg" }}
      textAlign="center"
      alignContent="top"
      image={{
        component: <div className={roadmapSectionImageClass} />,
        position: "left",
      }}
    >
      <p>Finalization of AXONE v1</p>
      <p>First Public AI challenges</p>
      <p>Strategic, pre-launch raise</p>
      <p>Public AXONE UI beta</p>
    </SectionWithImage>
  );
}
