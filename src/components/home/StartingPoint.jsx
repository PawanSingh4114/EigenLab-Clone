import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import {
  startingPointHeader,
  startingTabs,
  startingPoints,
} from "../../data/startingPoints";

export default function StartingPoint() {
  // Screenshot mein "Your Role" selected tha, isliye wahi default hai
  const [activeTab, setActiveTab] = useState("role");
  const items = startingPoints[activeTab];

  return (
    <section
      id="starting-point"
      // relative z-10 + opaque background = Core Modules ke upar se slide karega
            className="relative scroll-mt-20 border-t border-white/10"
      style={{
        backgroundColor: "#0a0a0a",
        // Photo (agar ho) ke upar dark overlay, jo neeche solid black ho jata hai
        backgroundImage:
          "linear-gradient(180deg, rgba(6,9,9,0.78) 0%, rgba(6,9,9,0.62) 35%, #0a0a0a 85%), url('/highlights-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/* Header: heading + tabs */}
      <div className="flex flex-col gap-6 border-b border-white/10 px-6 pt-16 lg:flex-row lg:items-end lg:justify-between lg:px-20">
        <h2 className="pb-6 text-4xl font-bold tracking-tight text-white lg:text-[40px]">
          {startingPointHeader.title}
        </h2>

        <div role="tablist" aria-label="Find your starting point" className="flex">
          {startingTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.id)}
                className={`-mb-px cursor-pointer border-b px-6 py-4 text-xs font-medium transition-colors ${
                  isActive
                    ? "border-[#4cc04c] text-[#4cc04c]"
                    : "border-white/15 text-gray-300 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3 x 2 grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              to={item.to}
              className="group flex min-h-[404px] flex-col border-b border-white/10 px-6 pb-9 pt-[30px] transition-colors hover:bg-white/[0.03] md:border-r md:[&:nth-child(2n)]:border-r-0 lg:px-[75px] lg:border-r lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0"
            >
              <Icon className="h-7 w-7" strokeWidth={1.4} style={{ color: item.accent }} />

              <h3 className="mt-[26px] max-w-[330px] text-[28px] font-medium leading-[33px] tracking-tight text-white">
                {item.title}
              </h3>

              {/* "Explore" hamesha cell ke bottom mein */}
              <div className="mt-auto flex items-center justify-between border-t border-white/15 pt-6 text-[11px] font-semibold text-gray-200">
                <span className="transition-colors group-hover:text-[var(--accent)]" style={{ "--accent": item.accent }}>
                  Explore
                </span>
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  style={{ color: item.accent }}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}