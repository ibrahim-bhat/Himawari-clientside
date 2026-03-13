"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "./Icons";

interface DropdownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (val: string) => void;
  className?: string;
}

export default function Dropdown({
  label,
  options,
  value,
  onChange,
  className = "",
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:border-[#259A9E] transition-all min-w-[120px] justify-between"
      >
        <span>{value === label ? label : value}</span>
        <ChevronDownIcon className={`h-4 w-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-full min-w-[140px] bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden">
          {options.map((opt) => (
            <button
              key={opt}
              className="w-full text-left px-4 py-3 text-sm hover:bg-[#EAF6F7] hover:text-[#259A9E] transition-colors"
              onClick={() => {
                onChange(opt);
                setIsOpen(false);
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
