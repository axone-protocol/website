import SectionTitle from "app/components/section/sectionTitle";
import { SectionProps } from "app/lib/definitions";

const textAligns = {
  left: "text-center sm:text-left",
  center: "text-center sm:text-center",
  right: "text-center sm:text-right",
};

const Section = ({
  title,
  textAlign,
  padding = false,
  children,
}: SectionProps) => {
  const paddingX = padding ? "sm:px-20 lg:px-60" : "";
  return (
    <div className={`grid gap-3 ${textAligns[textAlign]} ${paddingX}`}>
      <SectionTitle title={title} />
      {children}
    </div>
  );
};

export default Section;
