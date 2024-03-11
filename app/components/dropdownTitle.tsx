import type { FC } from "react";

type DropdownTitleProps = {
  title: string;
};

const DropdownTitle: FC<DropdownTitleProps> = ({ title }) => (
  <span className="arrow-dropdown">
    {title}
    <DropdownIcon fillColor="currentColor" />
  </span>
);

const DropdownIcon: FC<{ fillColor?: string }> = ({
  fillColor = "currentColor",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill={fillColor}
    className="bi bi-chevron-down ml-2"
    viewBox="0 0 16 16"
    role="img"
    aria-label="dropdown icon"
  >
    <path
      fillRule="evenodd"
      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
    />
  </svg>
);

export default DropdownTitle;
