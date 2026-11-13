import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, ArrowRight, ArrowDown, Check } from "lucide-react";
import {
  solutionsHero,
  lifecycle,
  pageTabs,
  solutions,
  rolesSection,
  roles,
  useCasesSection,
  deliverSection,
  solutionsCta,
} from "../data/solutionsPage";

const labelClass = "text-[11px] font-semibold uppercase tracking-[0.25em] text-[#5be3b0]";

/* Har section ka heading: left mein title, right mein chhota text */
function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <p className={labelClass}>{eyebrow}</p>
        <h2 className="mt-6 text-4xl font-medium tracking-[-0.03em] text-white lg:text-[42px]">
          {title}
        </h2>
      </div>
      <p className="max-w-[450px] text-base leading-[30px] text-gray-300">{text}</p>
    </div>
  );
}

/* ---------- 1. Hero ---------- */
function LifecycleCard() {
  const { eyebrow, badge, title, rows, footerLeft, footerRight } = lifecycle;

  return (
    <div className="rounded-2xl border border-[#5be3b0]/15 bg-[linear-gradient(160deg,#10231d_0%,#0a1210_70%)] p-8">
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-gray-400">{eyebrow}</p>
        <p className="text-[13px] font-semibold tracking-wider text-[#5be3b0]">{badge}</p>
      </div>

      <h2 className="mt-6 text-2xl font-medium tracking-tight text-white">{title}</h2>

      <ul className="mt-7 space-y-3">
        {rows.map((row) => {
          const Icon = row.icon;
          return (
            <li
              key={row.number}
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#0a0e0d]/80 px-[18px] py-5"
            >
              <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#13201b] text-[#5be3b0]">
                <Icon className="h-[22px] w-[22px]" strokeWidth={1.5} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-base font-semibold text-white">{row.title}</p>
                <p className="mt-1 text-xs text-gray-400">{row.text}</p>
              </div>
              <span className="text-xs text-gray-500">{row.number}</span>
            </li>
          );
        })}
      </ul>

      <div className="mt-6 flex items-center gap-4 text-[9.5px] font-medium uppercase tracking-[0.2em] text-gray-500">
        <span>{footerLeft}</span>
        <span className="h-px flex-1 bg-[linear-gradient(90deg,rgba(91,227,176,0.15),rgba(91,227,176,0.5),rgba(91,227,176,0.15))]" />
        <span>{footerRight}</span>
      </div>
    </div>
  );
}

function Hero() {
  const { eyebrow, titleLine1, titleLine2, text, primaryCta, secondaryCta, note } = solutionsHero;

  return (
    <section className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[700px] bg-[radial-gradient(ellipse_at_25%_0%,rgba(31,111,74,0.18),transparent_62%)]"
      />

      <div className="relative mx-auto grid max-w-[1456px] items-center gap-14 px-6 py-20 lg:grid-cols-[1fr_620px] lg:py-24">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#5be3b0]">
            {eyebrow}
          </p>

          <h1 className="mt-7 text-5xl font-semibold leading-[1.1] tracking-[-0.04em] text-white lg:text-[64px] lg:leading-[1.08]">
            {titleLine1}
            <span className="block text-[#5be3b0]">{titleLine2}</span>
          </h1>

          <p className="mt-9 max-w-[585px] text-[17px] leading-[34px] text-gray-300">{text}</p>

          <div className="mt-9 flex flex-wrap gap-3.5">
            <Link
              to={primaryCta.to}
              className="inline-flex h-[57px] items-center gap-3 rounded-md bg-[#5be3b0] px-6 text-base font-medium text-[#04211a] transition hover:brightness-110"
            >
              {primaryCta.label}
              <ArrowDown className="h-4 w-4" />
            </Link>
            <Link
              to={secondaryCta.to}
              className="inline-flex h-[57px] items-center gap-3 rounded-md border border-white/20 bg-[#0a0d0c] px-6 text-base font-semibold text-white transition hover:bg-white/5"
            >
              {secondaryCta.label}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="mt-10 flex items-center gap-2 text-[12.5px] text-gray-400">
            <span className="h-1.5 w-1.5 rounded-full bg-[#5be3b0]" />
            {note}
          </p>
        </div>

        <LifecycleCard />
      </div>
    </section>
  );
}

