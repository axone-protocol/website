import Section from "app/components/section";

export default function OrchestrationSection() {
  return (
    <Section
      title={{
        text: "About Axone",
        size: "xl",
      }}
      textAlign="center"
      padding
    >
      <p className="font-bold">THE ORCHESTRATION LAYER</p>
      <p className="italic">
        Orchestration: the process of coordinating workflows of shared datasets
        and AI algorithms across various off-chain environments.
      </p>
    </Section>
  );
}
