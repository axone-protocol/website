import { HTMLAttributeAnchorTarget } from "react";
import { LinkProps as NextLinkProps } from "next/link";

export type UnderlinedLinkProps = {
  url: string;
  children: React.ReactNode;
  target?: HTMLAttributeAnchorTarget;
};

export type ButtonProps = NextLinkProps & {
  children: React.ReactNode;
  color: "orange" | "white";
  className?: string;
  target?: HTMLAttributeAnchorTarget;
};

type AlignContentProps = { alignContent: "center" | "top" };
type ImagePositionProps = { position: "left" | "right" };
type ImageJustifyProps = { justify?: "left" | "center" | "right" };

export type SectionTitleProps = {
  title: { text: string; size: "lg" | "xl" };
};

export type SectionProps = SectionTitleProps & {
  textAlign: "left" | "center" | "right";
  padding?: boolean;
  children?: React.ReactNode;
};

export type SectionWithTopImageProps = SectionTitleProps &
  SectionProps & {
    image: {
      component: JSX.Element;
    };
  };

export type SectionWithSideImageProps = AlignContentProps &
  SectionProps & {
    image: ImagePositionProps &
      ImageJustifyProps & {
        component: JSX.Element;
      };
  };

export type ImageContainerProps = AlignContentProps &
  ImagePositionProps &
  ImageJustifyProps & {
    children: React.ReactNode;
  };

export type BgImageContainerProps = {
  backgroundImage: React.ReactNode;
  className?: string;
  children: React.ReactNode;
};

export type ButtonsContainerProps = {
  leftButton: React.ReactNode;
  rightButton: React.ReactNode;
};
