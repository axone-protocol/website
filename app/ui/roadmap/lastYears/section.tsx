import SectionWithImage from "app/components/sectionWithImage";
import { roadmapSectionImageClass } from "app/lib/utils";

export default function LastYearsSection() {
  return (
    <SectionWithImage
      title={{ text: "2022 - 2023", size: "lg" }}
      textAlign="center"
      alignContent="top"
      image={{
        component: <div className={roadmapSectionImageClass} />,
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
    </SectionWithImage>
  );
}
