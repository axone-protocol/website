import Image from "next/image";
import SectionImage from "components/sectionImage";
import computerAscii from "public/images/computer-ascii.png";

export default function ShareSection() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <SectionImage imagePosition="left">
        <Image src={computerAscii} alt="computer" />
      </SectionImage>
      <div className="grid content-center gap-3 text-center sm:text-left">
        <h2 className="font-sixtyFour text-xl md:text-2xl">Share anything</h2>
        <p>
          Axone redefines resource sharing in AI, enabling seamless access to
          data and computational tools. It offers a secure, efficient platform
          for collaboration, driving innovation and value across the AI
          ecosystem.
        </p>
      </div>
    </div>
  );
}
