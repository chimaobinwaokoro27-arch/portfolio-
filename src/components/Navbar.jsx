import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const links = [
  { label: "Index", href: "#home", index: "00" },
  { label: "Work", href: "#projects", index: "01" },
  { label: "About", href: "#about", index: "02" },
  { label: "Capabilities", href: "#skills", index: "03" },
  { label: "Contact", href: "#contact", index: "04" },
];

export default function Navbar({ ready }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 32);
        frame = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <>
      <motion.header
        className={`site-nav ${scrolled ? "is-scrolled" : ""} ${ready ? "is-ready" : ""}`}
        initial={false}
        animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : -14 }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <div className="site-nav__inner">
          <a className="brand" href="#home" aria-label="MAOBI — back to top">
            <span className="brand__mark">M</span>
            <span className="brand__word">MAOBI</span>
            <span className="brand__dot" aria-hidden="true" />
          </a>

          <nav className="nav-links" aria-label="Primary">
            {links.slice(1).map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                <span className="nav-link__index">{link.index}</span>
                <span className="nav-link__label">{link.label}</span>
              </a>
            ))}
          </nav>

          <div className="nav-status">
            <span className="status-dot" aria-hidden="true" />
            <span>OPEN FOR PROJECTS</span>
          </div>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span className="menu-toggle__label">{open ? "CLOSE" : "MENU"}</span>
            <span className={`menu-toggle__icon ${open ? "is-open" : ""}`} aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.65, ease: EASE }}
          >
            <div className="mobile-menu__glow" aria-hidden="true" />
            <div className="mobile-menu__top">
              <span>MENU / 2026</span>
              <button
                type="button"
                className="mobile-menu__close"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="mobile-menu__nav" aria-label="Mobile">
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.12 + index * 0.055, ease: EASE }}
                >
                  <span className="mobile-menu__index">{link.index}</span>
                  <span>{link.label}</span>
                  <ArrowUpRight size={22} aria-hidden="true" />
                </motion.a>
              ))}
            </nav>

            <div className="mobile-menu__foot">
              <a href="mailto:chimaobinwaokoro27@gmail.com">chimaobinwaokoro27@gmail.com</a>
              <a href="https://github.com/chimaobinwaokoro27-arch" target="_blank" rel="noopener noreferrer">
                GITHUB ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
