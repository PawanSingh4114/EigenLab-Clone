import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { highlightCards, highlightsHeader } from "../../data/highlights";

export default function Highlights() {
  const { title, text } = highlightsHeader;

  return (
    <section
      id="highlights"
      // relative z-10 + opaque background = Capabilities ke upar se slide karega
      className="relative z-10 border-t border-white/10 bg-[#0a0a0a]"
      style={{
        // Photo (agar ho) + upar halka dark overlay jo neeche solid black ho jata hai
        backgroundImage:
          "linear-gradient(180deg, rgba(6,9,9,0.82) 0%, rgba(6,9,9,0.6) 45%, #0a0a0a 95%), url('/highlights-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/* Header */}
      <div className="flex flex-col gap-4 px-6 pb-11 pt-[72px] lg:flex-row lg:items-center lg:justify-between lg:px-[62px]">
        <h2 className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
          {title}
          <span className="text-[#4cc04c]">.</span>
        </h2>
        <p className="max-w-[420px] text-[14px] leading-[26px] text-gray-300">{text}</p>
      </div>

      {/* 3 columns */}
      <div className="grid border-t border-white/10 lg:grid-cols-3">
        {highlightCards.map((card) => (
          <article
            key={card.eyebrow}
            className="flex min-h-[780px] flex-col border-white/10 px-6 pb-9 pt-12 lg:border-l lg:px-[62px] lg:first:border-l-0"
          >
            <p
              className="text-[11px] font-bold uppercase tracking-[0.2em]"
              style={{ color: card.accent }}
            >
              {card.eyebrow}
            </p>

            <h3 className="mt-5 text-[30px] font-medium leading-[1.25] text-white">
              {card.heading.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h3>

            {/* Neeche ka content */}
            <div className="mt-auto pt-16">
              <p className="text-sm font-semibold text-white">{card.title}</p>
              <p className="mt-4 max-w-[400px] text-sm leading-[26px] text-gray-300">
                {card.text}
              </p>
              <p className="mt-5 text-xs font-medium" style={{ color: card.accent }}>
                {card.tags}
              </p>

              <Link
                to={card.cta.to}
                className="group mt-14 flex items-center justify-between border-t border-white/15 pt-5 text-[13px] font-semibold text-gray-100 transition-colors hover:text-white"
              >
                {card.cta.label}
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  style={{ color: card.accent }}
                />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}