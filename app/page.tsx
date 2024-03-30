import CollaborationSection from 'app/ui/home/collaboration/section';
import PrivacySection from 'app/ui/home/privacy/section';
import ProtocolSection from 'app/ui/home/protocol/section';
import ShareSection from 'app/ui/home/share/section';
import BuildSection from './ui/home/build/section';

export default function Home () {
  return (
    <>
      <ProtocolSection />
      <ShareSection />
      <PrivacySection />
      <BuildSection />
      <CollaborationSection />
    </>
  );
}
