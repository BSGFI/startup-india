
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import Reveal from "@/components/ui/Reveal";
import Stats from "./Stats";

const opportunities = [
  {
    icon: BriefcaseBusiness,
    title: "Internships",
    subtitle: "Real-world experience",
    color: "green",
  },
  {
    icon: BookOpen,
    title: "Skill Training",
    subtitle: "Industry-focused learning",
    color: "cyan",
  },
  {
    icon: Users,
    title: "1-to-1 Mentorship",
    subtitle: "Personalized guidance",
    color: "green",
  },
  {
    icon: Target,
    title: "Career Guidance",
    subtitle: "Plan your next step",
    color: "cyan",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="hero-gradient relative overflow-hidden"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hero-grid opacity-40"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#60BA45]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#00A5D5]/10 blur-3xl"
      />

      <div className="container-custom relative z-10 grid items-center gap-14 py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">

        {/* LEFT SIDE */}
        <Reveal>
          {/* Eyebrow */}
          <div className="mb-7 inline-flex max-w-full items-center gap-2 rounded-full border border-[#DCEFD6] bg-white px-4 py-2 shadow-sm">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#60BA45] opacity-40" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#60BA45]" />
            </span>

            <span className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#438F32] sm:text-xs">
              Learn • Build • Grow
            </span>

            <Sparkles
              size={15}
              className="shrink-0 text-[#00A5D5]"
            />
          </div>

          {/* Main Heading */}
          <h1
            id="hero-heading"
            className="text-[42px] font-black leading-[1.08] tracking-[-2px] text-[#333333] sm:text-[56px] lg:text-[64px] xl:text-[70px]"
          >
            Build Skills.
            <br />
            Gain Experience.
            <br />
            <span className="text-gradient">
              Create Your Future.
            </span>
          </h1>

          {/* Description */}
          <p className="lead mt-7 max-w-xl text-base sm:text-lg">
            Your journey toward a successful career starts
            here. Explore industry-focused internships,
            practical training, personalized mentorship,
            and career guidance designed to help you grow.
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/internships"
              className="btn-primary group"
            >
              Explore Internships

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/training"
              className="btn-outline group bg-white"
            >
              Explore Training

              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* Trust Highlights */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            {[
              "Practical Learning",
              "Career-Focused Programs",
              "Personalized Guidance",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2"
              >
                <CheckCircle2
                  size={17}
                  className="shrink-0 text-[#438F32]"
                />

                <span className="text-xs font-semibold text-slate-600 sm:text-sm">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Existing Stats Component */}
          <div className="mt-10">
            <Stats />
          </div>
        </Reveal>

        {/* RIGHT SIDE */}
        <Reveal className="relative">
          <div className="relative mx-auto max-w-[550px]">

            {/* Background Glow */}
            <div
              aria-hidden="true"
              className="absolute -inset-5 rounded-[40px] bg-gradient-to-br from-[#60BA45]/20 via-[#EAF9FD] to-[#00A5D5]/15 blur-2xl"
            />

            {/* Main Dashboard Card */}
            <div className="relative overflow-hidden rounded-[30px] border border-[#E1EDE0] bg-white p-5 shadow-2xl shadow-green-900/10 sm:p-8">

              {/* Card Header */}
              <div className="mb-7 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0F9ED] text-[#438F32]">
                    <GraduationCap size={26} />
                  </div>

                  <div>
                    <p className="text-sm font-extrabold text-[#333333] sm:text-base">
                      Your Growth Journey
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Build Something Great
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-[#F0F9ED] px-3 py-1.5 text-[10px] font-bold text-[#438F32] sm:text-xs">
                  Explore BSG
                </span>
              </div>

              {/* Featured Learning Card */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#438F32] to-[#60BA45] p-6 text-white sm:p-7">
                <div
                  aria-hidden="true"
                  className="absolute -right-12 -top-12 h-40 w-40 rounded-full border-[25px] border-white/10"
                />

                <div
                  aria-hidden="true"
                  className="absolute -bottom-12 right-16 h-28 w-28 rounded-full bg-white/10 blur-xl"
                />

                <div className="relative">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
                    <Sparkles size={23} />
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white/80">
                    Your Future Starts Here
                  </span>

                  <h2 className="mt-3 max-w-xs text-2xl font-extrabold leading-tight sm:text-3xl">
                    Learn Today.
                    <br />
                    Lead Tomorrow.
                  </h2>

                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/85">
                    Discover opportunities to learn new
                    skills, work on projects, and grow
                    with guidance.
                  </p>

                  <Link
                    href="/internships"
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-[#347429] transition-colors hover:bg-[#F0F9ED]"
                  >
                    Get Started
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Opportunity Grid */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                {opportunities.map((item) => {
                  const Icon = item.icon;
                  const isGreen = item.color === "green";

                  return (
                    <div
                      key={item.title}
                      className="group rounded-2xl border border-slate-100 bg-[#FAFCFB] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#60BA45]/30 hover:shadow-md"
                    >
                      <div
                        className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${
                          isGreen
                            ? "bg-[#F0F9ED] text-[#438F32]"
                            : "bg-[#EAF9FD] text-[#0085AD]"
                        }`}
                      >
                        <Icon size={20} />
                      </div>

                      <h3 className="text-xs font-bold text-[#333333] sm:text-sm">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                        {item.subtitle}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Card */}
              <div className="mt-5 flex items-center justify-between gap-3 rounded-xl border border-[#DCEFD6] bg-[#F7FAF8] px-4 py-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-[#438F32]"
                  />

                  <span className="text-xs font-semibold text-[#333333] sm:text-sm">
                    Every Great Future Starts With a Step
                  </span>
                </div>

                <ChevronRight
                  size={18}
                  className="shrink-0 text-[#438F32]"
                />
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-5 -left-2 z-10 flex max-w-[230px] items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-xl shadow-slate-900/10 sm:-left-7 sm:p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF9FD] text-[#0085AD]">
                <CheckCircle2 size={23} />
              </div>

              <div>
                <strong className="block text-sm font-bold text-[#333333]">
                  Learn by Doing
                </strong>

                <span className="mt-1 block text-xs text-slate-500">
                  Real-World Experience
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
