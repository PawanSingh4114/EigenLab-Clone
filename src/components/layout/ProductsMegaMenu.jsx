import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { productsMenu } from "../../data/productsMenu";

export default function ProductsMegaMenu({ onClose }) {
  const { eyebrow, title, text, allLink, talkLink, columns } = productsMenu;

  return (
    <div className="absolute left-1/2 top-full w-[min(1600px,calc(100vw-3rem))] -translate-x-1/2">
      <div className="flex overflow-hidden rounded-b-xl border border-white/10 bg-[#0a0f0d] shadow-2xl">
        {/* Left green panel */}
        <div className="flex w-[313px] shrink-0 flex-col justify-between bg-[linear-gradient(165deg,#12382c_0%,#0c211a_55%,#0a1511_100%)] p-8">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#4cc04c]">
              {eyebrow}
            </p>
            <h3 className="mt-5 text-[32px] font-semibold leading-[1.15] text-white">
              {title}
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-gray-300">{text}</p>
            <Link
              to={allLink.to}
              onClick={onClose}
              className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-[#4cc04c] hover:brightness-125"
            >
              {allLink.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10">
            <div className="mb-5 h-px w-40 bg-white/15" />
            <Link
              to={talkLink.to}
              onClick={onClose}
              className="inline-flex items-center gap-2 text-sm text-white hover:text-[#4cc04c]"
            >
              {talkLink.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* 3 columns */}
        <div className="grid flex-1 grid-cols-3 gap-x-10 px-10 py-8">
          {columns.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-400">
                {col.heading}
              </p>
              <ul className="mt-8 space-y-6">
                {col.items.map(({ title, desc, to, icon: Icon }) => (
                  <li key={title}>
                    <Link to={to} onClick={onClose} className="group/item flex gap-4">
                      <Icon
                        className="mt-0.5 h-5 w-5 shrink-0 text-[#4cc04c]"
                        strokeWidth={1.5}
                      />
                      <span>
                        <span className="block text-[15px] font-semibold text-white transition-colors group-hover/item:text-[#4cc04c]">
                          {title}
                        </span>
                        <span className="mt-1 block text-[13px] text-gray-400">
                          {desc}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}