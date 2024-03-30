import BgImageContainer from 'components/button/bgImageContainer';
import ButtonsContainer from 'components/button/buttonsContainer';
import Section from 'components/section/section';
import {
  AcademyButton,
  DocumentationButton,
  Shape2,
} from 'ui/home/collaboration/components';

export default function CollaborationSection () {
  return (
    <div className='py-28'>
      <Section
        title={{ text: 'A Layer One built for the emergence of AGI', size: 'lg' }}
        textAlign='center'
        padding
      >
        <p>
        Built on the Cosmos SDK, Axone is specifically designed to create trust, composability & incentives to maximize collaborative value creation. 
        </p>
        <h2 className='whitespace-pre-line font-sixtyFour text-xl md:text-2xl pt-28'>An alternative to centralized AI training</h2>
        <p className='p0'>
        While big tech companies are focused on acquiring more data to train private models, Axone enables coordination at scale for worldwide communities to train, deploy, use and collectively own their models.</p>
        <BgImageContainer backgroundImage={<Shape2 />}>
          <ButtonsContainer
            leftButton={<AcademyButton />}
            rightButton={<DocumentationButton />}
          />
        </BgImageContainer>
      </Section>
    </div>
  );
}
