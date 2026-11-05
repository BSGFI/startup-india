
"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  Loader2,
  Send,
} from "lucide-react";

import { submitContact } from "../services/contact.service";
import { parseContact } from "../schemas/contact.schema";

type FormStatus = {
  type: "success" | "error";
  message: string;
} | null;

const services = [
  { value: "internship", label: "Internship Programs" },
  { value: "training", label: "Training Programs" },
  { value: "mentorship", label: "1-to-1 Mentorship" },
  { value: "career-guidance", label: "Career Guidance" },
  { value: "partnership", label: "College / Corporate Partnership" },
  { value: "general", label: "General Inquiry" },
];

export default function ContactForm() {
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<FormStatus>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (pending) return;

    const form = event.currentTarget;

    const rawData = Object.fromEntries(new FormData(form));
    const input = parseContact(rawData);

    if (!input) {
      setStatus({
        type: "error",
        message:
          "Please check your details. Required fields must be valid, and your message must be under 5,000 characters.",
      });
      return;
    }

    setPending(true);
    setStatus(null);

    try {
      await submitContact(input);

      form.reset();

      setStatus({
        type: "success",
        message:
          "Your message has been submitted successfully. Thank you for contacting Build Something Great!",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
      aria-label="Contact inquiry form"
    >
      {/* Name and Email */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm font-semibold text-[#333333]"
          >
            Full Name <span className="text-red-500">*</span>
          </label>

          <input
            id="contact-name"
            name="name"
            type="text"
            required
            maxLength={200}
            autoComplete="name"
            placeholder="Enter your full name"
            className="field mt-2"
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-semibold text-[#333333]"
          >
            Email Address <span className="text-red-500">*</span>
          </label>

          <input
            id="contact-email"
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            placeholder="you@example.com"
            className="field mt-2"
          />
        </div>
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="contact-phone"
          className="block text-sm font-semibold text-[#333333]"
        >
          Phone Number
          <span className="ml-2 text-xs font-normal text-slate-400">
            (Optional)
          </span>
        </label>

        <input
          id="contact-phone"
          name="phone"
          type="tel"
          maxLength={20}
          autoComplete="tel"
          placeholder="+91 98765 43210"
          className="field mt-2"
        />
      </div>

      {/* Service */}
      <div>
        <label
          htmlFor="contact-service"
          className="block text-sm font-semibold text-[#333333]"
        >
          What are you interested in?
          <span className="ml-1 text-red-500">*</span>
        </label>

        <select
          id="contact-service"
          name="service"
          required
          defaultValue=""
          className="field mt-2 cursor-pointer"
        >
          <option value="" disabled>
            Select a service
          </option>

          {services.map((service) => (
            <option key={service.value} value={service.value}>
              {service.label}
            </option>
          ))}
        </select>
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="contact-subject"
          className="block text-sm font-semibold text-[#333333]"
        >
          Subject <span className="text-red-500">*</span>
        </label>

        <input
          id="contact-subject"
          name="subject"
          type="text"
          required
          maxLength={200}
          placeholder="How can we help you?"
          className="field mt-2"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-semibold text-[#333333]"
        >
          Your Message <span className="text-red-500">*</span>
        </label>

        <textarea
          id="contact-message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={5}
          placeholder="Tell us about your goals, questions, or requirements..."
          className="field mt-2 min-h-36 resize-y"
        />
        <p className="mt-2 text-xs text-slate-400">
          Please provide at least 10 characters.
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={pending}
        aria-busy={pending}
        className="btn-primary w-full min-h-12 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending Message...
          </>
        ) : (
          <>
            <Send size={17} />
            Send Your Message
            <ArrowRight size={17} />
          </>
        )}
      </button>

      {/* Status Message */}
      {status && (
        <div
          role={status.type === "error" ? "alert" : "status"}
          className={`flex items-start gap-3 rounded-xl border p-4 text-sm leading-relaxed ${
            status.type === "success"
              ? "border-green-200 bg-green-50 text-green-800"
              : "border-red-200 bg-red-50 text-red-700"
          }`}
        >
          {status.type === "success" ? (
            <CheckCircle2 size={19} className="mt-0.5 shrink-0" />
          ) : (
            <AlertCircle size={19} className="mt-0.5 shrink-0" />
          )}

          <span>{status.message}</span>
        </div>
      )}

      {/* Privacy Note */}
      <p className="text-center text-xs leading-relaxed text-slate-500">
        By submitting this form, you agree to be contacted
        regarding your inquiry. Your information will be
        handled according to our privacy policy.
      </p>
    </form>
  );
}
