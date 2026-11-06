import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { modules, modulesHeader, modulesFooter } from "../../data/modules";

export default function CoreModules() {
  const { eyebrow, titleStart, titleGradient, text } = modulesHeader;

  return (
    // relative z-10 + opaque bg = Highlights ke upar se slide karega
    <section
      id="modules"
      className="relative z-10 scroll-mt-20 border-t border-white/10 bg-[#080909] px-6 pb-24 pt-24"
    >
      {/* Heading */}
      <div className="mx-auto max-w-[720px] text-center">
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-6 bg-white/25" />
          <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-gray-400">
            {eyebrow}
          </span>
        </div>

        <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
          {titleStart}{" "}
          <span className="bg-[linear-gradient(90deg,#00aeff,#2ed3b7_55%,#6cc04a)] bg-clip-text text-transparent">
            {titleGradient}
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-[700px] text-[17px] leading-[29px] text-gray-400">
          {text}
        </p>
      </div>

      {/* 2 x 2 cards */}
      <div className="mx-auto mt-14 grid max-w-[1154px] gap-6 md:grid-cols-2">
        {modules.map((m) => {
          const Icon = m.icon;

          return (
            <article
              key={m.name}
              className="relative flex flex-col rounded-md border border-white/[0.14] bg-[#0d0e0e] p-8"
            >
              {/* Upar ki rang-birangi line */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 -top-px h-0.5 rounded-t-md"
                style={{ backgroundColor: m.accent }}
              />

              {/* Icon + module ka naam */}
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5" strokeWidth={1.6} style={{ color: m.accent }} />
                <span className="text-base font-semibold text-white">{m.name}</span>
              </div>

              <h3 className="mt-7 text-[26px] font-medium leading-[35px] text-white md:text-[28px]">
                {m.heading.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h3>

              <p className="mt-[18px] text-sm leading-[24.5px] text-gray-400">{m.text}</p>

              {/* Neeche ka hissa hamesha card ke bottom mein (dono cards ki lines barabar) */}
              <div className="mt-auto pt-6">
                <dl>
                  <div className="flex border-t border-white/10 py-[17px] text-[13px] leading-[22px]">
                    <dt
                      className="w-24 shrink-0 text-[11px] font-semibold sm:w-[116px]"
                      style={{ color: m.accent }}
                    >
                      Works with
                    </dt>
                    <dd className="text-gray-300">{m.worksWith}</dd>
                  </div>
                  <div className="flex border-t border-white/10 py-[17px] text-[13px] leading-[22px]">
                    <dt
                      className="w-24 shrink-0 text-[11px] font-semibold sm:w-[116px]"
                      style={{ color: m.accent }}
                    >
                      Helps your team
                    </dt>
                    <dd className="text-gray-300">{m.helps}</dd>
                  </div>
                </dl>

                <Link
                  to={m.cta.to}
                  className="group flex items-center justify-between border-t border-white/10 pt-6 text-[13px] font-semibold text-white"
                >
                  {m.cta.label}
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    style={{ color: m.accent }}
                  />
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      {/* Neeche wali row */}
      <div className="mx-auto mt-10 flex max-w-[1154px] flex-col gap-5 border-t border-white/10 pt-9 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xl font-medium text-white">{modulesFooter.title}</p>
          <p className="mt-3 text-[13px] text-gray-400">{modulesFooter.text}</p>
        </div>
        <Link
          to={modulesFooter.cta.to}
          className="group inline-flex items-center gap-2 text-sm font-semibold text-[#12d68a] transition hover:brightness-125"
        >
          {modulesFooter.cta.label}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}