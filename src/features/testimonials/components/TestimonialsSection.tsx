
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpenCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Sparkles,
  Target,
} from "lucide-react";

import SectionTitle from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const highlights = [
  {
    icon: BriefcaseBusiness,
    title: "Real-World Experience",
    desc: "Move beyond theoretical learning with hands-on assignments and practical projects that help you understand how skills are applied.",
    benefit: "Learn by Doing",
    color: "green",
  },
  {
    icon: Target,
    title: "Confidence to Grow",
    desc: "Develop confidence through consistent practice, guided learning, and opportunities to explore new challenges at your own pace.",
    benefit: "Build with Confidence",
    color: "cyan",
  },
  {
    icon: BookOpenCheck,
    title: "Portfolio Development",
    desc: "Work toward creating meaningful projects that demonstrate your developing skills, creativity, and problem-solving abilities.",
    benefit: "Showcase Your Skills",
    color: "green",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-label="Learner experience highlights"
      className="section relative overflow-hidden bg-white"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#60BA45]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#00A5D5]/5 blur-3xl"
      />

      <div className="container-custom relative z-10">

        {/* Section heading */}
        <Reveal>
          <div className="mx-auto mb-12 max-w-3xl text-center">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#DCEFD6] bg-[#F7FAF8] px-4 py-2">
              <Sparkles
                size={15}
                className="text-[#438F32]"
              />

              <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#438F32]">
                The BSG Experience
              </span>
            </div>

            <SectionTitle
              center
              label="WHY LEARNERS CHOOSE PRACTICAL LEARNING"
              title="More Than Learning. It's About Growing."
              desc="We believe meaningful learning experiences should help you develop skills, build confidence, and prepare for real-world opportunities."
            />
          </div>
        </Reveal>

        {/* Experience cards */}
        <div className="grid items-stretch gap-6 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            const isGreen = item.color === "green";

            return (
              <Reveal key={item.title} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#E2EDE0] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#60BA45]/40 hover:shadow-xl hover:shadow-green-900/5 sm:p-8">

                  {/* Top accent */}
                  <div
                    className={`absolute inset-x-0 top-0 h-1 ${
                      isGreen
                        ? "bg-[#60BA45]"
                        : "bg-[#00A5D5]"
                    }`}
                  />

                  {/* Icon and number */}
                  <div className="mb-7 flex items-start justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${
                        isGreen
                          ? "bg-[#F0F9ED] text-[#438F32]"
                          : "bg-[#EAF9FD] text-[#0085AD]"
                      }`}
                    >
                      <Icon size={27} strokeWidth={1.8} />
                    </div>

                    <span className="text-4xl font-black text-slate-100">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-extrabold tracking-tight text-[#333333]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {item.desc}
                  </p>

                  {/* Benefit */}
                  <div className="mt-auto pt-8">
                    <div className="flex items-center gap-2 border-t border-slate-100 pt-5">
                      <CheckCircle2
                        size={18}
                        className={
                          isGreen
                            ? "text-[#438F32]"
                            : "text-[#0085AD]"
                        }
                      />

                      <span className="text-xs font-bold text-[#333333] sm:text-sm">
                        {item.benefit}
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* CTA banner */}
        <Reveal>
          <div className="relative mt-12 overflow-hidden rounded-3xl bg-[#F0F9ED] px-6 py-8 sm:px-10">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-20 h-52 w-52 rounded-full border-[30px] border-[#60BA45]/10"
            />

            <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">

              <div className="max-w-xl">
                <div className="mb-3 flex items-center gap-2">
                  <Sparkles
                    size={18}
                    className="text-[#438F32]"
                  />

                  <span className="text-xs font-bold uppercase tracking-wider text-[#438F32]">
                    Start Your Growth Journey
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-[#333333] sm:text-3xl">
                  Your Next Chapter Starts Here.
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Explore opportunities to develop new skills,
                  gain practical experience, and work toward
                  your career goals.
                </p>
              </div>

              <Link
                href="/internships"
                className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#438F32] px-6 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#347429]"
              >
                Explore Opportunities

                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Transparency note */}
        <p className="mt-7 text-center text-xs leading-relaxed text-slate-400">
          These cards describe our intended learning
          experience and are not attributed student
          testimonials or verified customer reviews.
        </p>
      </div>
    </section>
  );
}
