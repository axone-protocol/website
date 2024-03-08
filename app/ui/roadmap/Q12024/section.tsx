import Image from "next/image";
import SectionWithSideImage from "app/components/section/sectionWithSideImage";
import { roadmapSectionImageClass } from "app/lib/utils";
import axoneLogoAscii from "public/images/axone-logo-ascii.png";

export default function Q12024Section() {
  return (
    <SectionWithSideImage
      title={{ text: "Q1 2024", size: "lg" }}
      textAlign="left"
      alignContent="center"
      image={{
        component: (
          <Image
            src={axoneLogoAscii}
            alt="axone"
            className={roadmapSectionImageClass}
          />
        ),
        position: "left",
      }}
    >
      <p>Finalization of AXONE v1</p>
      <p>First Public AI challenges</p>
      <p>Strategic, pre-launch raise</p>
      <p>Public AXONE UI beta</p>
    </SectionWithSideImage>
  );
}
