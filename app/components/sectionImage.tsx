import { SectionImageProps } from "app/lib/definitions";

// const horizontalAligns = {
//   left: "sm:justify-start",
//   right: "sm:justify-end",
// };

const verticalAligns = {
  top: "items-start",
  center: "items-center",
};

const SectionImage = ({
  // position,
  alignContent,
  children,
}: SectionImageProps) => {
  // const justify = horizontalAligns[position];
  const align = verticalAligns[alignContent];
  return (
    // <div className={`flex justify-center ${justify} ${align}`}>{children}</div>
    <div className={`flex justify-center ${align}`}>{children}</div>
  );
};

export default SectionImage;
