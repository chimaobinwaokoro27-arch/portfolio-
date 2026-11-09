import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];
const letters = ["M", "A", "O", "B", "I"];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.075, delayChildren: 0.15 },
  },
};

const rise = {
  hidden: { y: "118%", rotate: 3 },
  show: { y: "0%", rotate: 0, transition: { duration: 1.15, ease: EASE } },
};

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE, delay: 0.55 } },
};

export default function Hero({ ready }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 90]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -46]);
  const stageScale = useTransform(scrollYProgress, [0, 1], [1, reduceMotion ? 1 : 0.965]);
  const stageOpacity = useTransform(scrollYProgress, [0, 0.85], [1, reduceMotion ? 1 : 0.25]);
  const smoothImageY = useSpring(imageY, { stiffness: 90, damping: 26, mass: 0.4 });

  return (
    <section id="home" ref={ref} className="hero">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__frame" aria-hidden="true">
        <span className="frame-corner tl" />
        <span className="frame-corner tr" />
        <span className="frame-corner bl" />
        <span className="frame-corner br" />
      </div>

      <motion.div
        className="shell hero__inner"
        style={{ scale: stageScale, opacity: stageOpacity, y: textY }}
        variants={container}
        initial="hidden"
        animate={ready ? "show" : "hidden"}
      >
        <div className="hero__top">
          <motion.span variants={fade} className="mono-label">
            PORTFOLIO
          </motion.span>
          <motion.span variants={fade} className="mono-label hero__top-center">
            FRONTEND DEVELOPER
          </motion.span>
          <motion.span variants={fade} className="hero__available">
            <span className="status-dot" aria-hidden="true" />
            AVAILABLE FOR SELECT WORK
          </motion.span>
        </div>

        <div className="hero__stage">
          <div className="hero__wordmark-wrap">
            <h1 className="hero__wordmark" aria-label="MAOBI">
              {letters.map((letter) => (
                <span className="hero__letter-mask" key={letter} aria-hidden="true">
                  <motion.span variants={rise} className="hero__letter">
                    {letter}
                  </motion.span>
                </span>
              ))}
            </h1>
            <motion.div variants={fade} className="hero__wordmark-sub">
              <span className="hero__wordmark-name">CHIMAOBI NWAOKORO</span>
              <span className="hero__sub-rule" aria-hidden="true" />
              <span>EST. 2026</span>
            </motion.div>
          </div>

          <div className="hero__lower">
            <div className="hero__copy">
              <div className="hero__role">
                <span className="hero__role-mask">
                  <motion.span variants={rise} className="hero__role-line">
                    FRONTEND
                  </motion.span>
                </span>
                <span className="hero__role-mask">
                  <motion.span variants={rise} className="hero__role-line hero__role-line--outline">
                    DEVELOPER
                  </motion.span>
                </span>
              </div>

              <motion.p variants={fade} className="hero__lede">
                I build interfaces with the pacing of film — deliberate
                typography, kinetic detail and code that holds up after the
                lights come on.
              </motion.p>

              <motion.div variants={fade} className="hero__actions">
                <a href="#projects" className="btn btn--primary">
                  VIEW THE WORK
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
                <a href="#contact" className="btn btn--ghost">
                  START A PROJECT
                </a>
              </motion.div>
            </div>

            <motion.figure
              className="hero__portrait"
              style={{ y: smoothImageY }}
              initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
              animate={
                ready
                  ? { opacity: 1, clipPath: "inset(0% 0 0 0)" }
                  : { opacity: 0, clipPath: "inset(100% 0 0 0)" }
              }
              transition={{ duration: 1.35, delay: 0.35, ease: EASE }}
            >
              <div className="hero__portrait-frame">
                <motion.div
                  className="hero__portrait-media"
                  initial={{ scale: 1.16 }}
                  animate={ready ? { scale: 1 } : { scale: 1.16 }}
                  transition={{ duration: 1.8, delay: 0.35, ease: EASE }}
                >
                  <img
                    src="/profile-large.webp"
                    srcSet="/profile.webp 422w, /profile-large.webp 844w"
                    sizes="(max-width: 900px) 70vw, 32vw"
                    width="422"
                    height="631"
                    alt="Portrait of Chimaobi Nwaokoro, frontend developer"
                    fetchPriority="high"
                  />
                </motion.div>
                <div className="hero__portrait-tint" aria-hidden="true" />
                <div className="hero__portrait-scan" aria-hidden="true" />
                <div className="hero__portrait-meta">
                  <span>SELF / 2026</span>
                  <span>FIG. 01</span>
                </div>
              </div>

              <motion.div
                className="hero__badge"
                initial={{ opacity: 0, y: 12 }}
                animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={{ duration: 0.7, delay: 1.05, ease: EASE }}
              >
                <span>OPEN</span>
                <span>FOR PROJECTS</span>
              </motion.div>

              <div className="hero__seal" aria-hidden="true">
                <svg viewBox="0 0 120 120">
                  <defs>
                    <path
                      id="hero-seal-path"
                      d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0"
                    />
                  </defs>
                  <text>
                    <textPath href="#hero-seal-path" startOffset="0%">
                      MAOBI — FRONTEND DEVELOPER — PORTFOLIO 2026 —
                    </textPath>
                  </text>
                </svg>
                <span className="hero__seal-dot" />
              </div>
            </motion.figure>
          </div>
        </div>

        <motion.div variants={fade} className="hero__bottom">
          <a href="#about" className="hero__scroll">
            <span className="hero__scroll-line" aria-hidden="true">
              <motion.span
                animate={{ y: ["-100%", "220%"] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              />
            </span>
            SCROLL TO EXPLORE
            <ArrowDown size={13} aria-hidden="true" />
          </a>
          <span className="hero__bottom-note">DIRECTED &amp; BUILT BY MAOBI</span>
          <span className="hero__bottom-note">REACT / MOTION / CSS</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
