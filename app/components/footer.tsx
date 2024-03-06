import Image from "next/image";
import AxoneLogo from "app/components/axoneLogo";
import Button from "app/components/button";
import ButtonCenteredOnBgImage from "app/components/buttonCenteredOnBgImage";
import SocialIcons from "app/components/socialIcons";
import shape3 from "public/images/shape3.svg";

export default function Footer() {
  return (
    <footer>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-0">
        <NewsletterSubscription />
        <AxoneLogoAndSocialIcons />
      </div>
    </footer>
  );
}

const NewsletterSubscription = () => (
  <div className="flex flex-col place-content-between gap-5">
    <h1 className="text-center font-sixtyFour text-xl font-semibold sm:text-left">
      Subscribe to our newsletter
    </h1>
    <div className="flex sm:justify-start">
      <input
        type="email"
        placeholder="email"
        className="h-12 w-full border border-black pl-3 sm:w-80"
      />
    </div>
    <div className="flex justify-center sm:justify-start">
      <ButtonCenteredOnBgImage
        backgroundImage={
          <Image src={shape3} alt="shape3" className="h-auto w-full" />
        }
        button={
          <Button href="" color="orange" className="inline-flex justify-center">
            Subscribe
          </Button>
        }
      />
    </div>
  </div>
);

const AxoneLogoAndSocialIcons = () => (
  <div className="flex flex-col place-content-end gap-3">
    <div className="flex justify-center sm:justify-end">
      <AxoneLogo width="200" />
    </div>
    <div className="flex items-center justify-center sm:justify-end">
      <SocialIcons />
    </div>
  </div>
);
