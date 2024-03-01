import { ButtonCenteredOnBgImageProps } from "app/lib/definitions";

const ButtonCenteredOnBgImage = ({
  backgroundImage,
  button,
}: ButtonCenteredOnBgImageProps) => {
  return (
    <div className="relative">
      <div className="flex items-center justify-center sm:justify-start">
        {backgroundImage}
      </div>
      <div className="absolute top-0 flex h-full w-full items-center justify-center sm:justify-start">
        {button}
      </div>
    </div>
  );
};

export default ButtonCenteredOnBgImage;
