import { ButtonsCenteredOnBgImageProps } from "app/lib/definitions";

const ButtonsCenteredOnBgImage = ({
  BackgroundImage,
  LeftButton,
  RightButton,
}: ButtonsCenteredOnBgImageProps) => {
  return (
    <div className="relative">
      <div className="flex items-center justify-center">
        <BackgroundImage />
      </div>
      <div className="absolute top-0 flex h-full w-full items-center justify-center">
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex justify-end">
            <LeftButton className="w-full sm:w-auto" />
          </div>
          <div className="flex justify-start">
            <RightButton className="w-full sm:w-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonsCenteredOnBgImage;
