import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { engagementModels, engagementFooter } from "../../data/engagement";

export default function Engagement() {
  return (
    <section id="engagement" className="relative scroll-mt-20 px-6 py-24">
      <SectionHeading
        eyebrow="Engagement Models"
        title="How we engage"
        text="Three scopes, from a fixed-timeline pilot on your own data through to a long-running delivery partnership."
      />

      <div className="mx-auto mt-14 grid max-w-[1260px] gap-6 lg:grid-cols-3">
        {engagementModels.map((model) => {
          const { accent } = model;

          return (
            <article
              key={model.number}
              className="relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0e1010] p-7"
            >
              {/* Upar halka colored glow aur patli line */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-32"
                style={{ background: `linear-gradient(180deg, ${accent}1a, transparent)` }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px"
                style={{ background: `linear-gradient(90deg, ${accent}, transparent 85%)` }}
              />

              <div className="relative flex flex-1 flex-col">
                {/* Number aur badge */}
                <div className="flex items-center justify-between">
                  <div
                    className="flex items-center gap-2 text-[11px] font-semibold"
                    style={{ color: accent }}
                  >
                    {model.number}
                    <span className="h-px w-5 bg-white/30" />
                  </div>
                  <span
                    className="rounded-full border px-3 py-1 text-[11px] font-medium"
                    style={{
                      color: accent,
                      borderColor: `${accent}66`,
                      backgroundColor: `${accent}1a`,
                    }}
                  >
                    {model.badge}
                  </span>
                </div>

                <h3 className="mt-8 text-[22px] font-bold text-white">{model.title}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-gray-300">{model.text}</p>
                <p className="mt-4 text-[13px] leading-relaxed text-gray-500">
                  <span className="font-semibold text-gray-200">Ideal for:</span> {model.ideal}
                </p>

                <hr className="my-6 border-white/10" />

                {/* Features list */}
                <ul className="space-y-3.5">
                  {model.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-[14px] leading-snug text-gray-200"
                    >
                      <span
                        className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                        style={{ backgroundColor: `${accent}26`, color: accent }}
                      >
                        <Check className="h-2.5 w-2.5" strokeWidth={3} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Button hamesha card ke sabse neeche */}
                <div className="mt-auto pt-10">
                  <Link
                    to={model.cta.to}
                    className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border text-sm font-medium transition hover:brightness-125"
                    style={{
                      color: accent,
                      borderColor: `${accent}80`,
                      backgroundColor: `${accent}0d`,
                    }}
                  >
                    {model.cta.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Cards ke neeche */}
      <div className="mt-14 text-center">
        <Link
          to={engagementFooter.to}
          className="inline-flex items-center rounded-lg border border-[#4cc04c]/50 bg-[#0c130f] px-7 py-3.5 text-[15px] font-medium text-[#4cc04c] transition hover:bg-[#4cc04c]/10"
        >
          {engagementFooter.label}
        </Link>
        <p className="mt-4 text-[13px] text-gray-500">{engagementFooter.note}</p>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(76,192,76,0.35),transparent)]"
      />
    </section>
  );
}