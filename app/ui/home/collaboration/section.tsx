import Section from "app/components/section";
import ButtonsCenteredOnBgImage from "app/components/buttonsCenteredOnBgImage";
import {
  AcademyButton,
  DocumentationButton,
  Shape2,
} from "app/ui/home/collaboration/components";

export default function CollaborationSection() {
  return (
    <Section
      title={{ text: "A new horizon for AI", size: "lg" }}
      textAlign="center"
      padding
    >
      <p>
        Creating trust, composability & incentives to maximize collaborative
        value creation.
      </p>
      <ButtonsCenteredOnBgImage
        LeftButton={AcademyButton}
        RightButton={DocumentationButton}
        BackgroundImage={Shape2}
      />
    </Section>
  );
}
