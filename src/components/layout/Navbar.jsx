import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { navLinks } from "../../data/navLinks";
import ProductsMegaMenu from "./ProductsMegaMenu";
import SolutionsMegaMenu from "./SolutionsMegaMenu";
import logo from "../../assets/eigenlab-icon.svg";

// mega ki value -> kaunsa component
const megaMenus = {
  products: ProductsMegaMenu,
  solutions: SolutionsMegaMenu,
};

const linkBase =
  "flex items-center gap-1.5 rounded-lg border border-transparent px-3 py-2 text-base font-medium text-white transition-colors hover:text-[#4cc04c]";

const triggerClass = (isOpen) =>
  `${linkBase} cursor-pointer ${isOpen ? "border-[#4cc04c] text-[#4cc04c]" : ""}`;

const gradientBtn =
  "inline-flex items-center gap-2 rounded-lg bg-[linear-gradient(90deg,#00b8f4,#4cc04c)] px-5 py-3 text-base font-semibold text-slate-950 transition hover:brightness-110";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // mobile accordion
  const [openMenu, setOpenMenu] = useState(null); // desktop: "Products" / "Solutions" / null
  const navRef = useRef(null);
  const location = useLocation();

  // Page ya hash badalne par sab menu band
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setOpenMenu(null);
  }, [location.pathname, location.hash]);

  // Bahar click ya Esc dabane par desktop menu band
  useEffect(() => {
    const onMouseDown = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const closeMenu = () => setOpenMenu(null);

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#070b0a]/85 backdrop-blur-md"
    >
      <div className="flex h-20 items-center justify-between px-6 lg:px-24">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Eigenlab.ai logo" className="h-9 w-9" />
          <span className="bg-[linear-gradient(90deg,#16a8f5,#3fcf6b)] bg-clip-text text-2xl font-semibold tracking-tight text-transparent">
            Eigenlab.ai
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => {
            const isOpen = openMenu === link.label;
            const MegaMenu = link.mega ? megaMenus[link.mega] : null;

            /* Bada mega menu (Products / Solutions) - click se khulega */
            if (MegaMenu) {
              return (
                <div key={link.label} className="flex h-20 items-center">
                  <button
                    type="button"
                    onClick={() => setOpenMenu(isOpen ? null : link.label)}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    className={triggerClass(isOpen)}
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && <MegaMenu onClose={closeMenu} />}
                </div>
              );
            }

            /* Normal link */
            return (
              <Link key={link.label} to={link.to} className={linkBase}>
                {link.label}
              </Link>
            );
          })}

          <Link to="/login" className={linkBase}>
            Log in
          </Link>
          <Link to="/contact" className={`${gradientBtn} ml-2`}>
            Request a demo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile button */}
        <button
          className="text-white lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-white/[0.07] bg-[#070b0a] lg:hidden">
          <nav className="flex flex-col px-6 py-4">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === link.label ? null : link.label)
                    }
                    className="flex w-full items-center justify-between py-3 text-white"
                    aria-expanded={openDropdown === link.label}
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        openDropdown === link.label ? "rotate-180 text-[#4cc04c]" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === link.label && (
                    <div className="ml-3 flex flex-col border-l border-white/10 pb-2 pl-4">
                      <Link to={link.to} className="py-2 text-sm text-gray-400">
                        All {link.label}
                      </Link>
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.to}
                          className="py-2 text-sm text-gray-400 hover:text-white"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.label} to={link.to} className="block py-3 text-white">
                  {link.label}
                </Link>
              )
            )}

            <div className="mt-3 flex flex-col gap-3 border-t border-white/[0.07] pt-4">
              <Link to="/login" className="py-2 text-white">
                Log in
              </Link>
              <Link to="/contact" className={`${gradientBtn} justify-center`}>
                Request a demo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}