import Image from 'next/image';
import Button from 'app/components/button/button';
import { externalUrls } from 'app/lib/navigation/constants';
import shape2 from 'public/images/shape2.svg';

// these components are isolated into a separate folder
// otherwise they will be recreated on every home page re-render

export const AcademyButton = () => (
  <Button
    color='orange'
    href={externalUrls.academy}
    target='_blank'
    className='w-full sm:w-auto'
  >
    Academy
  </Button>
);

export const DocumentationButton = () => (
  <Button
    color='white'
    href={externalUrls.doc}
    target='_blank'
    className='w-full sm:w-auto'
  >
    Documentation
  </Button>
);

export const Shape2 = () => (
  <Image src={shape2} alt='shape2' className='h-auto w-1/3' />
);
