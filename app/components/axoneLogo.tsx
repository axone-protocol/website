import Image, { ImageProps } from "next/image";
import logo from "public/images/axone-logo.svg";

const AxoneLogo = ({
  width,
  className = "",
}: {
  width?: ImageProps["width"];
  className?: string;
}) => (
  <Image
    src={logo}
    priority
    width={width}
    alt="Axone logo"
    className={className}
  />
);
export default AxoneLogo;
