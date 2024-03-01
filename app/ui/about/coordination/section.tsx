import Section from "app/components/section";
import { fullWidthImageClass } from "app/lib/utils";

export default function CoordinationSection() {
  return (
    <Section
      title={{
        text: "From economies of scale... to coordination at scale",
        size: "lg",
      }}
      textAlign="center"
      padding
    >
      <p>
        Building AI is about coordination between data, models, and
        infrastructure.
      </p>
      <p>
        The best coordination systems today are current technology giants. They
        pool a handful of great engineers and a lot of computing power together,
        and create the best models today. They benefit from economies of scale.
        They are the heritage of the industrial revolution.
      </p>
      <p>
        What if? What if we were able to coordinate ourselves, in a scalable
        way, globally?
      </p>
      <p>
        Millions of data providers, of model providers, of infrastructure
        providers... together. Sovereign. Without intermediaries.
      </p>
      <div className={`mt-2 ${fullWidthImageClass}`} />
    </Section>
  );
}
