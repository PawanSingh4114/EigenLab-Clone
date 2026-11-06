import { capabilities, capabilitiesHeader } from "../../data/capabilities";

export default function Capabilities() {
  const { eyebrow, title, text } = capabilitiesHeader;

  return (
    // bg opaque hai, taaki Highlights ke neeche se kuch jhalke nahi
    <section id="capabilities" className="bg-[#0a0a0a]">
      {/* Header */}
      <div className="flex flex-col gap-6 px-6 pb-[52px] pt-[72px] lg:flex-row lg:items-end lg:justify-between lg:px-[76px]">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-white/25" />
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-gray-400">
              {eyebrow}
            </span>
          </div>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white lg:text-5xl">
            {title}
          </h2>
        </div>
        <p className="max-w-[450px] text-[15px] leading-7 text-gray-300">{text}</p>
      </div>

      {/* 3 x 2 grid */}
      <div className="grid border-t border-white/10 md:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((item) => (
          <article
            key={item.number}
            className="relative flex min-h-[383px] flex-col border-b border-white/10 px-8 pb-9 pt-12 md:odd:border-r lg:border-r lg:px-12 lg:[&:nth-child(3n)]:border-r-0"
          >
            {/* Bada faint number */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-8 top-6 select-none text-[96px] font-extrabold leading-none text-white/[0.045]"
            >
              {item.number}
            </span>

            <p
              className="text-[11px] font-semibold uppercase tracking-[0.2em]"
              style={{ color: item.accent }}
            >
              {item.eyebrow}
            </p>

            <h3 className="mt-7 max-w-[300px] text-[28px] font-bold leading-[1.25] text-white">
              {item.title}
            </h3>

            <p className="mt-6 max-w-[400px] text-sm leading-[27px] text-gray-400">
              {item.text}
            </p>

            {/* Neeche wala hissa hamesha cell ke bottom mein */}
            <div className="mt-auto pt-8">
              <div className="mb-8 h-px bg-white/10" />
              <p
                className="flex items-center gap-3 text-xs font-semibold"
                style={{ color: item.accent }}
              >
                <span className="h-px w-3" style={{ backgroundColor: item.accent }} />
                {item.stat}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}