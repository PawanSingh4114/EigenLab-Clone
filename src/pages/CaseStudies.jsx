import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import {
  caseStudiesHeader,
  caseStudies,
  caseStudiesCta,
} from "../data/caseStudies";

const gradientText =
  "bg-[linear-gradient(90deg,#00aeff,#2ed3b7_55%,#6cc04a)] bg-clip-text text-transparent";

function ColumnLabel({ children, color }) {
  return (
    <p
      className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em]"
      style={{ color }}
    >
      {children}
    </p>
  );
}

export default function CaseStudies() {
  const { eyebrow, titleStart, titleGradient, text } = caseStudiesHeader;

  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-7">
      {/* Upar halka green glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_at_top,rgba(31,111,74,0.14),transparent_65%)]"
      />

      <div className="relative mx-auto max-w-[1020px]">
        {/* Navbar nahi hai, isliye wapas jaane ka link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[13px] text-gray-400 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to home
        </Link>

        {/* Heading */}
        <header className="mt-12 text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-6 bg-white/25" />
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-gray-400">
              {eyebrow}
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-[56px] md:leading-[1.1]">
            {titleStart} <span className={gradientText}>{titleGradient}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-[690px] text-lg leading-relaxed text-gray-400 md:text-xl">
            {text}
          </p>
        </header>

        {/* Case study cards */}
        <div className="mt-16 space-y-[30px]">
          {caseStudies.map((cs) => {
            const Icon = cs.icon;

            return (
              <article
                key={cs.number}
                className="relative overflow-hidden rounded-3xl border border-l-2 border-white/10 bg-[#0e0f0f] px-6 py-9 sm:px-9"
                style={{ borderLeftColor: cs.accent }}
              >
                {/* Bada faint number */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-8 top-5 select-none text-[72px] font-extrabold leading-none text-white/[0.05]"
                >
                  {cs.number}
                </span>

                {/* Icon + tags */}
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-lg border"
                    style={{
                      color: cs.accent,
                      borderColor: `${cs.accent}40`,
                      backgroundColor: `${cs.accent}1f`,
                    }}
                  >
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.6} />
                  </span>
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="mt-5 text-2xl font-bold tracking-tight text-white md:text-[28px]">
                  {cs.title}
                </h2>

                {/* Challenge / Solution / Impact */}
                <div className="mt-9 grid gap-8 md:grid-cols-3">
                  <div>
                    <ColumnLabel color={cs.accent}>Challenge</ColumnLabel>
                    <p className="mt-4 text-sm leading-[21.5px] text-gray-400">
                      {cs.challenge}
                    </p>
                  </div>

                  <div>
                    <ColumnLabel color={cs.accent}>Solution</ColumnLabel>
                    <p className="mt-4 text-sm leading-[21.5px] text-gray-400">
                      {cs.solution}
                    </p>
                  </div>

                  <div>
                    <ColumnLabel color={cs.accent}>Impact</ColumnLabel>
                    <ul className="mt-4 space-y-2.5">
                      {cs.impact.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 text-sm leading-snug text-gray-200"
                        >
                          <span
                            className="mt-px flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full"
                            style={{ backgroundColor: `${cs.accent}26`, color: cs.accent }}
                          >
                            <Check className="h-2.5 w-2.5" strokeWidth={3} />
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Neeche wala CTA box */}
        <div className="mt-8 rounded-3xl border border-[#4cc04c]/20 bg-[radial-gradient(ellipse_at_center,rgba(31,111,74,0.3),rgba(8,12,10,0.96)_72%)] px-6 py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-[38px]">
            {caseStudiesCta.titleStart}{" "}
            <span className={gradientText}>{caseStudiesCta.titleGradient}</span>
          </h2>

          <p className="mx-auto mt-4 max-w-[520px] text-[17px] leading-7 text-gray-400">
            {caseStudiesCta.text}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to={caseStudiesCta.primary.to}
              className="inline-flex h-[47px] items-center gap-2 rounded-lg bg-[linear-gradient(90deg,#00aeff,#2ed3b7_55%,#6cc04a)] px-7 text-sm font-semibold text-slate-900 transition hover:brightness-110"
            >
              {caseStudiesCta.primary.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to={caseStudiesCta.secondary.to}
              className="inline-flex h-[47px] items-center rounded-lg border border-[#4cc04c]/40 bg-[#0c130f] px-7 text-sm font-semibold text-[#4cc04c] transition hover:bg-[#4cc04c]/10"
            >
              {caseStudiesCta.secondary.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}