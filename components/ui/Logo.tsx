import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/himawari-logo.png"
      alt="Himawari La Confidante"
      width={200}
      height={48}
      className={`h-12 w-auto shrink-0 object-contain object-left ${className}`}
    />
  );
}
