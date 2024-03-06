import Link from "next/link";
import { UnderlinedLinkProps } from "app/lib/definitions";

const UnderlinedLink = ({ url, target, children }: UnderlinedLinkProps) => (
  <Link href={url} className="underline" target={target}>
    {children}
  </Link>
);

export default UnderlinedLink;
