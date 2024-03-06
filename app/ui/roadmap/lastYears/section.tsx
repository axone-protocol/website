import Image from "next/image";
import SectionWithSideImage from "app/components/section/sectionWithSideImage";
import { roadmapSectionImageClass } from "app/lib/utils";
import laptopAscii from "public/images/laptop-ascii.png";

export default function LastYearsSection() {
  return (
    <SectionWithSideImage
      title={{ text: "2022 - 2023", size: "lg" }}
      textAlign="right"
      alignContent="center"
      image={{
        component: (
          <Image
            src={laptopAscii}
            alt="laptop"
            className={roadmapSectionImageClass}
          />
        ),
        position: "right",
      }}
    >
      <p>Incentivized public testnet launched in Nov. 2022</p>
      <p>Core modules and smart contracts deployed on testnet</p>
      <p>Initial community of builders, beta testers and ambassadors</p>
      <p>Proofs of concept with 5 major businesses in Europe</p>
      <p>Interfaces design</p>
      <p>Interfaces development</p>
      <p>Pre-seed & Seed raise</p>
    </SectionWithSideImage>
  );
}
