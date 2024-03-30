import Image from 'next/image';
import SectionWithSideImage from 'app/components/section/sectionWithSideImage';
import computerAscii from 'public/images/computer-ascii.svg';

export default function ShareSection () {
  return (
    <SectionWithSideImage
      title={{
        text: 'Share anything',
        size: 'lg',
      }}
      textAlign='left'
      alignContent='center'
      image={{
        component: (
          <Image
            src={computerAscii}
            alt='computer'
            className='w-3/5 sm:w-auto lg:w-3/4 xl:w-2/3'
          />
        ),
        position: 'left',
        justify: 'left',
      }}
    >
      <p>
      Data, algorithms, storage, compute, APIs… Anything on-chain and off-chain can be shared. 
      </p>
    </SectionWithSideImage>
  );
}
