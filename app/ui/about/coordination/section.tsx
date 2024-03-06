import Image from "next/image";
import SectionWithTopImage from "app/components/section/sectionWithTopImage";
import brainAscii from "public/images/brain-ascii.png";

export default function CoordinationSection() {
  return (
    <SectionWithTopImage
      title={{
        text: `From economies of scale...
        to coordination at scale`,
        size: "lg",
      }}
      textAlign="left"
      padding
      image={{
        component: (
          <Image
            src={brainAscii}
            alt="brain"
            className="w-2/3 md:w-1/2 lg:w-2/3"
          />
        ),
      }}
    >
      <p className="pt-12">
        Building AI is about coordination between data, models, and
        infrastructure.
      </p>
      <p>
        The best coordination systems today are current technology giants. They
        pool a handful of great engineers and a lot of computing power together,
        and create the best models today. They benefit from economies of scale.
        They are the heritage of the industrial revolution.
      </p>
      <p>
        What if? What if we were able to coordinate ourselves, in a scalable
        way, globally?
      </p>
      <p>
        Millions of data providers, of model providers, of infrastructure
        providers... together. Sovereign. Without intermediaries.
      </p>
    </SectionWithTopImage>
  );
}
