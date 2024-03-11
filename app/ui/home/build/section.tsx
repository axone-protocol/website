import Image from "next/image";
import SectionWithSideImage from "app/components/section/sectionWithSideImage";
import computerAscii from "public/images/build-new-thing.svg";

export default function BuildSection() {
  return (
    <SectionWithSideImage
      title={{
        text: "To build new things",
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
      Trust-minimized collaboration creates new opportunities for builders. Design workflows involving thousands of different providers. Axone redefines collaborative AI.
      </p>
    </SectionWithSideImage>
  );
}
