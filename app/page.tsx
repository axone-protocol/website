import ProtocolSection from "app/ui/home/protocol/section";
import ShareSection from "app/ui/home/share/section";
import PrivacySection from "@/app/ui/home/privacy/section";
import CollaborationSection from "app/ui/home/collaboration/section";

export default function Home() {
  return (
    <div className="space-y-20">
      <ProtocolSection />
      <ShareSection />
      <PrivacySection />
      <CollaborationSection />
    </div>
  );
}
