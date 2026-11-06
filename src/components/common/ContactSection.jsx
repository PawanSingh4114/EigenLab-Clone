
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Globe2,
  Mail,
  MoveUpRight,
} from "lucide-react";

const contactDetails = [
  {
    index: "01",
    label: "DIRECT EMAIL",
    value: "hello@eigenlab.ai",
    href: "mailto:hello@eigenlab.ai",
    icon: Mail,
  },
  {
    index: "02",
    label: "ONLINE",
    value: "eigenlab.ai",
    href: "https://eigenlab.ai",
    icon: Globe2,
  },
];

const initialForm = {
  name: "",
  email: "",
  company: "",
  message: "",
};

function validate(form) {
  const errors = {};

  if (!form.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!form.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!form.message.trim()) {
    errors.message = "Please tell us what you need.";
  }

  return errors;
}

const labelClass =
  "mb-2 block text-[12px] font-medium uppercase tracking-[0.14em] text-gray-400";

const inputClass =
  "w-full rounded-xl border bg-[#0e0f0f] px-4 text-sm text-white outline-none transition-colors placeholder:text-gray-500 focus:border-[#4cc04c]/60";

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => {
      const next = { ...prev };
      delete next[name];
      return next;
    });

    if (status !== "idle") {
      setStatus("idle");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    // Demo mode. Connect your FastAPI POST /contact endpoint here.
    setStatus("success");
    setForm(initialForm);
  }

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#0c0d0d] text-white"
    >
      {/* Subtle technical grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "linear-gradient(to bottom, black, transparent 90%)",
        }}
      />

      <div className="mx-auto max-w-[1260px] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-[76px]">
        <div className="grid items-start gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">

          {/* Left: Contact introduction */}
          <div className="lg:pt-2">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-7 bg-white/30" />
              <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-gray-400">
                Get in touch
              </span>
            </div>

            <h2 className="max-w-xl text-[clamp(2.8rem,6vw,5.5rem)] font-bold leading-[0.98] tracking-[-0.065em]">
              Industry is
              <br />
              complex.
              <br />
              <span className="text-neutral-500">Let's make</span>
              <br />
              <span className="text-[#4cc04c]">it smarter.</span>
            </h2>

            <p className="mt-5 max-w-md text-[15px] leading-7 text-gray-400">
              From operational bottlenecks to AI-driven systems, tell us
              what you are working on. We will explore a practical way
              forward with you.
            </p>

            <div className="mt-6 flex items-center gap-2 text-xs text-gray-400">
              <ArrowDownRight
                size={16}
                className="text-[#4cc04c]"
                strokeWidth={1.5}
              />
              <span>Start with a conversation. Build from there.</span>
            </div>

            {/* Contact details */}
            <div className="mt-8 max-w-md border-t border-white/10">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.index}
                    href={item.href}
                    target={
                      item.href.startsWith("https://") ? "_blank" : undefined
                    }
                    rel={
                      item.href.startsWith("https://")
                        ? "noreferrer"
                        : undefined
                    }
                    className="group flex items-center gap-3 border-b border-white/10 py-3.5 transition-colors hover:border-[#4cc04c]/40"
                  >
                    <span className="w-5 font-mono text-[10px] text-neutral-600">
                      {item.index}
                    </span>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#4cc04c]/20 bg-[#0e2a20] text-[#2ecc71] transition-colors group-hover:bg-[#123526]">
                      <Icon size={17} strokeWidth={1.5} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="mb-1 text-[10px] tracking-[0.15em] text-gray-500">
                        {item.label}
                      </p>
                      <p className="truncate text-sm font-medium text-white">
                        {item.value}
                      </p>
                    </div>

                    <MoveUpRight
                      size={15}
                      className="text-neutral-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#4cc04c]"
                    />
                  </a>
                );
              })}
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-gray-500">
              <span>Focus:</span>
              <span className="text-gray-300">Oil & Gas</span>
              <span className="text-[#4cc04c]">/</span>
              <span className="text-gray-300">Energy</span>
              <span className="text-[#4cc04c]">/</span>
              <span className="text-gray-300">Industrial AI</span>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="relative self-start lg:mt-1">
            <div
              aria-hidden="true"
              className="absolute -right-1.5 -top-1.5 hidden h-12 w-12 border-r border-t border-[#4cc04c]/40 sm:block"
            />

            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#0c0d0d]">
              {/* Accent line */}
              <div
                aria-hidden="true"
                className="h-[3px] bg-[linear-gradient(90deg,#00b8f4,#2ed3b7_55%,#6cc04a)]"
              />

              <div className="flex items-start justify-between border-b border-white/10 px-5 py-4 sm:px-7">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#4cc04c]">
                    Project enquiry
                  </p>
                  <h3 className="mt-1.5 text-xl font-semibold tracking-tight">
                    Tell us about it.
                  </h3>
                </div>

                <span className="pt-1 font-mono text-[10px] text-neutral-500">
                  FORM / 001
                </span>
              </div>

              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5 px-5 py-6 sm:px-7 sm:py-7"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className={labelClass}>
                      Full name <span className="text-[#4cc04c]">*</span>
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="John Smith"
                      value={form.name}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={
                        errors.name ? "contact-name-error" : undefined
                      }
                      className={`${inputClass} h-12 ${
                        errors.name ? "border-red-500/60" : "border-white/10"
                      }`}
                    />

                    {errors.name && (
                      <p
                        id="contact-name-error"
                        className="mt-1.5 text-xs text-red-400"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className={labelClass}>
                      Email address <span className="text-[#4cc04c]">*</span>
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={
                        errors.email ? "contact-email-error" : undefined
                      }
                      className={`${inputClass} h-12 ${
                        errors.email ? "border-red-500/60" : "border-white/10"
                      }`}
                    />

                    {errors.email && (
                      <p
                        id="contact-email-error"
                        className="mt-1.5 text-xs text-red-400"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-company" className={labelClass}>
                    Company
                    <span className="ml-2 normal-case tracking-normal text-gray-600">
                      (Optional)
                    </span>
                  </label>

                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    placeholder="Your company name"
                    value={form.company}
                    onChange={handleChange}
                    className={`${inputClass} h-12 border-white/10`}
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className={labelClass}>
                    Your message <span className="text-[#4cc04c]">*</span>
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Describe your challenge or what you would like to explore..."
                    value={form.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message ? "contact-message-error" : undefined
                    }
                    className={`${inputClass} min-h-[118px] resize-y py-3.5 ${
                      errors.message
                        ? "border-red-500/60"
                        : "border-white/10"
                    }`}
                  />

                  {errors.message && (
                    <p
                      id="contact-message-error"
                      className="mt-1.5 text-xs text-red-400"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                {status === "success" && (
                  <div
                    role="status"
                    className="flex gap-3 rounded-lg border border-[#4cc04c]/30 bg-[#4cc04c]/10 p-3.5 text-sm text-[#7ddc7d]"
                  >
                    <Check size={17} className="mt-0.5 shrink-0" />
                    <p>
                      Demo complete. Connect your backend to send this
                      enquiry to your inbox.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  className="group flex h-[54px] w-full items-center justify-between rounded-lg bg-[linear-gradient(90deg,#00aeff,#2ed3b7_55%,#6cc04a)] px-5 text-sm font-semibold text-slate-950 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4cc04c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0d0d]"
                >
                  <span>Send message</span>
                  <span className="flex items-center gap-2">
                    <span className="text-xs font-normal">Let's talk</span>
                    <ArrowUpRight
                      size={17}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </button>

                <p className="text-center text-[11px] leading-5 text-gray-500">
                  We aim to respond within one business day.
                </p>
              </form>
            </div>

            <div className="mt-3 flex items-center justify-between gap-3 font-mono text-[9px] tracking-wider text-neutral-600">
              <span>ENGINEERED FOR INDUSTRY</span>
              <span>EL / 001</span>
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-500">
            Turning industrial complexity into intelligent action.
          </p>

          <a
            href="mailto:hello@eigenlab.ai"
            className="inline-flex items-center gap-2 text-xs text-gray-400 transition-colors hover:text-[#4cc04c]"
          >
            Prefer email? Write to us
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>

      {/* Subtle green bottom edge */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(76,192,76,0.35),transparent)]"
      />
    </section>
  );
}
