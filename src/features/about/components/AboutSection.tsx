
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
  Lightbulb,
  Target,
  Users,
} from "lucide-react";

import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionHeading";

const highlights = [
  "Industry-relevant skills and practical learning",
  "Real-world projects and internship experience",
  "Personalized mentorship and career support",
];

const benefits = [
  {
    icon: BriefcaseBusiness,
    title: "Internships",
    description: "Gain practical experience",
    color: "green",
  },
  {
    icon: BookOpen,
    title: "Training",
    description: "Develop in-demand skills",
    color: "cyan",
  },
  {
    icon: Users,
    title: "Mentorship",
    description: "Learn from experienced mentors",
    color: "green",
  },
  {
    icon: Target,
    title: "Career Guidance",
    description: "Plan your next career move",
    color: "cyan",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About Build Something Great"
      className="section relative overflow-hidden bg-white"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#60BA45]/5 blur-3xl"
      />

      <div className="container-custom relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* Left: Visual */}
          <Reveal className="relative">
            <div className="relative rounded-[32px] bg-gradient-to-br from-[#EAF8E6] via-[#F5FBF3] to-[#EAF9FD] p-5 sm:p-10">

              {/* Main card */}
              <div className="relative rounded-3xl border border-white bg-white p-6 shadow-xl shadow-green-900/5 sm:p-8">

                {/* Header */}
                <div className="mb-8 flex items-start justify-between gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F0F9ED] text-[#438F32]">
                    <GraduationCap size={29} strokeWidth={1.8} />
                  </div>

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EAF9FD] px-3 py-2 text-xs font-bold text-[#0085AD]">
                    <Lightbulb size={14} />
                    Future Ready
                  </span>
                </div>

                {/* Card heading */}
                <div className="mb-7">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#438F32]">
                    The BSG Approach
                  </span>

                  <h3 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-[#333333] sm:text-3xl">
                    Learn. Build.
                    <br />
                    <span className="text-gradient">Grow.</span>
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-500">
                    Empowering learners to develop skills,
                    gain experience, and prepare for career
                    opportunities.
                  </p>
                </div>

                {/* Services */}
                <div className="grid gap-3 sm:grid-cols-2">
                  {benefits.map((benefit) => {
                    const Icon = benefit.icon;
                    const isGreen = benefit.color === "green";

                    return (
                      <div
                        key={benefit.title}
                        className="group rounded-2xl border border-slate-100 bg-[#FAFCFB] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#60BA45]/30 hover:bg-white hover:shadow-md"
                      >
                        <div
                          className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${
                            isGreen
                              ? "bg-[#EAF8E6] text-[#438F32]"
                              : "bg-[#EAF9FD] text-[#0085AD]"
                          }`}
                        >
                          <Icon size={20} />
                        </div>

                        <h4 className="text-sm font-bold text-[#333333]">
                          {benefit.title}
                        </h4>

                        <p className="mt-1 text-xs leading-relaxed text-slate-500">
                          {benefit.description}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom banner */}
                <div className="mt-6 flex items-center justify-between gap-3 rounded-xl bg-[#F0F9ED] p-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2
                      size={19}
                      className="shrink-0 text-[#438F32]"
                    />

                    <span className="text-xs font-semibold text-[#333333] sm:text-sm">
                      Your Growth, Our Mission
                    </span>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-[#438F32]"
                  />
                </div>
              </div>

              {/* Decorative circles */}
              <div
                aria-hidden="true"
                className="absolute -right-3 -top-3 h-16 w-16 rounded-full border-[10px] border-[#60BA45]/20"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full border-[12px] border-[#00A5D5]/15"
              />
            </div>
          </Reveal>

          {/* Right: Content */}
          <Reveal>
            <SectionTitle
              label="WHO WE ARE"
              title="Empowering Learners to Build Something Great"
              desc="We believe every learner deserves access to practical skills, meaningful experience, and the right guidance to build a stronger future."
            />

            <p className="lead mt-5 mb-7">
              At Build Something Great (BSG), our focus is on
              connecting learning with real-world opportunities.
              Through internships, industry-focused training,
              personalized mentorship, and career guidance,
              we help students and aspiring professionals take
              confident steps toward their goals.
            </p>

            {/* Highlights */}
            <div className="mb-9 space-y-4">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0F9ED] text-[#438F32]">
                    <CheckCircle2 size={16} />
                  </div>

                  <span className="text-sm font-semibold leading-relaxed text-[#333333] sm:text-base">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* Mission statement */}
            <div className="mb-9 rounded-2xl border-l-4 border-[#60BA45] bg-[#F7FAF8] px-5 py-5">
              <div className="flex items-start gap-3">
                <Target
                  size={22}
                  className="mt-0.5 shrink-0 text-[#438F32]"
                />

                <div>
                  <h3 className="font-bold text-[#333333]">
                    Our Mission
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    To make skill development, practical
                    experience, and career support more
                    accessible, helping learners turn
                    their potential into progress.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/about" className="btn-primary">
                Discover Our Story
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0085AD] transition-colors hover:text-[#006D91]"
              >
                Get in Touch
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