/* ---------- 2. Tabs row (By your role / By use case / How we deliver) ---------- */
function TabsRow() {
  return (
    <div className="border-t border-white/10">
      <div className="mx-auto max-w-[1456px] px-6">
        <nav className="flex flex-wrap gap-x-9 gap-y-3 border-b border-white/10 py-[26px] text-[15px] text-gray-300">
          {pageTabs.map((tab) => (
            <Link key={tab.label} to={tab.to} className="transition-colors hover:text-[#5be3b0]">
              {tab.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

/* ---------- 3. Roles: left mein role, right mein uske solutions ---------- */
function RolesSection() {
  const { hash } = useLocation();
  const [activeId, setActiveId] = useState(roles[0].id);

  // Navbar menu se /solutions#operations-teams jaise link aaye to wahi role khul jaye
  useEffect(() => {
    const id = hash.slice(1);
    if (roles.some((role) => role.id === id)) setActiveId(id);
  }, [hash]);

  const active = roles.find((role) => role.id === activeId) ?? roles[0];
  const activeSolutions = active.solutionIds
    .map((id) => solutions.find((s) => s.id === id))
    .filter(Boolean);

  return (
    <section id="roles" className="scroll-mt-24">
      <div className="mx-auto max-w-[1456px] px-6 pb-24 pt-[102px]">
        <SectionHeader {...rolesSection} />

        <div className="mt-11 grid overflow-hidden rounded-xl border border-white/10 bg-[#0c1311] md:grid-cols-[352px_1fr]">
          {/* Left: roles ki list */}
          <div
            role="tablist"
            aria-orientation="vertical"
            className="border-b border-white/10 p-5 md:border-b-0 md:border-r"
          >
            {roles.map((role) => {
              const isActive = role.id === active.id;
              return (
                <button
                  key={role.id}
                  id={role.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(role.id)}
                  className={`flex h-[60px] w-full scroll-mt-28 cursor-pointer items-center justify-between rounded-lg px-5 text-left text-[15px] transition-colors ${
                    isActive
                      ? "bg-[#1b2c24] text-[#5be3b0]"
                      : "text-gray-200 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  {role.title}
                  <ArrowRight className="h-4 w-4 shrink-0 text-gray-200" />
                </button>
              );
            })}
          </div>

          {/* Right: chune hue role ka content */}
          <div role="tabpanel" className="p-8 md:p-11 md:pt-12">
            <h3 className="text-[30px] font-medium tracking-[-0.02em] text-white">
              {active.title}
            </h3>
            <p className="mt-4 text-base text-gray-300">{active.text}</p>

            <ul className="mt-9">
              {activeSolutions.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    {/* Abhi isi page ke card tak scroll karta hai. Solution ke alag page ban jayein to wahan bhejna */}
                    <Link
                      to={`/solutions#${item.id}`}
                      className="group flex h-[61px] items-center gap-4 border-t border-white/10 text-[15px] text-white transition-colors hover:text-[#5be3b0]"
                    >
                      <Icon className="h-[22px] w-[22px] shrink-0 text-[#5be3b0]" strokeWidth={1.5} />
                      <span className="flex-1">{item.title}</span>
                      <ArrowRight className="h-4 w-4 text-gray-200 transition-colors group-hover:text-[#5be3b0]" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 4. Solution cards ---------- */
function SolutionCard({ solution, index }) {
  const { id, title, text, checks, icon: Icon } = solution;

  return (
    <article
      id={id}
      className="flex scroll-mt-28 flex-col rounded-xl border border-white/[0.09] bg-[#0e1513] p-[35px]"
    >
      <div className="flex items-start justify-between">
        <span className="flex h-[52px] w-[52px] items-center justify-center rounded-lg border border-[#5be3b0]/20 bg-[#13261f] text-[#5be3b0]">
          <Icon className="h-[22px] w-[22px]" strokeWidth={1.5} />
        </span>
        <span className="text-[11px] text-[#6fa593]">{String(index + 1).padStart(2, "0")}</span>
      </div>

      <h3 className="mt-7 text-[22px] font-medium leading-snug tracking-tight text-white">{title}</h3>
      <p className="mt-3 text-[15px] leading-[27px] text-gray-300">{text}</p>

      <ul className="mt-6 space-y-3">
        {checks.map((item) => (
          <li key={item} className="flex items-center gap-3 text-[12.5px] leading-5 text-gray-200">
            <Check className="h-3.5 w-3.5 shrink-0 text-[#5be3b0]" strokeWidth={2} />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-10">
        {/* TODO: har solution ka alag page ban jaye to is link ko us page par bhejna */}
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#5be3b0] transition hover:brightness-125"
        >
          Explore solution
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

function UseCases() {
  return (
    <section id="use-cases" className="scroll-mt-24 border-t border-white/10">
      <div className="mx-auto max-w-[1456px] px-6 pb-[104px] pt-[102px]">
        <SectionHeader {...useCasesSection} />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <SolutionCard key={solution.id} solution={solution} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 5. How we deliver + CTA ---------- */
function Deliver() {
  const { eyebrow, title, text, items } = deliverSection;
  const { eyebrow: ctaEyebrow, title: ctaTitle, text: ctaText, button } = solutionsCta;

  return (
    <section id="consulting" className="scroll-mt-24 border-t border-white/10">
      <div className="mx-auto max-w-[1456px] px-6 pb-24 pt-[102px]">
        <SectionHeader eyebrow={eyebrow} title={title} text={text} />

        <div className="mt-11 grid gap-x-[38px] md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="border-t border-white/10 pb-9 pt-7">
              <h3 className="text-[17px] font-semibold text-white">{item.title}</h3>
              <p className="mt-3.5 max-w-[460px] text-[15px] leading-[27px] text-gray-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA box */}
        <div className="mt-20 flex flex-col gap-8 rounded-2xl border border-[#5be3b0]/15 bg-[linear-gradient(120deg,#123328_0%,#0e241d_100%)] px-8 py-14 md:flex-row md:items-center md:justify-between md:px-14 md:py-16">
          <div className="max-w-[760px]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#5be3b0]">
              {ctaEyebrow}
            </p>
            <h2 className="mt-5 text-4xl font-medium tracking-[-0.03em] text-white md:text-[42px] md:leading-[1.1]">
              {ctaTitle}
            </h2>
            <p className="mt-5 max-w-[620px] text-[15px] leading-7 text-gray-300">{ctaText}</p>
          </div>

          <Link
            to={button.to}
            className="inline-flex h-[57px] shrink-0 items-center gap-3 self-start rounded-md bg-[#5be3b0] px-7 text-base font-medium text-[#04211a] transition hover:brightness-110 md:self-center"
          >
            {button.label}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- Page ---------- */
export default function Solutions() {
  return (
    <>
      <Hero />
      <TabsRow />
      <RolesSection />
      <UseCases />
      <Deliver />
    </>
  );
}