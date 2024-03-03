import { SectionImageProps } from "app/lib/definitions";

const horizontalAligns = {
  left: "sm:justify-start",
  center: "sm:justify-center",
  right: "sm:justify-end",
};

const verticalAligns = {
  top: "items-start",
  center: "items-center",
};

const SectionImage = ({
  alignContent,
  justify = "center",
  children,
}: SectionImageProps) => {
  const alignX = horizontalAligns[justify];
  const alignY = verticalAligns[alignContent];
  return (
    <div className={`flex justify-center ${alignX} ${alignY}`}>{children}</div>
  );
};

export default SectionImage;
