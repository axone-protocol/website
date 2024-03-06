import { BgImageContainerProps } from "app/lib/definitions";

const BgImageContainer = ({
  backgroundImage,
  className,
  children,
}: BgImageContainerProps) => {
  return (
    <div className="relative">
      <div className={`flex items-center justify-center ${className}`}>
        {backgroundImage}
      </div>
      <div
        className={`absolute top-0 flex h-full w-full items-center justify-center ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default BgImageContainer;
