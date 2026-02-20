import Image from "next/image";

interface AvatarProps {
  src?: string;
  name: string;
  size?: "sm" | "md" | "lg";
}

export default function Avatar({ src, name, size = "md" }: AvatarProps) {
  const sizeClasses = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-12 w-12 text-base",
  };

  return (
    <div className={`${sizeClasses[size]} relative overflow-hidden rounded-full border border-gray-200 bg-gray-100`}>
      {src ? (
        <Image
          src={src}
          alt={name}
          fill
          className="object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center font-medium text-gray-500">
          {name.charAt(0)}
        </div>
      )}
    </div>
  );
}
