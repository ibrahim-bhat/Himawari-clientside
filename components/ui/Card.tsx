import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Card({ children, className = "", onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`relative bg-white rounded-2xl border border-[#259A9E]/50 shadow-[0_4px_16px_rgba(37,154,158,0.08)] transition-all duration-200 ${onClick ? "cursor-pointer hover:shadow-[0_8px_24px_rgba(37,154,158,0.14)] hover:border-[#259A9E]/50" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
