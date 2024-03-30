import { ImageContainerProps } from 'lib/definitions';

const horizontalAligns = {
  left: 'sm:justify-start',
  center: 'sm:justify-center',
  right: 'sm:justify-end',
};

const verticalAligns = {
  top: 'items-start',
  center: 'items-center',
};

const ImageContainer = ({
  alignContent,
  justify = 'center',
  children,
}: ImageContainerProps) => {
  const alignX = horizontalAligns[justify];
  const alignY = verticalAligns[alignContent];
  return (
    <div className={`flex justify-center ${alignX} ${alignY}`}>{children}</div>
  );
};

export default ImageContainer;
