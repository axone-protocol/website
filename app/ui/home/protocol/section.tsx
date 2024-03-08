import Section from "app/components/section/section";
import BgImageContainer from "app/components/button/bgImageContainer";
import ButtonsContainer from "app/components/button/buttonsContainer";
import {
  WhitepaperButton,
  AboutButton,
  Shape1,
} from "app/ui/home/protocol/components";

export default function ProtocolSection() {
  return (
    <Section
      title={{
        text: "Orchestration Layer for AI",
        size: "xl",
      }}
      textAlign="center"
      padding
    >
      <p>
        Axone is the universal protocol to connect, share and monetize resources
        between all AI services.
      </p>
      <p className="mb-6 lg:mb-0">
        A Cosmos-based appchain for AI workflow management, universally
        compatible with all AI services.
      </p>
      <BgImageContainer backgroundImage={<Shape1 />}>
        <ButtonsContainer
          leftButton={<WhitepaperButton />}
          rightButton={<AboutButton />}
        />
      </BgImageContainer>
    </Section>
  );
}
