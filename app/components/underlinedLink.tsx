import Link from "next/link";
import { UnderlinedLink } from "app/lib/definitions";

const UnderlinedLink = ({ url, children }: UnderlinedLink) => (
  <Link href={url} className="underline">
    {children}
  </Link>
);

export default UnderlinedLink;
