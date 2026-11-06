import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { heroContent } from "../../data/hero";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  const { eyebrow, titleStart, titleGradient, textLines, primaryCta, secondaryCta, stats } =
    heroContent;

  return (
    <section className="relative overflow-hidden">
      {/* Dotted background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:26px_26px]"
      />
      {/* Left ki taraf halka green glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 h-[420px] w-[580px] rounded-full bg-[#1f6f4a]/20 blur-[100px]"
      />

      <div className="relative grid items-center gap-12 py-16 pl-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:py-24 lg:pl-20">
        {/* Left: text */}
        <div className="pr-6 lg:pr-0">
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-[#4cc04c]/60" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-300">
              {eyebrow}
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-[58px]">
            {titleStart}{" "}
            <span className="bg-[linear-gradient(90deg,#00aeff,#2ed3b7_50%,#6cc04a)] bg-clip-text text-transparent">
              {titleGradient}
            </span>
          </h1>

          <p className="mt-6 max-w-[640px] text-base leading-[1.45] text-gray-400 lg:text-[19px]">
            {textLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to={primaryCta.to}
              className="inline-flex h-[52px] items-center gap-2.5 rounded-lg bg-[linear-gradient(90deg,#00aeff,#2ed3b7_55%,#6cc04a)] px-7 text-base font-medium text-slate-900 transition hover:brightness-110"
            >
              {primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to={secondaryCta.to}
              className="inline-flex h-[52px] items-center rounded-lg border border-white/15 bg-[#0c0e0e] px-7 text-base font-semibold text-white transition hover:bg-white/5"
            >
              {secondaryCta.label}
            </Link>
          </div>

          <div className="mt-11 flex flex-wrap gap-x-10 gap-y-5">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-[29px] font-bold leading-tight text-white">{stat.value}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: visual (screen ke kinare tak jaata hai) */}
        <div className="min-w-0">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}