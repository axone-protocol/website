import { ButtonsContainerProps } from "app/lib/definitions";

const ButtonsContainer = ({
  leftButton,
  rightButton,
}: ButtonsContainerProps) => (
  <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2">
    <div className="flex justify-end btn-orange ">{leftButton}</div>
    <div className="flex justify-start btn-white">{rightButton}</div>
  </div>
);

export default ButtonsContainer;
