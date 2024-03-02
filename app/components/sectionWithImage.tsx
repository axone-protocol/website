import Section from "app/components//section";
import SectionImage from "app/components/sectionImage";
import { SectionWithImageProps } from "app/lib/definitions";

const orders = {
  left: "order-last",
  right: "order-last sm:order-first",
};

const contentAligns = {
  center: "content-center",
  top: "content-start",
};

const SectionWithImage = ({
  title,
  textAlign,
  alignContent,
  image,
  children,
}: SectionWithImageProps) => {
  const order = orders[image.position];
  const align = contentAligns[alignContent];
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <div className={`grid ${order} ${align}`}>
        <Section title={title} textAlign={textAlign}>
          {children}
        </Section>
      </div>
      <SectionImage position={image.position} alignContent={alignContent}>
        {image.component}
      </SectionImage>
    </div>
  );
};

export default SectionWithImage;
