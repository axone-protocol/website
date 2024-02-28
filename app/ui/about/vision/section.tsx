import Section from "app/components/section";
import { semiWidthImageClass } from "app/lib/utils";

export default function VisionSection() {
  return (
    <Section
      title={{
        text: "A Vision for Axone",
        size: "lg",
      }}
      textAlign="center"
      // padding
    >
      <p>Axone is a stepping stone on the journey to AGI</p>
      <div className="flex justify-center">
        <div className={`mt-2 ${semiWidthImageClass}`} />
      </div>
    </Section>
  );
}
