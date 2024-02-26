import ButtonsCenteredOnBgImage from "components/buttonsCenteredOnBgImage";
import {
  AcademyButton,
  DocumentationButton,
  Shape2,
} from "app/ui/home/collaboration/components";

export default function CollaborationSection() {
  return (
    <div className="flex justify-center">
      <div className="space-y-10 text-center sm:w-2/3">
        <h2 className="font-sixtyFour text-xl md:text-2xl">
          A new horizon for AI
        </h2>
        <div>
          <p>
            Creating trust, composability & incentives to maximize collaborative
            value creation.
          </p>
        </div>
        <ButtonsCenteredOnBgImage
          LeftButton={AcademyButton}
          RightButton={DocumentationButton}
          BackgroundImage={Shape2}
        />
      </div>
    </div>
  );
}
