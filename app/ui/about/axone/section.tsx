import Image from "next/image";
import SectionWithTopImage from "app/components/sectionWithTopImage";
import UnderlinedLink from "app/components/underlinedLink";
import { externalUrls } from "app/lib/navigation/constants";
import axoneTextLogoAscii from "public/images/axone-text-logo-ascii.png";

export default function AboutAxoneSection() {
  return (
    <SectionWithTopImage
      title={{
        text: "What is Axone?",
        size: "lg",
      }}
      textAlign="left"
      padding
      image={{
        component: (
          <Image
            src={axoneTextLogoAscii}
            alt="axone text logo"
            className="mb-5"
          />
        ),
      }}
    >
      <p className="pt-12">
        Axone is an open network that lets users buy or sell any off-chain
        resource securely and efficiently. A blockchain specifically designed
        for off-chain coordination at scale.
      </p>
      <p>
        Open Permissionless Network: Axone democratizes secure,
        censorship-resistant, open to all providers and builders.
      </p>
      <p>
        Anything as a Service: Data, algorithms, storage, computation, APIs...
        Anything can be shared in Axone.
      </p>
      <p>
        Any conditions: A unique approach to digital rights management: define
        any condition, in a composable way.
      </p>
      <p>
        Scalable, Sovereign, Interoperable: A purpose-built layer-1 built for
        synergies with anything web2 or web3.
      </p>
      <p>
        More details on Axone on our{" "}
        <UnderlinedLink url={externalUrls.whitepaper} target="_blank">
          WhitePaper
        </UnderlinedLink>
        , our{" "}
        <UnderlinedLink url={externalUrls.academy} target="_blank">
          Academy
        </UnderlinedLink>{" "}
        and our{" "}
        <UnderlinedLink url={externalUrls.doc} target="_blank">
          Technical Docs
        </UnderlinedLink>
      </p>
    </SectionWithTopImage>
  );
}
