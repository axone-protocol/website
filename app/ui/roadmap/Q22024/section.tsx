import SectionWithImage from "app/components/sectionWithImage";
import { roadmapSectionImageClass } from "app/lib/utils";

export default function Q22024Section() {
  return (
    <SectionWithImage
      title={{
        text: "Q2 2024",
        size: "lg",
      }}
      textAlign="center"
      alignContent="top"
      image={{
        component: <div className={roadmapSectionImageClass} />,
        position: "right",
      }}
    >
      <p>Mainnet launch</p>
      <p>TGE</p>
      <p>CEX listings</p>
      <p>IBC connexions to the Cosmos ecosystem & beyond</p>
    </SectionWithImage>
  );
}
