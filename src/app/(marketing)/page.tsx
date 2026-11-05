
import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import Reveal from "@/components/ui/Reveal";

import { Hero } from "@/features/home";
import { AboutSection } from "@/features/about";
import { ServicesSection } from "@/features/services";
import { InternshipSection } from "@/features/internships";
import { TestimonialsSection } from "@/features/testimonials";
import { ContactSection } from "@/features/contact";

export const metadata: Metadata = {
  title: "BSG | Build Something Great",
  description:
    "Explore practical internships, industry-focused training, personalized mentorship, and career guidance with BSG — Build Something Great.",
};

const benefits = [
  {
    icon: GraduationCap,
    number: "01",
    title: "Learn Practical Skills",
    description:
      "Develop real-world skills through hands-on learning, guided exercises, and meaningful projects.",
    highlights: [
      "Hands-on learning",
      "Project-based experience",
    ],
    accent: "green",
  },
  {
    icon: Users,
    number: "02",
    title: "Grow With Guidance",
    description:
      "Learn with support, explore new perspectives, and build confidence as you develop your abilities.",
    highlights: [
      "Personalized guidance",
      "Continuous improvement",
    ],
    accent: "cyan",
  },
  {
    icon: BriefcaseBusiness,
    number: "03",
    title: "Prepare for Your Career",
    description:
      "Explore industry-relevant tools, technologies, and workflows that support your professional growth.",
    highlights: [
      "Industry-focused learning",
      "Career development",
    ],
    accent: "green",
  },
] as const;

const journeySteps = [
  {
    icon: BookOpen,
    title: "Learn",
    description: "Build your foundation",
  },
  {
    icon: Target,
    title: "Build",
    description: "Apply your knowledge",
  },
  {
    icon: ArrowUpRight,
    title: "Grow",
    description: "Move toward your goals",
  },
];

function WhyChooseBSG() {
  return (
    <section
      id="why-choose-bsg"
      className="relative overflow-hidden bg-[#25332C] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#60BA45]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#00A5D5]/10 blur-3xl"
      />

      <div className="container-custom relative z-10">
        {/* Section heading */}
        <Reveal>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#60BA45]/25 bg-[#60BA45]/10 px-4 py-2">
              <Sparkles
                size={15}
                className="text-[#A7E29A]"
              />

              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#A7E29A]">
                Why Choose BSG
              </span>
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Built Around{" "}
              <span className="text-[#A7E29A]">
                Your Growth.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              We bring practical learning, relevant
              skills, and thoughtful guidance together
              to help you learn, build, and grow.
            </p>
          </div>
        </Reveal>

        {/* Benefits */}
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isCyan = benefit.accent === "cyan";

            return (
              <Reveal
                key={benefit.number}
                delay={index * 0.1}
                className="h-full"
              >
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#60BA45]/40 hover:bg-white/[0.08] sm:p-8">

                  {/* Top accent */}
                  <div
                    className={`absolute inset-x-0 top-0 h-1 ${
                      isCyan
                        ? "bg-[#00A5D5]"
                        : "bg-[#60BA45]"
                    }`}
                  />

                  <div className="mb-7 flex items-start justify-between">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl ${
                        isCyan
                          ? "bg-[#00A5D5]/15 text-[#5DD5F4]"
                          : "bg-[#60BA45]/15 text-[#A7E29A]"
                      }`}
                    >
                      <Icon size={30} strokeWidth={1.8} />
                    </div>

                    <span className="text-4xl font-black text-white/10">
                      {benefit.number}
                    </span>
                  </div>

                  <h3 className="mb-4 text-xl font-extrabold text-white sm:text-2xl">
                    {benefit.title}
                  </h3>

                  <p className="mb-7 text-sm leading-7 text-slate-300">
                    {benefit.description}
                  </p>

                  <div className="mt-auto space-y-3 border-t border-white/10 pt-6">
                    {benefit.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2
                          size={17}
                          className={
                            isCyan
                              ? "text-[#5DD5F4]"
                              : "text-[#A7E29A]"
                          }
                        />

                        <span className="text-sm font-medium text-slate-200">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Journey strip */}
        <Reveal delay={0.15}>
          <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <div className="grid gap-7 md:grid-cols-3">
              {journeySteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.title}
                    className="flex items-center gap-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#60BA45]/15 text-[#A7E29A]">
                      <Icon size={23} />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#A7E29A]">
                          0{index + 1}
                        </span>

                        <h4 className="text-lg font-extrabold">
                          {step.title}
                        </h4>
                      </div>

                      <p className="mt-1 text-sm text-slate-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#438F32] py-16 text-white sm:py-20 lg:py-24">

      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border-[50px] border-white/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-[#60BA45]/40 blur-3xl"
      />

      <div className="container-custom relative z-10">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-9 lg:flex-row lg:items-center">

            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-2">
                <Sparkles size={18} />

                <span className="text-xs font-extrabold uppercase tracking-[0.15em] text-white/90">
                  Start Your Growth Journey
                </span>
              </div>

              <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Ready to Build
                <br />
                Something Great?
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-white/90">
                Explore internships, develop practical
                skills, and discover learning opportunities
                that support your future.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-extrabold text-[#347429] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#F0F9ED]"
              >
                Get Started

                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/internships"
                className="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/50 bg-white/10 px-7 py-4 text-sm font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
              >
                Explore Internships

                <ArrowUpRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="overflow-x-clip bg-white">
      {/* Hero */}
      <Hero />

      {/* About BSG */}
      <AboutSection />

      {/* Services */}
      <ServicesSection />

      {/* Internship Opportunities */}
      <InternshipSection />

      {/* Why Choose BSG */}
      <WhyChooseBSG />

      {/* BSG Experience */}
      <TestimonialsSection />

      {/* Contact */}
      <ContactSection />

      {/* Final Call to Action */}
      <FinalCTA />
    </main>
  );
}
