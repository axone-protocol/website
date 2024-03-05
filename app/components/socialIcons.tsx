import Link from "next/link";
import { externalUrls } from "app/lib/navigation/constants";

const SocialIcons = () => {
  return (
    <div className="flex flex-row items-center justify-center space-x-5 text-xl font-bold">
      <Link href={externalUrls.discord}>D</Link>
      <Link href={externalUrls.github}>G</Link>
      <Link href={externalUrls.blog}>M</Link>
      <Link href={externalUrls.telegram}>T</Link>
      <Link href={externalUrls.x}>X</Link>
    </div>
  );
};

export default SocialIcons;
