import { SectionImageProps } from "app/lib/definitions";

const horizontalAligns = {
  left: "sm:justify-start",
  right: "sm:justify-end",
};

const displayOrders = {
  left: "",
  right: "order-first sm:order-last",
};

const SectionImage = ({ children, imagePosition }: SectionImageProps) => {
  const justify = horizontalAligns[imagePosition];
  const order = displayOrders[imagePosition];
  return (
    <div className={`flex items-center justify-center ${justify} ${order}`}>
      <div className="w-1/2 sm:w-auto md:w-3/4 lg:w-2/3 xl:w-1/2">
        {children}
      </div>
    </div>
  );
};

export default SectionImage;
