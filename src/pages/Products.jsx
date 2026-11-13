import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, ArrowDown, Check, ExternalLink } from "lucide-react";
import { productsHero, lifecycle, productGroups, productsCta } from "../data/productsPage";

/* ---------- 1. Hero ---------- */
function LifecycleCard() {
  const { eyebrow, badge, title, rows, footerLeft, footerRight } = lifecycle;

  return (
    <div className="rounded-2xl border border-[#5be3b0]/15 bg-[linear-gradient(160deg,#10231d_0%,#0a1210_70%)] p-8">
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-gray-400">
          {eyebrow}
        </p>
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
  const { eyebrow, titleLine1, titleLine2, text, primaryCta, secondaryCta, note } = productsHero;

  return (
    <section className="relative">
      {/* Upar halka green glow */}
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

/* ---------- 2. Teen columns ka band ---------- */
function GroupBand() {
  return (
    <div className="border-t border-white/10">
      <div className="mx-auto grid max-w-[1456px] px-6 md:grid-cols-3">
        {productGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <Link
              key={group.id}
              to={`/products#${group.id}`}
              className={`group flex min-h-[207px] flex-col border-b border-white/10 pb-11 pt-12 transition-colors hover:bg-white/[0.02] md:px-8 ${
                index === 0 ? "md:pl-0" : "md:border-l"
              }`}
            >
              <div className="flex items-start justify-between">
                <Icon className="h-6 w-6 text-[#5be3b0]" strokeWidth={1.5} />
                <ArrowUpRight className="h-4 w-4 text-gray-400 transition-colors group-hover:text-[#5be3b0]" />
              </div>
              <h3 className="mt-[30px] text-xl font-medium text-white">{group.title}</h3>
              <p className="mt-2 text-[14.5px] text-gray-400">{group.tagline}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- 3. Sidebar + product cards ---------- */
function Sidebar() {
  return (
    <aside className="hidden lg:block">
      {/* sticky: scroll karte waqt chipka rehta hai (top-28 = navbar ke neeche) */}
      <div className="sticky top-28">
        <p className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[#5be3b0]">
          Explore the products
        </p>

        <nav className="mt-8">
          {productGroups.map((group) => (
            <Link
              key={group.id}
              to={`/products#${group.id}`}
              className="flex items-center justify-between border-b border-white/10 py-[21px] text-sm text-gray-100 transition-colors hover:text-[#5be3b0]"
            >
              {group.title}
              <span className="text-[10px] text-gray-500">
                {String(group.products.length).padStart(2, "0")}
              </span>
            </Link>
          ))}

          <Link
            to="/solutions"
            className="flex items-center justify-between border-b border-white/10 py-[21px] text-sm text-gray-100 transition-colors hover:text-[#5be3b0]"
          >
            Find your solution
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </nav>
      </div>
    </aside>
  );
}

function ProductCard({ product }) {
  const { id, title, text, features, icon: Icon, badge, appUrl } = product;

  return (
    <article
      id={id}
      className="flex scroll-mt-28 flex-col rounded-xl border border-white/[0.09] bg-[#0e1513] p-8"
    >
      <div className="flex items-start justify-between">
        <span className="flex h-[52px] w-[52px] items-center justify-center rounded-lg border border-[#5be3b0]/20 bg-[#13261f] text-[#5be3b0]">
          <Icon className="h-[22px] w-[22px]" strokeWidth={1.5} />
        </span>
        {badge && (
          <span className="rounded-md border border-[#5be3b0]/30 bg-[#5be3b0]/10 px-2.5 py-1 text-[11px] font-medium text-[#5be3b0]">
            {badge}
          </span>
        )}
      </div>

      <h3 className="mt-7 text-[23px] font-medium leading-snug tracking-tight text-white">
        {title}
      </h3>
      <p className="mt-3 text-[15px] leading-[27px] text-gray-300">{text}</p>

      <ul className="mt-6 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-[12.5px] leading-5 text-gray-200">
            <Check className="h-3.5 w-3.5 shrink-0 text-[#5be3b0]" strokeWidth={2} />
            {feature}
          </li>
        ))}
      </ul>

      {/* Neeche ka hissa hamesha card ke bottom mein (dono cards ki lines barabar) */}
      <div className="mt-auto pt-8">
        <div className="flex items-center justify-between border-t border-white/10 pt-6">
          {/* TODO: product ke alag page ban jaye to is link ko us page par bhejna */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-[13.5px] font-medium text-[#5be3b0] transition hover:brightness-125"
          >
            Explore product
            <ArrowRight className="h-4 w-4" />
          </Link>

          {appUrl && (
            <a
              href={appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-white transition-colors hover:text-[#5be3b0]"
            >
              Launch app
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function GroupSection({ group }) {
  return (
    <section id={group.id} className="scroll-mt-28">
      <h2 className="text-[34px] font-medium leading-tight tracking-[-0.03em] text-white lg:text-[38px]">
        {group.title}
      </h2>
      <p className="mt-3 text-base text-gray-300">{group.text}</p>

      <div className="mt-9 grid gap-5 md:grid-cols-2">
        {group.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

function ProductsList() {
  return (
    <section id="explore-products" className="scroll-mt-28 pb-24 pt-24">
      <div className="mx-auto grid max-w-[1456px] gap-10 px-6 lg:grid-cols-[246px_1fr] lg:gap-x-[82px]">
        <Sidebar />
        <div className="space-y-24">
          {productGroups.map((group) => (
            <GroupSection key={group.id} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 4. Neeche wala CTA box ---------- */
function BuildCta() {
  const { eyebrow, title, text, button } = productsCta;

  return (
    <section className="px-6 pb-24">
      <div className="mx-auto flex max-w-[1456px] flex-col gap-8 rounded-2xl border border-[#5be3b0]/15 bg-[linear-gradient(120deg,#123328_0%,#0e241d_100%)] px-8 py-14 md:flex-row md:items-center md:justify-between md:px-14 md:py-16">
        <div className="max-w-[720px]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#5be3b0]">
            {eyebrow}
          </p>
          <h2 className="mt-5 text-4xl font-medium tracking-[-0.03em] text-white md:text-[42px] md:leading-[1.1]">
            {title}
          </h2>
          <p className="mt-5 max-w-[620px] text-[15px] leading-7 text-gray-300">{text}</p>
        </div>

        <Link
          to={button.to}
          className="inline-flex h-[57px] shrink-0 items-center gap-3 self-start rounded-md bg-[#5be3b0] px-7 text-base font-medium text-[#04211a] transition hover:brightness-110 md:self-center"
        >
          {button.label}
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

/* ---------- Page ---------- */
export default function Products() {
  return (
    <>
      <Hero />
      <GroupBand />
      <ProductsList />
      <BuildCta />
    </>
  );
}