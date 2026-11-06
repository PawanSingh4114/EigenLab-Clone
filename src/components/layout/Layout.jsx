import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Jin pages par footer nahi dikhana, unke path yahan likho
const hideFooterOn = ["/login"];

export default function Layout() {
  const { pathname } = useLocation();
  const showFooter = !hideFooterOn.includes(pathname);

  return (
    <div className="flex min-h-screen flex-col bg-[#070b0a] text-white">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      {showFooter && <Footer />}
    </div>
  );
}