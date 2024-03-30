import BuildSection from 'ui/home/build/section';
import CollaborationSection from 'ui/home/collaboration/section';
import PrivacySection from 'ui/home/privacy/section';
import ProtocolSection from 'ui/home/protocol/section';
import ShareSection from 'ui/home/share/section';

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
