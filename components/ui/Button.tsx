import React from "react";

const variantClasses = {
  primary: "bg-[#259A9E] text-white hover:bg-[#1e7a7d] border border-transparent",
  secondary: "bg-white text-[#259A9E] border border-[#259A9E] hover:bg-[#e8f5f5]",
  ghost: "bg-transparent text-[#374151] border border-[#e5e7eb] hover:bg-gray-50",
  danger: "bg-white text-red-600 border border-red-500 hover:bg-red-50",
  dangerSolid: "bg-red-600 text-white border border-transparent hover:bg-red-700",
};

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: keyof typeof variantClasses;
  className?: string;
  disabled?: boolean;
}

export function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
