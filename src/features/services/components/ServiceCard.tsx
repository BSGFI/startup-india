
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

import Reveal from "@/components/ui/Reveal";
import type { Service } from "../types/service.types";

type ServiceCardProps = {
  service: Service;
  index: number;
};

export default function ServiceCard({
  service,
  index,
}: ServiceCardProps) {
  const { icon: Icon, title, desc } = service;

  const isGreen = index % 2 === 0;

  const accentColor = isGreen
    ? "text-[#438F32]"
    : "text-[#0085AD]";

  const iconBackground = isGreen
    ? "bg-[#F0F9ED]"
    : "bg-[#EAF9FD]";

  return (
    <Reveal className="group h-full">
      <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#E2EDE0] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#60BA45]/40 hover:shadow-xl hover:shadow-green-900/5 sm:p-8">

        {/* Top accent */}
        <div
          className={`absolute inset-x-0 top-0 h-1 ${
            isGreen ? "bg-[#60BA45]" : "bg-[#00A5D5]"
          }`}
        />

        {/* Icon and number */}
        <div className="mb-7 flex items-start justify-between">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl ${iconBackground} ${accentColor} transition-transform duration-300 group-hover:scale-110`}
          >
            <Icon size={27} strokeWidth={1.8} />
          </div>

          <span className="text-4xl font-black tracking-tight text-slate-100 transition-colors duration-300 group-hover:text-[#DCEFD6]">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Content */}
        <h3 className="text-xl font-extrabold tracking-tight text-[#333333] transition-colors group-hover:text-[#438F32]">
          {title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-500">
          {desc}
        </p>

        {/* Highlight */}
        <div className="mt-6 flex items-center gap-2">
          <CheckCircle2
            size={17}
            className={`shrink-0 ${accentColor}`}
          />

          <span className="text-xs font-semibold text-slate-600">
            Designed to help you grow
          </span>
        </div>

        {/* CTA */}
        <div className="mt-auto pt-8">
          <Link
            href="/contact"
            aria-label={`Enquire about ${title}`}
            className={`flex items-center justify-between border-t border-slate-100 pt-5 text-sm font-bold ${accentColor} transition-colors hover:text-[#333333]`}
          >
            <span>Explore Service</span>

            <span
              className={`flex h-9 w-9 items-center justify-center rounded-full ${iconBackground} transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1`}
            >
              <ArrowUpRight size={18} />
            </span>
          </Link>
        </div>
      </article>
    </Reveal>
  );
}
