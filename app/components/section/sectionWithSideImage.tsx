import Section from "app/components/section/section";
import ImageContainer from "app/components/section/imageContainer";
import { SectionWithSideImageProps } from "app/lib/definitions";

const orders = {
  left: "order-last",
  right: "order-last sm:order-first",
};

const contentAligns = {
  center: "content-center",
  top: "content-start",
};

const SectionWithSideImage = ({
  title,
  textAlign,
  alignContent,
  image,
  children,
}: SectionWithSideImageProps) => {
  const order = orders[image.position];
  const align = contentAligns[alignContent];
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <div className={`grid ${order} ${align}`}>
        <Section title={title} textAlign={textAlign}>
          {children}
        </Section>
      </div>
      <ImageContainer
        position={image.position}
        alignContent={alignContent}
        justify={image.justify}
      >
        {image.component}
      </ImageContainer>
    </div>
  );
};

export default SectionWithSideImage;
