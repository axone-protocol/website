import Image from 'next/image';
import SectionWithSideImage from 'components/section/sectionWithSideImage';
import { roadmapSectionImageClass } from 'lib/utils';
import axoneLogosGraph1 from 'public/images/axone-logos-graph1.svg';

export default function Q12024Section () {
  return (
    <SectionWithSideImage
      title={{ text: 'Q1 2024', size: 'lg' }}
      textAlign='left'
      alignContent='center'
      image={{
        component: (
          <Image
            src={axoneLogosGraph1}
            alt='axone logos graph 1'
            className={roadmapSectionImageClass}
          />
        ),
        position: 'left',
      }}
    >
      <p>Finalization of AXONE v1</p>
      <p>First Public AI challenges</p>
      <p>Strategic, pre-launch raise</p>
      <p>Public AXONE UI beta</p>
    </SectionWithSideImage>
  );
}
