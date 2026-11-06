import { useEffect, useRef } from "react";

export default function StickyLayer({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      // Sirf bade screen (lg) par chipko. Chhote screen par normal rahe.
      if (window.innerWidth >= 1024) {
        el.style.top = `${Math.min(0, window.innerHeight - el.offsetHeight)}px`;
      } else {
        el.style.top = "";
      }
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    window.addEventListener("resize", update);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div ref={ref} className="relative z-0 lg:sticky">
      {children}
    </div>
  );
}
