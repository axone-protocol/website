import Image from 'next/image';
import Link from 'next/link';
import { externalUrls } from 'lib/navigation/constants';
import discordIcon from 'public/images/discord-icon.svg';
import githubIcon from 'public/images/github-icon.svg';
import mediumIcon from 'public/images/medium-icon.svg';
import telegramIcon from 'public/images/telegram-icon.svg';
import xIcon from 'public/images/x-icon.svg';

const iconWidth = 26;

const SocialIcons = () => {
  return (
    <div className='flex flex-row items-center justify-center space-x-5 text-xl font-bold'>
      <Link href={externalUrls.discord} target='_blank'>
        <Image src={discordIcon} width={iconWidth} alt='discord icon' />
      </Link>
      <Link href={externalUrls.github} target='_blank'>
        <Image src={githubIcon} width={iconWidth} alt='github icon' />
      </Link>
      <Link href={externalUrls.blog} target='_blank'>
        <Image src={mediumIcon} width={iconWidth} alt='medium icon' />
      </Link>
      <Link href={externalUrls.telegram} target='_blank'>
        <Image src={telegramIcon} width={iconWidth} alt='telegram icon' />
      </Link>
      <Link href={externalUrls.x} target='_blank'>
        <Image src={xIcon} width={iconWidth} alt='x icon' />
      </Link>
    </div>
  );
};

export default SocialIcons;
