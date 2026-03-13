import type { SVGProps } from "react";

/** Mental health / therapy themed illustration for hero section. */
export default function MentalHealthIllustration(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 400 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-md mx-auto"
      {...props}
    >
      {/* Soft background circle */}
      <circle cx="200" cy="160" r="140" fill="#E5F6F7" opacity="0.8" />
      <circle cx="200" cy="160" r="110" fill="#D1EDEE" opacity="0.5" />
      {/* Person sitting (simplified figure) */}
      <ellipse cx="200" cy="220" rx="50" ry="12" fill="#259A9E" opacity="0.2" />
      <path
        d="M165 200 Q200 160 235 200 L235 240 Q200 260 165 240 Z"
        fill="#259A9E"
        opacity="0.25"
      />
      <circle cx="200" cy="155" r="38" fill="#259A9E" opacity="0.15" />
      <circle cx="200" cy="148" r="28" fill="white" stroke="#259A9E" strokeWidth="2" />
      {/* Head / face */}
      <circle cx="200" cy="135" r="18" fill="#f3f4f6" />
      <path d="M192 132 Q200 138 208 132" stroke="#259A9E" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Heart / care symbol */}
      <path
        d="M200 95 L206 89 Q215 80 200 68 Q185 80 194 89 Z"
        fill="#259A9E"
        opacity="0.9"
      />
      {/* Small leaves / growth (mental wellness) */}
      <path d="M120 140 Q140 120 160 135" stroke="#259A9E" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M280 140 Q260 120 240 135" stroke="#259A9E" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M140 180 Q155 165 170 178" stroke="#259A9E" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M260 180 Q245 165 230 178" stroke="#259A9E" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
    </svg>
  );
}
