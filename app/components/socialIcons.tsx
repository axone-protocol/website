import Link from "next/link";
import { externalUrls } from "app/lib/navigation/constants";

const SocialIcons = () => {
  return (
    <div className="flex flex-row items-center justify-center space-x-5 text-xl font-bold">
      <Link href={externalUrls.discord} target="_blank">
        D
      </Link>
      <Link href={externalUrls.github} target="_blank">
        G
      </Link>
      <Link href={externalUrls.blog} target="_blank">
        M
      </Link>
      <Link href={externalUrls.telegram} target="_blank">
        T
      </Link>
      <Link href={externalUrls.x} target="_blank">
        X
      </Link>
    </div>
  );
};

export default SocialIcons;
