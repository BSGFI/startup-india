
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
} from "lucide-react";

import Reveal from "@/components/ui/Reveal";
import type { Internship } from "../types/internship.types";

type InternshipCardProps = {
  internship: Internship;
};

export default function InternshipCard({
  internship,
}: InternshipCardProps) {
  const { icon: Icon, title, tags } = internship;

  return (
    <Reveal className="group h-full">
      <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#E2EDE0] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#60BA45]/50 hover:shadow-xl hover:shadow-green-900/5 sm:p-7">

        {/* Top accent */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#60BA45] to-[#00A5D5]" />

        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F0F9ED] text-[#438F32] transition-colors duration-300 group-hover:bg-[#60BA45] group-hover:text-white">
            <Icon size={27} strokeWidth={1.8} />
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EAF9FD] px-3 py-2 text-[11px] font-bold text-[#0085AD]">
            <BookOpenCheck size={13} />
            Internship Track
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-7 text-xl font-extrabold tracking-tight text-[#333333] transition-colors group-hover:text-[#438F32]">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed text-slate-500">
          Develop practical skills through guided learning,
          hands-on exercises, and real-world project work.
        </p>

        {/* Benefits */}
        <div className="mt-5 flex items-center gap-2">
          <CheckCircle2
            size={17}
            className="shrink-0 text-[#438F32]"
          />

          <span className="text-xs font-semibold text-slate-600">
            Practical, project-based experience
          </span>
        </div>

        {/* Technology Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-[#E2EDE0] bg-[#F7FAF8] px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors group-hover:border-[#DCEFD6]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-auto pt-7">
          <Link
            href={`/internships/${internship.slug}`}
            aria-label={`Enquire about ${title}`}
            className="flex items-center justify-between border-t border-slate-100 pt-5 text-sm font-bold text-[#438F32] transition-colors hover:text-[#0085AD]"
          >
            <span>Explore This Internship</span>

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F0F9ED] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#60BA45] group-hover:text-white">
              <ArrowRight size={18} />
            </span>
          </Link>
        </div>
      </article>
    </Reveal>
  );
}
