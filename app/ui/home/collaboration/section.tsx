import Section from "app/components/section/section";
import BgImageContainer from "app/components/button/bgImageContainer";
import ButtonsContainer from "app/components/button/buttonsContainer";
import {
  AcademyButton,
  DocumentationButton,
  Shape2,
} from "app/ui/home/collaboration/components";

export default function CollaborationSection() {
  return (
    <div className="py-28">
      <Section
        title={{ text: "A new horizon for AI", size: "lg" }}
        textAlign="center"
        padding
      >
        <p>
          Creating trust, composability & incentives to maximize collaborative
          value creation.
        </p>
        <BgImageContainer backgroundImage={<Shape2 />}>
          <ButtonsContainer
            leftButton={<AcademyButton />}
            rightButton={<DocumentationButton />}
          />
        </BgImageContainer>
      </Section>
    </div>
  );
}
