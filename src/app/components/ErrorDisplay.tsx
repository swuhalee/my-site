import Image from 'next/image';

export default function ErrorDisplay() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image 
        src="/error.svg" 
        alt="Error" 
        width={64} 
        height={64} 
        className="mb-4"
      />
      <div className="text-red-600 font-bold text-xl mb-2">error!</div>
      <div className="text-red-500 text-center">error !</div>
    </div>
  );
} 