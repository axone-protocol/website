import Image from "next/image";
import SectionWithImage from "app/components/sectionWithImage";
import computerAscii from "public/images/computer-ascii.svg";

export default function ShareSection() {
  return (
    <SectionWithImage
      title={{
        text: "Share anything",
        size: "lg",
      }}
      textAlign="left"
      alignContent="center"
      image={{
        component: (
          <Image
            src={computerAscii}
            alt="computer"
            className="w-3/5 sm:w-auto lg:w-3/4 xl:w-2/3"
          />
        ),
        position: "left",
        justify: "left",
      }}
    >
      <p>
        Axone redefines resource sharing in AI, enabling seamless access to data
        and computational tools. It offers a secure, efficient platform for
        collaboration, driving innovation and value across the AI ecosystem.
      </p>
    </SectionWithImage>
  );
}
