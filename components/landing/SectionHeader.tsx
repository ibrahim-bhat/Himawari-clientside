type SectionHeaderProps = {
  badge?: string;
  title: string;
  subtitle?: string;
  size?: "default" | "large";
  align?: "center" | "left";
};

export default function SectionHeader({ badge, title, subtitle, size = "default", align = "center" }: SectionHeaderProps) {
  const isLarge = size === "large";
  const alignClass = align === "left" ? "text-left" : "text-center";
  return (
    <div className={`${alignClass} ${isLarge ? "mb-12" : "mb-10"}`}>
      {badge && (
        <span className="mb-4 inline-block rounded-full bg-[#259A9E] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white">
          {badge}
        </span>
      )}
      <h2 className={`font-bold text-[#111827] leading-tight ${isLarge ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mx-auto mt-3 leading-7 text-[#6b7280] ${align === "center" ? "max-w-2xl" : ""} ${isLarge ? "text-base" : "text-sm sm:text-base"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
