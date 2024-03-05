import Section from "app/components/section";
import { SectionWithTopImageProps } from "app/lib/definitions";

const SectionWithTopImage = ({
  title,
  textAlign,
  image,
  children,
  padding,
}: SectionWithTopImageProps) => {
  const paddingX = padding ? "sm:px-20 lg:px-60" : "";
  return (
    <div className={`flex flex-col gap-3 ${paddingX}`}>
      <div className="flex justify-center pb-12">{image.component}</div>
      <Section title={title} textAlign={textAlign}>
        {children}
      </Section>
    </div>
  );
};

export default SectionWithTopImage;
