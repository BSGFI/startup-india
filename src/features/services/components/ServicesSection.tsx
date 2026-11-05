
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  GraduationCap,
  Sparkles,
} from "lucide-react";

import SectionTitle from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

import { services } from "../data/services";
import ServiceCard from "./ServiceCard";

const highlights = [
  "Practical Learning",
  "Industry-Relevant Skills",
  "Personalized Guidance",
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-label="Our services"
      className="section relative overflow-hidden bg-[#F7FAF8]"
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#60BA45]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#00A5D5]/5 blur-3xl"
      />

      <div className="container-custom relative z-10">

        {/* Section header */}
        <Reveal>
          <div className="mx-auto mb-12 max-w-3xl text-center">

            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#DCEFD6] bg-white px-4 py-2 shadow-sm">
              <Sparkles
                size={15}
                className="text-[#438F32]"
              />

              <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#438F32]">
                What We Do
              </span>
            </div>

            {/* Heading */}
            <SectionTitle
              center
              label="OUR SERVICES"
              title="Everything You Need to Learn, Build & Grow."
              desc="Explore practical learning opportunities, industry-focused training, personalized mentorship, and career guidance designed to help you move forward with confidence."
            />

            {/* Highlights */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2
                    size={17}
                    className="shrink-0 text-[#438F32]"
                  />

                  <span className="text-xs font-semibold text-slate-600 sm:text-sm">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Service Cards */}
        {services.length > 0 ? (
          <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item, index) => (
              <ServiceCard
                key={item.title}
                service={item}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-[#DCEFD6] bg-white px-6 py-16 text-center">
            <GraduationCap
              size={44}
              className="mx-auto text-[#438F32]"
            />

            <h3 className="mt-5 text-xl font-bold text-[#333333]">
              New Programs Coming Soon
            </h3>

            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-500">
              We're preparing new learning and career
              development opportunities. Get in touch
              to find out more.
            </p>

            <Link
              href="/contact"
              className="btn-primary mt-6"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>
        )}

        {/* Bottom CTA */}
        {services.length > 0 && (
          <Reveal>
            <div className="relative mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-[#438F32] to-[#60BA45] px-6 py-9 text-white sm:px-10 lg:px-12">

              {/* Decorative circle */}
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-20 h-60 w-60 rounded-full border-[35px] border-white/10"
              />

              <div
                aria-hidden="true"
                className="absolute bottom-0 right-32 h-24 w-24 rounded-full bg-white/10 blur-xl"
              />

              <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">

                {/* CTA Text */}
                <div className="max-w-xl">
                  <div className="mb-3 flex items-center gap-2">
                    <GraduationCap size={20} />

                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/85">
                      Your Growth Starts Here
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold leading-tight sm:text-3xl">
                    Ready to Take the Next Step?
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">
                    Whether you're exploring internships,
                    developing new skills, or looking for
                    career guidance, BSG is here to help
                    you get started.
                  </p>
                </div>

                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="group inline-flex shrink-0 items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#347429] transition-all hover:-translate-y-0.5 hover:bg-[#F0F9ED]"
                >
                  Get Started Today

                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
