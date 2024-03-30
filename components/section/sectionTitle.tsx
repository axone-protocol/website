import { SectionTitleProps } from 'lib/definitions';

const fontSizes = {
  lg: 'text-xl md:text-2xl',
  xl: 'text-2xl md:text-4xl xl:text-6xl',
};

const SectionTitle = ({ title }: SectionTitleProps) => {
  const fontSize = fontSizes[title.size];
  const marginY = title.size === 'xl' ? 'mt-2 sm:mb-7' : '';
  return (
    <h1 className={`whitespace-pre-line font-sixtyFour ${fontSize} ${marginY}`}>
      {title.text}
    </h1>
  );
};

export default SectionTitle;
