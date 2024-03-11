import Image from "next/image";
import SectionWithSideImage from "app/components/section/sectionWithSideImage";
import diskAscii from "public/images/disk-ascii.svg";

export default function PrivacySection() {
  return (
    <SectionWithSideImage
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
      Easily define any access rights to resources with Axone’s unique composable design. 

      </p>
    </SectionWithSideImage>
  );
}
