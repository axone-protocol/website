import { LinkProps as NextLinkProps } from "next/link";
// import { ImageProps as NextImageProps } from "next/image";

export type ButtonProps = NextLinkProps & {
  children: React.ReactNode;
  color: "orange" | "white";
  className?: string;
};

// for now, only className prop is overloaded in ui/home/[sectionName]/component.tsx
// for ButtonsCenteredOnBgImage component props (LeftButton, RightButton, BackgroundImage)
export type OverloadProps = { className?: string };

export type ButtonsCenteredOnBgImageProps = {
  BackgroundImage: React.ComponentType<OverloadProps>;
  LeftButton: React.ComponentType<OverloadProps>;
  RightButton: React.ComponentType<OverloadProps>;
};

// if other props need to be overload, you can use the following type
// export type ButtonsCenteredOnBgImageProps = {
//   BackgroundImage: React.ComponentType<Partial<NextImageProps>>;
//   LeftButton: React.ComponentType<Partial<ButtonProps>>;
//   RightButton: React.ComponentType<Partial<ButtonProps>>;
// };

export type SectionImageProps = {
  children: React.ReactNode;
  imagePosition: "left" | "right";
};
