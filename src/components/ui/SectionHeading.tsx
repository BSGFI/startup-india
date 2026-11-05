
import type { HTMLAttributes } from "react";

interface SectionTitleProps
  extends HTMLAttributes<HTMLDivElement> {
  label: string;
  title: string;
  desc?: string;
  center?: boolean;
  accent?: "green" | "cyan";
  size?: "sm" | "md" | "lg";
  showDecoration?: boolean;
}

const headingSizes = {
  sm: "text-2xl sm:text-3xl",
  md: "text-3xl sm:text-4xl",
  lg: "text-4xl sm:text-5xl lg:text-[52px]",
};

const accentStyles = {
  green: {
    label: "text-[#438F32]",
    line: "bg-[#60BA45]",
    dot: "bg-[#00A5D5]",
  },
  cyan: {
    label: "text-[#0085AD]",
    line: "bg-[#00A5D5]",
    dot: "bg-[#60BA45]",
  },
};

export default function SectionTitle({
  label,
  title,
  desc,
  center = false,
  accent = "green",
  size = "md",
  showDecoration = true,
  className = "",
  ...props
}: SectionTitleProps) {
  const colors = accentStyles[accent];

  return (
    <div
      {...props}
      className={[
        center
          ? "mx-auto mb-12 max-w-3xl text-center"
          : "mb-10 max-w-2xl",
        className,
      ].join(" ")}
    >
      {/* Eyebrow */}
      <div
        className={`mb-4 flex items-center gap-3 ${
          center ? "justify-center" : ""
        }`}
      >
        {showDecoration && (
          <span
            aria-hidden="true"
            className={`h-[2px] w-7 rounded-full ${colors.line}`}
          />
        )}

        <span
          className={`text-xs font-extrabold uppercase tracking-[0.16em] ${colors.label}`}
        >
          {label}
        </span>

        {showDecoration && (
          <span
            aria-hidden="true"
            className={`h-1.5 w-1.5 rounded-full ${colors.dot}`}
          />
        )}
      </div>

      {/* Heading */}
      <h2
        className={`font-black leading-[1.15] tracking-[-0.035em] text-[#333333] ${headingSizes[size]}`}
      >
        {title}
      </h2>

      {/* Description */}
      {desc && (
        <p
          className={`mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 ${
            center ? "mx-auto max-w-2xl" : ""
          }`}
        >
          {desc}
        </p>
      )}
    </div>
  );
}
