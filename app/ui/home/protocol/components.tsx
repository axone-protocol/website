import Image from "next/image";
import Button from "app/components/button";
import shape1 from "public/images/shape1.svg";
import { OverloadProps } from "app/lib/definitions";
import { internalUrls, externalUrls } from "app/lib/navigation/constants";

// these components are isolated into a separate folder
// otherwise they will be recreated on every home page re-render

export const WhitepaperButton = (props: OverloadProps) => (
  <Button
    {...props}
    color="orange"
    href={externalUrls.whitepaper}
    target="_blank"
  >
    Our Whitepaper
  </Button>
);

export const AboutButton = (props: OverloadProps) => (
  <Button {...props} color="white" href={internalUrls.about}>
    What is Axone ?
  </Button>
);

export const Shape1 = (props: OverloadProps) => (
  <Image {...props} src={shape1} alt="shape1" className="h-auto w-1/3" />
);
