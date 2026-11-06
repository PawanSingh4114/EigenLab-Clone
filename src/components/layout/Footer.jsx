import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { footerColumns, legalLinks } from "../../data/footerLinks";
import logo from "../../assets/eigenlab-icon.svg";

/* LinkedIn icon (inline SVG, taaki lucide ke version se import error na aaye) */
function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const iconBtn =
  "flex h-[45px] w-[45px] items-center justify-center rounded-full border border-white/10 bg-[#1c1e1d] text-gray-300 transition hover:bg-white/10 hover:text-white";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#070b0a]">
      <div className="mx-auto w-full max-w-[1434px] px-6">
        {/* Upar wala hissa: logo + 4 columns */}
        <div className="grid grid-cols-2 gap-x-9 gap-y-10 pb-14 pt-16 lg:grid-cols-[2.2fr_1fr_1fr_1fr_1fr]">
          {/* Left block */}
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3">
              <img src={logo} alt="Eigenlab.ai logo" className="h-9 w-9" />
              <span className="bg-[linear-gradient(90deg,#2ec4a0,#4cc04c)] bg-clip-text text-[28px] font-semibold tracking-tight text-transparent">
                Eigenlab.ai
              </span>
            </Link>

            <p className="mt-8 max-w-[425px] text-lg leading-[27px] text-gray-300">
              Bridging Engineering Physics and Modern AI to deliver intelligent,
              self-optimizing systems for the world&apos;s most demanding industrial
              environments.
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex h-[54px] items-center rounded-lg bg-[linear-gradient(90deg,#00b8f4,#4cc04c)] px-7 text-lg font-medium text-slate-950 transition hover:brightness-110"
            >
              Start Your Pilot
            </Link>
          </div>

          {/* 4 link columns */}
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xl font-semibold text-white">{col.heading}</h4>
              <ul className="mt-5 space-y-[13px]">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-base leading-[27px] text-gray-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider (beech mein halka green, kinaron par gayab) */}
        <div className="h-px bg-[linear-gradient(90deg,transparent,rgba(76,192,76,0.3),transparent)]" />

        {/* Neeche wali row */}
        <div className="flex flex-col items-center gap-6 py-9 lg:flex-row lg:justify-between">
          <p className="text-base text-gray-500">
            &copy; {new Date().getFullYear()} Eigenlab.ai. All rights reserved.
          </p>

          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-base text-gray-300 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/eigenlab-ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={iconBtn}
            >
              <LinkedInIcon />
            </a>
            <a href="mailto:hello@eigenlab.ai" aria-label="Email" className={iconBtn}>
              <Mail className="h-5 w-5" strokeWidth={1.8} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}