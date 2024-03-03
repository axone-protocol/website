import Image from "next/image";
import SectionWithImage from "app/components/sectionWithImage";
import diskAscii from "public/images/disk-ascii.svg";

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
          <Image
            src={diskAscii}
            alt="disk"
            className="w-1/2 sm:w-5/6 lg:w-2/3 xl:w-3/5"
          />
        ),
        position: "right",
        justify: "right",
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
