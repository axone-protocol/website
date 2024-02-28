import Section from "app/components/section";

export default function IntroductionSection() {
  return (
    <Section
      title={{
        text: "Axone Roadmap",
        size: "xl",
      }}
      textAlign="center"
      padding
    >
      <p>
        This Roadmap outlines the strategic direction and forthcoming
        advancements in AI Orchestration.
      </p>
      <p>
        It provides a detailed schedule of planned initiatives and milestones,
        reflecting a commitment to innovation, decentalization, and community.
      </p>
      <p>
        This roadmap is essential for understanding the {"project's"} trajectory
        and the anticipated significant developments.
      </p>
    </Section>
  );
}
