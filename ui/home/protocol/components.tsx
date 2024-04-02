import Image from 'next/image';
import Button from 'components/button/button';
import { externalUrls, internalUrls } from 'lib/navigation/constants';
import shape1 from 'public/images/shape1.svg';

// these components are isolated into a separate folder
// otherwise they will be recreated on every home page re-render

export const WhitepaperButton = () => (
  <Button
    color='orange'
    href={externalUrls.whitepaper}
    target='_blank'
    className='w-full sm:w-auto'
  >
    Our Whitepaper
  </Button>
);

export const AboutButton = () => (
  <Button color='white' href={internalUrls.about} className='w-full sm:w-auto'>
    What is Axone ?
  </Button>
);

export const Shape1 = () => (
  <Image src={shape1} alt='shape1' className='h-auto w-1/3' />
);
