"use client";

import { SearchIcon } from "./Icons";

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (val: string) => void;
  className?: string;
}

export default function SearchBar({
  placeholder = "Search...",
  value,
  onChange,
  className = ""
}: SearchBarProps) {
  return (
    <div className={`relative flex-1 ${className}`}>
      <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full bg-transparent py-3 pl-12 pr-4 outline-none"
      />
    </div>
  );
}
