import { LinkProps as NextLinkProps } from "next/link";
// import { ImageProps as NextImageProps } from "next/image";

export type UnderlinedLink = {
  url: string;
  children: React.ReactNode;
};

export type ButtonProps = NextLinkProps & {
  children: React.ReactNode;
  color: "orange" | "white";
  className?: string;
};

type AlignContentProps = { alignContent: "center" | "top" };
type ImagePositionProps = { position: "left" | "right" };

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
      component: any;
    };
  };

export type SectionWithImageProps = AlignContentProps &
  SectionProps & {
    image: ImagePositionProps & {
      component: any;
    };
  };

export type SectionImageProps = AlignContentProps &
  ImagePositionProps & {
    children: React.ReactNode;
  };

export type ButtonCenteredOnBgImageProps = {
  backgroundImage: React.ReactNode;
  button: React.ReactNode;
};

// for now, only className prop is overloaded in ui/home/[sectionName]/component.tsx
// for ButtonsCenteredOnBgImage component props (LeftButton, RightButton, BackgroundImage)
export type OverloadProps = { className?: string };

export type ButtonsCenteredOnBgImageProps = {
  BackgroundImage: React.ComponentType<OverloadProps>;
  LeftButton: React.ComponentType<OverloadProps>;
  RightButton: React.ComponentType<OverloadProps>;
  marginTop?: boolean;
};

// if other props need to be overload, you can use the following type
// export type ButtonsCenteredOnBgImageProps = {
//   BackgroundImage: React.ComponentType<Partial<NextImageProps>>;
//   LeftButton: React.ComponentType<Partial<ButtonProps>>;
//   RightButton: React.ComponentType<Partial<ButtonProps>>;
// };
