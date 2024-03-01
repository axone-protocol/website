import Image, { ImageProps } from "next/image";
import logo from "public/images/axone-logo.svg";

const AxoneLogo = ({ width }: { width?: ImageProps["width"] }) => (
  <Image src={logo} priority width={width} alt="Axone logo" />
);
export default AxoneLogo;
