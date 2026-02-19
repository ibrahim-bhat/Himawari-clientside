import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`
        relative
        bg-white
        rounded-2xl
        border border-[#259A9E]/70
        shadow-lg
        transition-all duration-300
        hover:shadow-md
        hover:-translate-y-1
          
        ${className}
      `}
    >
    
      {children}
    </div>
  );
}
