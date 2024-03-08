import Image from "next/image";
import SectionWithTopImage from "app/components/section/sectionWithTopImage";
import { aboutSectionImageClass } from "app/lib/utils";
import open from "public/images/open.svg";

export default function PurposeSection() {
  return (
    <SectionWithTopImage
      title={{
        text: "Axone’s purpose is to open the digital silos",
        size: "lg",
      }}
      textAlign="left"
      padding
      image={{
        component: (
          <Image src={open} alt="open" className={aboutSectionImageClass} />
        ),
      }}
    >
      <p className="pt-12">
        The world is filled with an abundance of datasets, models, and
        resources. But they stay isolated. Within companies. Within our servers
        and devices.
      </p>
      <div>
        <p>The orchestration layer opens the silos by:</p>
        <p>
          Connecting all on-chain and off-chain resources into a single network
        </p>
        <p>Making access conditions explicit and composable</p>
        <p>Creating trust and incentives for providers</p>
        <p>
          Making it easy for consumers to create complex, distributed workflows
        </p>
      </div>
      <p>
        Welcome to the post-scarcity world where AI helps us solve humanity’s
        problems and we, the people, can benefit from it.
      </p>
    </SectionWithTopImage>
  );
}
