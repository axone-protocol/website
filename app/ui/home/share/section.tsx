import Image from "next/image";
import SectionWithImage from "app/components/sectionWithImage";
import { homeSectionImageClass } from "app/lib/utils";
import computerAscii from "public/images/computer-ascii.png";

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
            className={homeSectionImageClass}
          />
        ),
        position: "left",
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
