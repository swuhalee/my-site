import Image from "next/image";
import RealTimeClock from "./components/RealTimeClock";

export default function Home() {
  return (
    <div className="flex items-center justify-center" style={{ height: 'calc(100vh - 48px)' }}>
      <div className="text-center">
        <Image
          src="/bear.svg"
          alt="Logo"
          width={600}
          height={200}
          priority
          className="animate-fade-in mb-4"
        />
        <div className="text-gray-600 text-sm mt-4">
          <p className="mb-2">Welcome to this site</p>
          <RealTimeClock />
        </div>
      </div>
    </div>
  );
}
