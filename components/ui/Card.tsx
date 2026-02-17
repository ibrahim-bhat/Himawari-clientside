import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-[#e5e7eb] bg-white shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}
