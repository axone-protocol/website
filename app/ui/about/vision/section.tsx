import Section from "app/components/section";

export default function VisionSection() {
  return (
    <div className="border-2 border-black py-12">
      <Section
        title={{
          text: "A Vision for Axone",
          size: "lg",
        }}
        textAlign="center"
      >
        <p>Axone is a stepping stone on the journey to AGI</p>
      </Section>
    </div>
  );
}
