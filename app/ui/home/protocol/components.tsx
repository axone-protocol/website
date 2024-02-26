import Image from "next/image";
import Button from "app/components/button";
import shape1 from "public/images/shape1.png";
import { OverloadProps } from "app/lib/definitions";

// these components are isolated into a separate folder
// otherwise they will be recreated on every home page re-render

export const WhitepaperButton = (props: OverloadProps) => (
  <Button
    {...props}
    color="orange"
    href="https://docs.okp4.network/whitepaper/abstract"
  >
    Our Whitepaper
  </Button>
);

export const AboutButton = (props: OverloadProps) => (
  <Button {...props} color="white" href="">
    What is Axone ?
  </Button>
);

export const Shape1 = (props: OverloadProps) => (
  <Image {...props} src={shape1} alt="shape2" />
);
