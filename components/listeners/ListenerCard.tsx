"use client";

import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { StarIcon } from "@/components/ui/Icons";
import Card from "@/components/ui/Card";

interface ListenerCardProps {
  id: number;
  name: string;
  role: string;
  rating: number;
  reviews: number;
  image: string;
  isActive: boolean;
  lastSeen?: string;
}

export default function ListenerCard({
  id,
  name,
  role,
  rating,
  reviews,
  image,
  isActive,
  lastSeen,
}: ListenerCardProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleCardClick = () => {
    // Determine the base path (listeners, counselors, or psychiatrists)
    const segments = pathname.split('/');
    const base = segments[1] || 'listeners';
    router.push(`/${base}/${id}`);
  };

  return (
    <Card
      className="!p-6 w-full max-w-[370px] min-h-[200px] border-[#259A9E]/30"
      onClick={handleCardClick}
    >
      <div className="flex items-start gap-4">
        {/* Profile Image */}
        <div className="relative h-[60px] w-[60px] flex-shrink-0 overflow-hidden rounded-xl">
          <Image src={image || "/pic.png"} alt={name} fill className="object-cover" />
        </div>

        {/* Content Area */}
        <div className="flex-1 min-w-0">
          {/* Header Line: Name and Toggle */}
          <div className="flex justify-between items-start mb-0.5">
            <h3 className="text-[17px] font-bold text-[#111827] truncate pr-2">{name}</h3>

            <div className={`relative inline-flex h-5 w-10 flex-shrink-0 items-center rounded-full transition-colors focus:outline-none ${isActive ? 'bg-[#259A9E]' : 'bg-gray-300'}`}>
              <span
                className={`${isActive ? 'translate-x-5' : 'translate-x-1'
                  } inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform duration-200`}
              />
            </div>
          </div>

          {/* Subheader Line: Specialty and Last Seen */}
          <div className="flex justify-between items-center mb-2">
            <p className={`text-[13px] font-semibold ${role === 'Psychiatrist' ? 'text-[#3B82F6]' :
              role === 'Counselor' ? 'text-[#0D9488]' : 'text-[#259A9E]'
              }`}>{role}</p>

            {!isActive && lastSeen && (
              <span className="text-[10px] text-gray-400">
                Last seen: {lastSeen}
              </span>
            )}
          </div>

          {/* Rating Line */}
          <div className="flex items-center gap-1">
            <StarIcon className="h-3.5 w-3.5 text-yellow-400" />
            <span className="text-[13px] font-bold text-[#111827]">{rating.toFixed(1)}</span>
            <span className="text-[11px] text-[#6b7280]">({reviews} Reviews)</span>
          </div>

          {/* Footer Line: View Profile */}
          <div className="mt-4 flex justify-end">
            <button
              className="text-[#259A9E] text-[12px] font-bold border-b border-[#259A9E] hover:text-[#1d7a7d] hover:border-[#1d7a7d] transition-colors leading-none pb-0.5"
            >
              View Profile
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}
