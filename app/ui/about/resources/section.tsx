import Image from "next/image";
import SectionWithSideImage from "app/components/section/sectionWithSideImage";
import axoneTextLogoAscii from "public/images/axone-text-logo-ascii.png";

export default function ResourcesSection() {
  return (
    <div className="pb-28">
      <SectionWithSideImage
        title={{
          text: "Axone is the universal protocol to connect, share and monetize resources between all AI services.",
          size: "lg",
        }}
        alignContent="center"
        textAlign="left"
        image={{
          component: (
            <Image
              src={axoneTextLogoAscii}
              alt="axone text logo"
              className="sm:w-full"
            />
          ),
          position: "right",
        }}
      />
    </div>
  );
}
