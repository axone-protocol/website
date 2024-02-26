import Image from "next/image";
import SectionImage from "app/components/sectionImage";
import diskAscii from "public/images/disk-ascii.png";

export default function PrivacySection() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <div className="grid content-center gap-3 text-center sm:text-left">
        <h2 className="font-sixtyFour text-xl md:text-2xl">
          Under any conditions
        </h2>
        <p>
          With Axone, you can train your model using data from multiple sources
          with the data owner choosing his level of privacy, from federated
          learning to open data contributons.
        </p>
      </div>
      <SectionImage imagePosition="right">
        <Image src={diskAscii} alt="disk" />
      </SectionImage>
    </div>
  );
}
