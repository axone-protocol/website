import Image from "next/image";
import Button from "components/button";
import shape2 from "public/images/shape2.png";
import { OverloadProps } from "app/lib/definitions";

// these components are isolated into a separate folder
// otherwise they will be recreated on every home page re-render

export const AcademyButton = (props: OverloadProps) => (
  <Button
    {...props}
    color="orange"
    href="https://docs.okp4.network/academy/overview"
  >
    Academy
  </Button>
);

export const DocumentationButton = (props: OverloadProps) => (
  <Button
    {...props}
    color="white"
    href="https://docs.okp4.network/technical-documentation/overview"
  >
    Documentation
  </Button>
);

export const Shape2 = (props: OverloadProps) => (
  <Image {...props} src={shape2} alt="shape2" />
);
