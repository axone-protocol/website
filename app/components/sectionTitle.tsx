import { SectionTitleProps } from "app/lib/definitions";

const fontSizes = {
  lg: "text-xl md:text-2xl",
  xl: "text-2xl md:text-4xl",
};

const SectionTitle = ({ title }: SectionTitleProps) => {
  const fontSize = fontSizes[title.size];
  const marginBottom = title.size === "xl" ? "mb-7" : "";
  return (
    <h1 className={`font-sixtyFour ${fontSize} ${marginBottom}`}>
      {title.text}
    </h1>
  );
};

export default SectionTitle;
