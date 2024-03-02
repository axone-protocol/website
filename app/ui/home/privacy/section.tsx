import Image from "next/image";
import SectionWithImage from "app/components/sectionWithImage";
import { homeSectionImageClass } from "app/lib/utils";
import diskAscii from "public/images/disk-ascii.png";

export default function PrivacySection() {
  return (
    <SectionWithImage
      title={{
        text: "Under any conditions",
        size: "lg",
      }}
      textAlign="left"
      alignContent="center"
      image={{
        component: (
          <Image src={diskAscii} alt="disk" className={homeSectionImageClass} />
        ),
        position: "right",
      }}
    >
      <p>
        With Axone, you can train your model using data from multiple sources
        with the data owner choosing his level of privacy, from federated
        learning to open data contributons.
      </p>
    </SectionWithImage>
  );
}
