import Link from 'next/link';
import { ButtonProps } from 'lib/definitions';

const buttonColors = {
  orange: 'bg-orange text-white',
  white: 'border border-black bg-white text-black',
};

const Button = ({ children, href, color, className, target }: ButtonProps) => {
  return (
    <Link
      href={href}
      className={`${buttonColors[color]} min-w-44 p-3 no-underline ${className}`}
      target={target}
    >
      {children}
    </Link>
  );
};

export default Button;
