interface LicenseIconProps {
  className?: string;
}

export default function LicenseIcon({ className = "w-4 h-4" }: LicenseIconProps) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 16 16" 
      fill="currentColor"
    >
      <path d="M4.72 3.22a.75.75 0 0 1 1.06 1.06L2.06 8l3.72 3.72a.75.75 0 1 1-1.06 1.06L.47 8.53a.75.75 0 0 1 0-1.06l4.25-4.25Zm6.56 0a.75.75 0 0 0-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06L11.28 3.22Z"/>
    </svg>
  );
} 