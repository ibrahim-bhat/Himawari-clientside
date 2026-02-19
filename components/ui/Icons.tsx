import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const baseIconProps: Partial<IconProps> = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function DashboardIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...baseIconProps} {...props}>
      <rect x="3" y="3" width="8" height="8" rx="2" />
      <rect x="13" y="3" width="8" height="5" rx="2" />
      <rect x="13" y="10" width="8" height="11" rx="2" />
      <rect x="3" y="13" width="8" height="8" rx="2" />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...baseIconProps} {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 19c0-2.5 2-4.5 4.5-4.5h3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M14.5 18.5c0-1.9 1.5-3.5 3.5-3.5" />
    </svg>
  );
}

export function HeadsetIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...baseIconProps} {...props}>
      <path d="M12 3a7 7 0 0 0-7 7c0 3 2 5 4 6" />
      <path d="M9 16a3 3 0 0 0 6 0" />
      <path d="M15 13c1-1 2-2 2-4a7 7 0 0 0-5-6" />
    </svg>
  );
}

export function BrainIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...baseIconProps} {...props}>
      {/* Left Brain */}
      <path d="M9 3a4 4 0 0 0-4 4c0 1.4.7 2.6 1.8 3.3A3.5 3.5 0 0 0 8 17a4 4 0 0 0 4 4" />
      
      {/* Right Brain */}
      <path d="M15 3a4 4 0 0 1 4 4c0 1.4-.7 2.6-1.8 3.3A3.5 3.5 0 0 1 16 17a4 4 0 0 1-4 4" />
      
      {/* Inner curves */}
      <path d="M9 8a3 3 0 0 0 6 0" />
      <path d="M9 13a3 3 0 0 0 6 0" />
    </svg>
  );
}






export function CalendarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...baseIconProps} {...props}>
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M8 3v3" />
      <path d="M16 3v3" />
      <path d="M3 9h18" />
      <path d="M9 13h2" />
      <path d="M13 13h2" />
    </svg>
  );
}

export function StethoscopeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...baseIconProps} {...props}>
      <rect x="3" y="10" width="8" height="4" rx="2" />
      <rect x="13" y="6" width="8" height="4" rx="2" />
      <path d="M7 10v4" />
      <path d="M17 6v4" />
    </svg>
  );
}



export function SettingsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...baseIconProps} {...props}>
      <circle cx="13" cy="12" r="4" />
      <path d="M19.4 12a7.4 7.4 0 0 0-.1-1l2-1.5-2-3.5-2.3 1a7.4 7.4 0 0 0-1.7-1l-.3-2.5h-4l-.3 2.5a7.4 7.4 0 0 0-1.7 1l-2.3-1-2 3.5 2 1.5a7.4 7.4 0 0 0 0 2l-2 1.5 2 3.5 2.3-1a7.4 7.4 0 0 0 1.7 1l.3 2.5h4l.3-2.5a7.4 7.4 0 0 0 1.7-1l2.3 1 2-3.5-2-1.5a7.4 7.4 0 0 0 .1-1z" />
    </svg>
  );
}



export function BellIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...baseIconProps} {...props}>
      <path d="M6 10a6 6 0 1 1 12 0v4.5l1.5 2" />
      <path d="M4.5 16.5 6 14.5V10" />
      <path d="M10 19a2 2 0 0 0 4 0" />
    </svg>
  );
}

export function NotificationIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...baseIconProps} {...props}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 7h8" />
      <path d="M8 11h5" />
      <circle cx="17.5" cy="16.5" r="1.5" />
    </svg>
  );
}


export function LogoutIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...baseIconProps} {...props}>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <path d="M16 17l5-5-5-5" />
      <path d="M21 12H9" />
    </svg>
  );
}

export function FileTextIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...baseIconProps} {...props}>
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  );
}

export function BarChartIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...baseIconProps} {...props}>
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}


