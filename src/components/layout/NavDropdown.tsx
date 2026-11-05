
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  ChevronDown,
  Send,
} from "lucide-react";

import { useState } from "react";

interface DropdownItem {
  name: string;
  href: string;
  desc?: string;
  description?: string;
}

interface NavDropdownProps {
  name: string;
  href: string;
  children: DropdownItem[];
}

const itemIcons = [
  BriefcaseBusiness,
  BookOpen,
  Send,
];

export default function NavDropdown({
  name,
  href,
  children,
}: NavDropdownProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive =
    pathname === href ||
    (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Trigger */}
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((prev) => !prev)}
        className={[
          "flex items-center gap-2 rounded-full px-4 py-2.5",
          "text-sm font-semibold transition-all duration-200",
          isActive || open
            ? "bg-[#F0F9ED] text-[#438F32]"
            : "text-[#333333] hover:bg-[#F0F9ED] hover:text-[#438F32]",
        ].join(" ")}
      >
        {name}

        <ChevronDown
          size={15}
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 top-full z-50 w-[340px] pt-3">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">

            {/* Header */}
            <div className="border-b border-slate-100 px-3 pb-4 pt-2">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#438F32]">
                BSG Opportunities
              </p>

              <h3 className="mt-2 text-lg font-extrabold text-[#333333]">
                Explore {name}
              </h3>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Learn new skills and take your next step.
              </p>
            </div>

            {/* Links */}
            <div className="space-y-1 py-2">
              {children.map((item, index) => {
                const Icon =
                  itemIcons[index] ?? ArrowUpRight;

                const itemActive =
                  pathname === item.href;

                return (
                  <Link
                    key={`${item.href}-${item.name}`}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={[
                      "group flex items-start gap-3 rounded-xl p-3",
                      "transition-all duration-200",
                      itemActive
                        ? "bg-[#F0F9ED]"
                        : "hover:bg-[#F7FAF8]",
                    ].join(" ")}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F0F9ED] text-[#438F32] transition-colors group-hover:bg-[#60BA45] group-hover:text-white">
                      <Icon size={19} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-bold text-[#333333]">
                        {item.name}
                      </span>

                      <span className="mt-1 block text-xs leading-5 text-slate-500">
                        {item.desc ??
                          item.description ??
                          ""}
                      </span>
                    </span>

                    <ArrowUpRight
                      size={16}
                      className="mt-1 shrink-0 text-slate-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#438F32]"
                    />
                  </Link>
                );
              })}
            </div>

            {/* Footer */}
            <div className="border-t border-slate-100 px-3 pt-3 pb-1">
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between text-sm font-bold text-[#438F32] hover:text-[#347429]"
              >
                View All {name}
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
