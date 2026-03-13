"use client";

import { useEffect } from "react";

interface ToastProps {
  message: string;
  onDismiss: () => void;
  duration?: number;
}

export function Toast({ message, onDismiss, duration = 3000 }: ToastProps) {
  useEffect(() => {
    const t = setTimeout(onDismiss, duration);
    return () => clearTimeout(t);
  }, [onDismiss, duration]);

  return (
    <div
      role="alert"
      className="fixed bottom-6 right-6 z-[100] rounded-xl border border-[#259A9E] bg-white px-4 py-3 text-sm font-medium text-gray-900 shadow-[0px_4px_20px_rgba(0,0,0,0.12)]"
    >
      {message}
    </div>
  );
}
