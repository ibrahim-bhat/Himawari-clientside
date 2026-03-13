import { useState, useRef, useEffect } from "react";
import { Button } from "../ui/Button";
import { PlusIcon, ChevronDownIcon } from "../ui/Icons";

interface Props {
  onAddUserClick: (role: string) => void;
}

export default function UserProfileHeader({ onAddUserClick }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = [
    { label: "New User", role: "user" },
    { label: "New Counselor", role: "counselor" },
    { label: "New Listener", role: "listener" },
    { label: "New Psychiatrist", role: "psychiatrist" },
  ];

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
    <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-[#111827]">
          User Management
        </h1>
        <p className="mt-1 text-sm text-[#6b7280]">
          Monitor user activity, manage roles, and handle account status across the platform.
        </p>
      </div>

      <div className="relative" ref={dropdownRef}>
        <Button onClick={() => setIsOpen(!isOpen)} className="pr-2">
          <PlusIcon className="h-4 w-4" />
          <span>Add New</span>
          <ChevronDownIcon className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </Button>

        {isOpen && (
          <div className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="py-1">
              {options.map((option) => (
                <button
                  key={option.role}
                  className="flex w-full items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-[#EAF6F7] hover:text-[#259A9E] transition-colors"
                  onClick={() => {
                    onAddUserClick(option.role);
                    setIsOpen(false);
                  }}
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F3F4F6] text-gray-500 group-hover:bg-[#259A9E]/10 group-hover:text-[#259A9E]">
                    <PlusIcon className="h-4 w-4" />
                  </div>
                  <span className="font-semibold">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
