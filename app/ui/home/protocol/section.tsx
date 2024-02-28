import Section from "app/components/section";
import ButtonsCenteredOnBgImage from "app/components/buttonsCenteredOnBgImage";
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
      <p>
        A Cosmos-based appchain for AI workflow management, universally
        compatible with all AI services.
      </p>
      <ButtonsCenteredOnBgImage
        LeftButton={WhitepaperButton}
        RightButton={AboutButton}
        BackgroundImage={Shape1}
      />
    </Section>
  );
}
