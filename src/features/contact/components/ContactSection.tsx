
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import SectionTitle from "@/components/ui/SectionHeading";
import ContactForm from "./ContactForm";

const contactDetails = [
  {
    icon: Mail,
    title: "Email Us",
    value: "Your company email address",
    description: "For general inquiries and support",
    href: null,
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "Your business phone number",
    description: "Speak with our support team",
    href: null,
  },
  {
    icon: MapPin,
    title: "Our Location",
    value: "Your office address",
    description: "Visit our office",
    href: null,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section relative overflow-hidden bg-[#F7FAF8]"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#60BA45]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#00A5D5]/5 blur-3xl"
      />

      <div className="container-custom relative z-10">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left column */}
          <div>
            <SectionTitle
              label="GET IN TOUCH"
              title="Let's Build Your Future Together"
              desc="Have questions about internships, training programs, one-to-one mentorship, or career guidance? Our team is here to help you take the next step."
            />

            {/* Contact details */}
            <div className="mt-10 space-y-4">
              {contactDetails.map(
                ({
                  icon: Icon,
                  title,
                  value,
                  description,
                  href,
                }) => (
                  <div
                    key={title}
                    className="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 transition-all duration-300 hover:border-[#60BA45]/30 hover:shadow-lg hover:shadow-green-900/5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F0F9ED] text-[#438F32] transition-colors group-hover:bg-[#60BA45] group-hover:text-white">
                      <Icon size={21} strokeWidth={1.8} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-bold text-[#333333]">
                        {title}
                      </h3>

                      {href ? (
                        <a
                          href={href}
                          className="mt-1 inline-flex items-center gap-1 break-all text-sm font-semibold text-[#0085AD] hover:underline"
                        >
                          {value}
                          <ArrowUpRight size={14} />
                        </a>
                      ) : (
                        <p className="mt-1 text-sm font-semibold text-slate-700">
                          {value}
                        </p>
                      )}

                      <p className="mt-1 text-xs leading-relaxed text-slate-500">
                        {description}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Help message */}
            <div className="mt-8 rounded-2xl border border-[#DCEFD6] bg-[#F0F9ED] p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#438F32]">
                  <MessageCircle size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#333333]">
                    Need Help Choosing a Program?
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Not sure which internship, training course, or
                    mentorship program is right for you? Send us
                    your questions and our team can help you
                    explore your options.
                  </p>
                </div>
              </div>
            </div>

            {/* Availability note */}
            <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
              <Clock3
                size={17}
                className="shrink-0 text-[#438F32]"
              />
              <span>
                Send your inquiry anytime using the contact form.
              </span>
            </div>
          </div>

          {/* Right column: existing form */}
          <div className="relative">
            <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-[#60BA45]/10 via-transparent to-[#00A5D5]/10 blur-xl" />

            <div className="relative rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8 lg:p-10">
              <div className="mb-7">
                <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#EAF9FD] px-3 py-1.5 text-xs font-bold text-[#0085AD]">
                  <Mail size={14} />
                  CONTACT FORM
                </span>

                <h2
                  id="contact-heading"
                  className="text-2xl font-extrabold tracking-tight text-[#333333] sm:text-3xl"
                >
                  Send Us a Message
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  Tell us how we can help you. Fill in the
                  details below to send your inquiry.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
