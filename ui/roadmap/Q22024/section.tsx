import Image from 'next/image';
import SectionWithSideImage from 'components/section/sectionWithSideImage';
import { roadmapSectionImageClass } from 'lib/utils';
import axoneLogosGraph2 from 'public/images/axone-logos-graph2.svg';

export default function Q22024Section () {
  return (
    <SectionWithSideImage
      title={{
        text: 'Q2 2024',
        size: 'lg',
      }}
      textAlign='right'
      alignContent='center'
      image={{
        component: (
          <Image
            src={axoneLogosGraph2}
            alt='axone logos graph 2'
            className={roadmapSectionImageClass}
          />
        ),
        position: 'right',
      }}
    >
      <p>Mainnet launch</p>
      <p>TGE</p>
      <p>CEX listings</p>
      <p>IBC connexions to the Cosmos ecosystem & beyond</p>
    </SectionWithSideImage>
  );
}
