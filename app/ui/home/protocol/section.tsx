import ButtonsCenteredOnBgImage from "app/components/buttonsCenteredOnBgImage";
import {
  WhitepaperButton,
  AboutButton,
  Shape1,
} from "app/ui/home/protocol/components";

export default function ProtocolSection() {
  return (
    <div className="space-y-10 text-center">
      <h1 className="font-sixtyFour text-2xl md:text-4xl">
        Orchestration Layer for AI
      </h1>
      <div>
        <p>
          Axone is the universal protocol to connect, share and monetize
          resources between all AI services.
        </p>
        <p className="mt-3">
          A Cosmos-based appchain for AI workflow management, universally
          compatible with all AI services.
        </p>
      </div>
      <ButtonsCenteredOnBgImage
        LeftButton={WhitepaperButton}
        RightButton={AboutButton}
        BackgroundImage={Shape1}
      />
    </div>
  );
}
