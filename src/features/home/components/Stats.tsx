
import {
  BookOpenCheck,
  BriefcaseBusiness,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    icon: BriefcaseBusiness,
    title: "Practical",
    label: "Project-Based Learning",
    description: "Learn by doing",
    color: "green",
  },
  {
    icon: BookOpenCheck,
    title: "Industry",
    label: "Relevant Skills",
    description: "Build real-world skills",
    color: "cyan",
  },
  {
    icon: TrendingUp,
    title: "Career",
    label: "Focused Growth",
    description: "Prepare for your future",
    color: "green",
  },
];

export default function Stats() {
  return (
    <div
      aria-label="Why choose Build Something Great"
      className="mt-12 grid grid-cols-1 gap-5 border-t border-[#DCEFD6] pt-8 sm:grid-cols-3 sm:gap-4"
    >
      {stats.map((item) => {
        const Icon = item.icon;
        const isGreen = item.color === "green";

        return (
          <div
            key={item.title}
            className="group flex items-start gap-3 sm:flex-col sm:gap-2"
          >
            {/* Icon */}
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:-translate-y-1 ${
                isGreen
                  ? "bg-[#F0F9ED] text-[#438F32]"
                  : "bg-[#EAF9FD] text-[#0085AD]"
              }`}
            >
              <Icon size={21} strokeWidth={1.8} />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-lg font-extrabold tracking-tight text-[#333333] sm:text-xl">
                {item.title}
              </h3>

              <p className="mt-1 text-xs font-bold text-[#438F32] sm:text-sm">
                {item.label}
              </p>

              <p className="mt-1 text-xs leading-relaxed text-slate-500">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
