import { Link } from "react-router-dom";
import SectionHeading from "../common/SectionHeading";
import { processSteps } from "../../data/process";

export default function Process() {
  return (
    <section id="process" className="relative scroll-mt-20 px-6 py-24">
      <SectionHeading
        eyebrow="Our Process"
        title="From discovery to full-scale deployment"
        text="A proven five-step framework that takes your industrial operations from raw data to intelligent, self-optimizing systems."
      />

      <ol className="mx-auto mt-16 max-w-[820px]">
        {processSteps.map((step, index) => {
          const Icon = step.icon;
          const isLast = index === processSteps.length - 1;

          return (
            <li key={step.number} className="relative flex gap-6 pb-12 last:pb-0">
              {/* Icons ko jodne wali vertical line */}
              {!isLast && (
                <span
                  aria-hidden="true"
                  className="absolute bottom-1 left-6 top-14 w-px -translate-x-1/2 bg-[#4cc04c]/25"
                />
              )}

              {/* Icon circle */}
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#4cc04c]/40 bg-[#0b1411] text-[#2ecc71]">
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </div>

              {/* Text */}
              <div className="pt-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-semibold text-[#2ecc71]">{step.number}</span>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <span className="rounded-full border border-white/15 px-3 py-0.5 text-[11px] text-gray-300">
                    {step.duration}
                  </span>
                </div>
                <p className="mt-3 max-w-[680px] text-[15px] leading-relaxed text-gray-400">
                  {step.text}
                </p>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-16 text-center">
        <Link
          to="/contact"
          className="inline-flex items-center rounded-lg border border-[#4cc04c]/50 bg-[#0c130f] px-7 py-3.5 text-[15px] font-medium text-[#4cc04c] transition hover:bg-[#4cc04c]/10"
        >
          Start Your Pilot Project
        </Link>
      </div>

      {/* Section ke neeche halki green line */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(76,192,76,0.35),transparent)]"
      />
    </section>
  );
}