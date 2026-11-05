
import Link from "next/link";
import Logo from "./Logo";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
  Heart,
  Mail,
  MapPin,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import { nav } from "@/config/navigation";

const exploreLinks = [
  {
    name: "Internships",
    href: "/internships",
    icon: BriefcaseBusiness,
  },
  {
    name: "Industry Training",
    href: "/training",
    icon: BookOpen,
  },
  {
    name: "1-to-1 Mentorship",
    href: "/mentorship",
    icon: Users,
  },
  {
    name: "Career Guidance",
    href: "/career-guidance",
    icon: Target,
  },
];

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#242B28] text-white">

      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#60BA45]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#00A5D5]/10 blur-3xl"
      />

      {/* Top CTA */}
      <div className="relative border-b border-white/10">
        <div className="container-custom flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">

          <div className="max-w-xl">
            <div className="mb-3 flex items-center gap-2 text-[#A7E29A]">
              <Sparkles size={17} />

              <span className="text-xs font-bold uppercase tracking-[0.15em]">
                Your Future Starts Here
              </span>
            </div>

            <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl">
              Ready to Build Something{" "}
              <span className="text-[#A7E29A]">
                Great?
              </span>
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Explore learning opportunities and take the
              next step toward your career goals.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-3 rounded-xl bg-[#60BA45] px-6 py-3.5 text-sm font-bold text-[#152D12] transition-all hover:-translate-y-0.5 hover:bg-[#A7E29A]"
          >
            Get Started Today

            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom relative">

        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              aria-label="BSG — Build Something Great home"
              className="inline-flex items-center gap-3"
            >
              <Logo />
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-300">
              Empowering learners through practical
              internships, industry-focused training,
              personalized mentorship, and career guidance.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#60BA45]/25 bg-[#60BA45]/10 px-4 py-2">
              <MapPin
                size={15}
                className="text-[#A7E29A]"
              />

              <span className="text-xs font-semibold text-slate-200">
                Building From India
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-base font-extrabold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3.5">
              {nav.slice(0, 3).map(({ name, href }) => (
                <li key={`${name}-${href}`}>
                  <Link
                    href={href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-[#A7E29A]"
                  >
                    <ArrowRight
                      size={14}
                      className="text-[#60BA45] transition-transform group-hover:translate-x-1"
                    />
                    {name}
                  </Link>
                </li>
              ))}

              {quickLinks.map(({ name, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-[#A7E29A]"
                  >
                    <ArrowRight
                      size={14}
                      className="text-[#60BA45] transition-transform group-hover:translate-x-1"
                    />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-6 text-base font-extrabold text-white">
              Explore Opportunities
            </h3>

            <ul className="space-y-4">
              {exploreLinks.map(({ name, href, icon: Icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="group flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-[#A7E29A]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#A7E29A] transition-colors group-hover:bg-[#60BA45]/20">
                      <Icon size={17} />
                    </span>

                    <span>{name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Mission */}
          <div>
            <h3 className="mb-6 text-base font-extrabold text-white">
              Let's Connect
            </h3>

            <p className="text-sm leading-7 text-slate-300">
              Have questions about our programs or need
              help choosing the right learning path?
              We'd love to hear from you.
            </p>

            <Link
              href="/contact"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#A7E29A] transition-colors hover:text-white"
            >
              <Mail size={17} />
              Contact Our Team
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            {/* Brand statement */}
            <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="mb-3 flex items-center gap-2">
                <GraduationCap
                  size={20}
                  className="text-[#A7E29A]"
                />

                <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                  Our Belief
                </span>
              </div>

              <p className="text-sm font-semibold leading-relaxed text-white">
                Great futures are built one skill,
                one project, and one opportunity
                at a time.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-center sm:flex-row sm:text-left">

          <p className="text-xs leading-relaxed text-slate-400">
            © {new Date().getFullYear()} BSG — Build Something Great.
            All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/privacy-policy"
              className="text-xs text-slate-400 transition-colors hover:text-[#A7E29A]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="text-xs text-slate-400 transition-colors hover:text-[#A7E29A]"
            >
              Terms & Conditions
            </Link>

            <span className="inline-flex items-center gap-1 text-xs text-slate-400">
              Made with
              <Heart
                size={13}
                className="fill-[#60BA45] text-[#60BA45]"
              />
              in India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
