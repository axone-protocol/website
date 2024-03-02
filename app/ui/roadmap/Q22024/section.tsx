import Image from "next/image";
import SectionWithImage from "app/components/sectionWithImage";
import { roadmapSectionImageClass } from "app/lib/utils";
import sphereAscii from "public/images/sphere-ascii.png";

export default function Q22024Section() {
  return (
    <SectionWithImage
      title={{
        text: "Q2 2024",
        size: "lg",
      }}
      textAlign="right"
      alignContent="center"
      image={{
        component: (
          <Image
            src={sphereAscii}
            alt="sphere"
            className={roadmapSectionImageClass}
          />
        ),
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
