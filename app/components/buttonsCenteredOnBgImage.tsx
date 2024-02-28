import { ButtonsCenteredOnBgImageProps } from "app/lib/definitions";

const ButtonsCenteredOnBgImage = ({
  BackgroundImage,
  LeftButton,
  RightButton,
  marginTop = true,
}: ButtonsCenteredOnBgImageProps) => {
  const margin = marginTop ? "mt-7" : "";
  return (
    <div className={`relative ${margin}`}>
      <div className="flex items-center justify-center">
        <BackgroundImage /* className="w-2/3 sm:w-1/2 md:w-1/3 xl:w-1/4" */ />
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
