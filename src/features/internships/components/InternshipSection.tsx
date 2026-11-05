
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import SectionTitle from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

import { internships } from "../data/internships";
import InternshipCard from "./InternshipCard";

const benefits = [
  "Practical Learning",
  "Project-Based Experience",
  "Career-Focused Skills",
];

export default function InternshipSection() {
  return (
    <section
      id="internships"
      aria-label="Explore internship opportunities"
      className="section relative overflow-hidden bg-[#F7FAF8]"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#60BA45]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#00A5D5]/5 blur-3xl"
      />

      <div className="container-custom relative z-10">

        {/* Section heading */}
        <Reveal>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#DCEFD6] bg-white px-4 py-2 shadow-sm">
              <Sparkles
                size={15}
                className="text-[#438F32]"
              />

              <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#438F32]">
                Start Your Journey
              </span>
            </div>

            <SectionTitle
              center
              label="INTERNSHIP OPPORTUNITIES"
              title="Learn by Doing. Build Your Future."
              desc="Explore internship tracks designed to help you develop practical skills, work on meaningful projects, and build confidence for your career."
            />

            {/* Benefits */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2
                    size={17}
                    className="shrink-0 text-[#438F32]"
                  />

                  <span className="text-xs font-semibold text-slate-600 sm:text-sm">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Internship cards */}
        {internships.length > 0 ? (
          <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
            {internships.map((item) => (
              <InternshipCard
                key={item.title}
                internship={item}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-[#DCEFD6] bg-white px-6 py-16 text-center">
            <BriefcaseBusiness
              size={42}
              className="mx-auto text-[#438F32]"
            />

            <h3 className="mt-5 text-xl font-bold text-[#333333]">
              Internship Opportunities Coming Soon
            </h3>

            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-500">
              We're preparing new learning opportunities.
              Contact us to learn more about upcoming programs.
            </p>

            <Link
              href="/contact"
              className="btn-primary mt-6"
            >
              Contact Us
              <ArrowRight size={17} />
            </Link>
          </div>
        )}

        {/* Bottom CTA */}
        {internships.length > 0 && (
          <Reveal>
            <div className="relative mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-[#438F32] to-[#60BA45] px-6 py-9 text-white sm:px-10 lg:px-12">

              {/* Decorative circles */}
              <div
                aria-hidden="true"
                className="absolute -right-12 -top-20 h-56 w-56 rounded-full border-[35px] border-white/10"
              />

              <div
                aria-hidden="true"
                className="absolute bottom-0 right-32 h-24 w-24 rounded-full bg-white/10 blur-xl"
              />

              <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">

                <div className="max-w-xl">
                  <div className="mb-3 flex items-center gap-2">
                    <BriefcaseBusiness size={19} />

                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/85">
                      Take the Next Step
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold leading-tight sm:text-3xl">
                    Ready to Build Real-World Skills?
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">
                    Explore your interests, develop practical
                    experience, and take a step toward your
                    career goals.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="group inline-flex shrink-0 items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#347429] transition-all hover:-translate-y-0.5 hover:bg-[#F0F9ED]"
                >
                  Enquire About Internships

                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </div>
          </Reveal>
        )}

        {/* Disclaimer */}
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-slate-500">
          Internship availability, eligibility, program
          structure, and application requirements are subject
          to confirmation. Please contact our team for
          current program details.
        </p>
      </div>
    </section>
  );
}
