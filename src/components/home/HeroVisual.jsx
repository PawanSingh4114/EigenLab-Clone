import { capabilityRows } from "../../data/hero";

const tones = {
  green: "#2ecc71",
  teal: "#22d3b0",
  blue: "#2aa8ff",
};

function CapabilityCard({ item }) {
  const Icon = item.icon;
  const color = tones[item.tone];

  return (
    // mr-4 (gap nahi), taaki marquee ka -50% bilkul ek set ke barabar rahe
    <div className="mr-4 flex h-[112px] w-[208px] shrink-0 flex-col items-center justify-center gap-3 rounded-xl border border-white/[0.08] bg-[linear-gradient(180deg,#121615,#0d1010)]">
      <span
        className="flex h-9 w-9 items-center justify-center rounded-lg border"
        style={{ color, borderColor: `${color}40`, backgroundColor: `${color}1f` }}
      >
        <Icon className="h-4 w-4" strokeWidth={1.6} />
      </span>
      <span className="text-xs font-semibold text-gray-200">{item.label}</span>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }) {
  // Items ko do baar likhte hain, taaki loop beech mein ruke nahi
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <div className={`flex w-max ${reverse ? "hero-marquee-reverse" : "hero-marquee"}`}>
        {doubled.map((item, index) => (
          <CapabilityCard key={`${item.label}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}

/* Beech wala circle: andar ka square ghoomta rehta hai */
function Orb() {
  return (
    <div className="flex h-[94px] w-[94px] items-center justify-center rounded-full bg-[linear-gradient(135deg,#18b4e8,#2ed3a0_55%,#6cc04a)] shadow-[0_0_56px_rgba(46,211,160,0.45)]">
      <div className="flex h-[53px] w-[53px] items-center justify-center rounded-full bg-[#050807]">
        <div className="hero-spin h-[27px] w-[27px] rounded-[7px] bg-[linear-gradient(135deg,#8ee05a,#18b4e8)]" />
      </div>
    </div>
  );
}

export default function HeroVisual() {
  return (
    <div aria-hidden="true" className="relative mb-6 h-[240px] w-full">
      {/* 2 rows: upar wali left jaati hai, neeche wali right (ulta) */}
      <div className="absolute inset-0 flex flex-col gap-4 [mask-image:linear-gradient(90deg,transparent,#000_14%)]">
        <MarqueeRow items={capabilityRows.top} />
        <MarqueeRow items={capabilityRows.bottom} reverse />
      </div>

      {/* AI Co-Pilot badge (upar-neeche hilta hai) */}
      <div className="absolute -top-1.5 left-0 z-20">
        <div className="hero-float rounded-lg border border-white/15 bg-[#111514]/95 px-4 py-3 shadow-xl backdrop-blur">
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#2ecc71]" />
            AI Co-Pilot
          </div>
          <p className="mt-0.5 text-xs text-[#4f9a5c]">Live · Generating</p>
        </div>
      </div>

      {/* Beech ka circle */}
      <div className="absolute left-[53%] top-[176px] z-20 -translate-x-1/2 -translate-y-1/2">
        <Orb />
      </div>

      {/* Automation badge (thodi alag speed se upar-neeche) */}
      <div className="absolute -bottom-5 right-12 z-20">
        <div className="hero-float-slow rounded-lg border border-[#2ecc71]/30 bg-[#0a1411]/95 px-4 py-3 shadow-[0_0_24px_rgba(46,204,113,0.15)] backdrop-blur">
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#2ecc71]" />
            Automation
          </div>
          <p className="mt-0.5 text-xs text-[#2ecc71]">Workflow active</p>
        </div>
      </div>
    </div>
  );
}