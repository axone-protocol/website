import Section from "app/components/section";
import { fullWidthImageClass } from "app/lib/utils";

export default function PurposeSection() {
  return (
    <Section
      title={{
        text: "Axone’s purpose is to open the digital silos",
        size: "lg",
      }}
      textAlign="center"
      padding
    >
      <p>
        The world is filled with an abundance of datasets, models, and
        resources. But they stay isolated. Within companies. Within our servers
        and devices.
      </p>
      <ul>The orchestration layer opens the silos by:</ul>
      <li>
        Connecting all on-chain and off-chain resources into a single network
      </li>
      <li>Making access conditions explicit and composable</li>
      <li>Creating trust and incentives for providers</li>
      <li>
        Making it easy for consumers to create complex, distributed workflows
      </li>
      <p>
        Welcome to the post-scarcity world where AI help us solve humanity’s
        problems and we, the people, can benefit from it.
      </p>
      <div className={`mt-2 ${fullWidthImageClass}`} />
    </Section>
  );
}
