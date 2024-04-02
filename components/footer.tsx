import Image from 'next/image';
import AxoneLogo from 'components/axoneLogo';
import BgImageContainer from 'components/button/bgImageContainer';
import Button from 'components/button/button';
import SocialIcons from 'components/socialIcons';
import { externalUrls } from 'lib/navigation/constants';
import shape3 from 'public/images/shape3.svg';

export default function Footer () {
  return (
    <footer>
      <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-0'>
        <NewsletterSubscription />
        <AxoneLogoAndSocialIcons />
      </div>
    </footer>
  );
}

const NewsletterSubscription = () => (
  <div className='flex flex-col place-content-between gap-5'>
    <h1 className='text-center font-sixtyFour text-xl font-semibold sm:text-left'>
      Subscribe to our newsletter
    </h1>
    <div className='flex sm:justify-start'>
    </div>
    <div className='flex justify-center sm:justify-start'>
      <BgImageContainer
        backgroundImage={
          <Image src={shape3} alt='shape3' className='h-auto w-full' />
        }
        className='sm:justify-start'
      >
        <SubscribeButton />
      </BgImageContainer>
    </div>
  </div>
);

const AxoneLogoAndSocialIcons = () => (
  <div className='flex flex-col place-content-center gap-3'>
    <div className='flex justify-center sm:justify-end'>
      <AxoneLogo width='200' />
    </div>
    <div className='flex items-center justify-center sm:justify-end'>
      <SocialIcons />
    </div>
  </div>
);

const SubscribeButton = () => (
  <Button href={ externalUrls.subscription} color='orange' className='inline-flex justify-center' target='_blank'>
    Subscribe
  </Button>
);
