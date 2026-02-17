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
      <path d="M5 12v5a2 2 0 0 0 2 2h1" />
      <path d="M19 12v4a3 3 0 0 1-3 3h-1" />
      <path d="M5 12a7 7 0 0 1 14 0" />
      <rect x="4" y="11" width="3" height="5" rx="1.5" />
      <rect x="17" y="11" width="3" height="5" rx="1.5" />
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
      <path d="M6 4v5a4 4 0 1 0 8 0V4" />
      <path d="M3 4h6" />
      <path d="M11 4h6" />
      <circle cx="19" cy="11" r="2" />
      <path d="M19 13v2a5 5 0 0 1-5 5h-1.5a2.5 2.5 0 0 1-2.5-2.5V16" />
    </svg>
  );
}

export function SettingsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...baseIconProps} {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M4.75 10.5h-1.5" />
      <path d="M20.75 10.5h-1.5" />
      <path d="M7.5 4.75 6.5 3.5" />
      <path d="M16.5 4.75 17.5 3.5" />
      <path d="M7.5 19.25 6.5 20.5" />
      <path d="M16.5 19.25 17.5 20.5" />
      <path d="M4.75 13.5h-1.5" />
      <path d="M20.75 13.5h-1.5" />
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


