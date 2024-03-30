import BgImageContainer from 'app/components/button/bgImageContainer';
import ButtonsContainer from 'app/components/button/buttonsContainer';
import Section from 'app/components/section/section';
import {
  AboutButton,
  Shape1,
  WhitepaperButton,
} from 'app/ui/home/protocol/components';

export default function ProtocolSection () {
  return (
    <Section
      title={{
        text: 'Orchestration Layer for AI',
        size: 'xl',
      }}
      textAlign='center'
      padding
    >
      <p>
        Axone is the universal protocol to connect, share and monetize any
        resources in the AI stack.
      </p>
      <p className='mb-6 lg:mb-0'>
        An open network designed for collaborative AI workflow management,
        universally compatible with any data, model or infrastructure.
      </p>
      <BgImageContainer backgroundImage={<Shape1 />}>
        <ButtonsContainer
          leftButton={<WhitepaperButton />}
          rightButton={<AboutButton />}
        />
      </BgImageContainer>
    </Section>
  );
}
