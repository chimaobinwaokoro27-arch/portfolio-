import { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHead from "./SectionHead";

const EASE = [0.16, 1, 0.3, 1];

const facts = [
  ["Role", "Frontend developer"],
  ["Practice", "Interface engineering & motion"],
  ["Toolkit", "React / JavaScript / CSS / Tailwind"],
  ["Status", "Open for select projects"],
];

const capabilities = [
  ["01", "HTML5", "Semantic structure", "Foundation"],
  ["02", "CSS3", "Layout, grids & visual systems", "Foundation"],
  ["03", "JavaScript", "Interaction & application logic", "Language"],
  ["04", "React", "Component architecture & state", "Framework"],
  ["05", "Tailwind CSS", "Utility-led design systems", "Styling"],
  ["06", "Git / GitHub", "Version control & collaboration", "Workflow"],
];

const line = {
  hidden: { y: "115%", rotate: 2 },
  show: (index) => ({
    y: "0%",
    rotate: 0,
    transition: { duration: 1.1, ease: EASE, delay: index * 0.09 },
  }),
};

export default function About() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const portraitRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, amount: 0.4 });
  const portraitInView = useInView(portraitRef, { once: true, amount: 0.3 });
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : -34, reduceMotion ? 0 : 46]);
  const smoothImageY = useSpring(imageY, { stiffness: 80, damping: 24, mass: 0.5 });
  const backplateY = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : -12, reduceMotion ? 0 : 18]);
  const smoothBackplateY = useSpring(backplateY, { stiffness: 70, damping: 22 });

  return (
    <section id="about" ref={sectionRef} className="about">
      <span className="about__edge mono-label" aria-hidden="true">
        IDENTITY / 01 — THE DEVELOPER
      </span>

      <div className="shell">
        <SectionHead index="01" label="Identity" meta="THE DEVELOPER" />

        <div className="about__intro">
          <div className="about__heading">
            <h2 className="about__title" ref={titleRef}>
              <span className="about__title-line">
                <motion.span
                  custom={0}
                  variants={line}
                  initial="hidden"
                  animate={titleInView ? "show" : "hidden"}
                >
                  FRONTEND
                </motion.span>
              </span>
              <span className="about__title-line about__title-line--serif">
                <motion.span
                  custom={1}
                  variants={line}
                  initial="hidden"
                  animate={titleInView ? "show" : "hidden"}
                >
                  is cinema.
                </motion.span>
              </span>
            </h2>
          </div>

          <motion.p
            className="about__lede"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          >
            I&apos;m Chimaobi Nwaokoro — a frontend developer interested in the
            moment an interface stops feeling assembled and starts feeling
            directed.
          </motion.p>
        </div>

        <div className="about__grid">
          <div className="about__visual">
            <motion.div
              className="about__backplate"
              style={{ y: smoothBackplateY }}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: EASE }}
              aria-hidden="true"
            />
            <motion.figure
              className="about__portrait"
              ref={portraitRef}
              style={{ y: smoothImageY }}
            >
              <motion.img
                src="/profile-large.webp"
                srcSet="/profile.webp 422w, /profile-large.webp 844w"
                sizes="(max-width: 800px) 88vw, 38vw"
                width="422"
                height="631"
                alt="Monochrome portrait of Chimaobi Nwaokoro"
                loading="lazy"
                initial={{ clipPath: "inset(0 0 100% 0)" }}
                animate={portraitInView ? { clipPath: "inset(0 0 0% 0)" } : { clipPath: "inset(0 0 100% 0)" }}
                transition={{ duration: reduceMotion ? 0 : 1.25, ease: EASE }}
              />
              <figcaption>
                <span>IMG_001 / MONO</span>
                <span>2026</span>
              </figcaption>
            </motion.figure>

            <motion.div
              className="about__card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
            >
              <span className="about__card-label">DIRECTION</span>
              <p>
                Engineering the frame.
                <br />
                Directing the motion.
              </p>
              <span className="about__card-index">M / 01</span>
            </motion.div>

            <span className="about__mark mono-label" aria-hidden="true">
              [ 35MM — MONOCHROME ]
            </span>
          </div>

          <div className="about__copy">
            <motion.p
              className="about__statement"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, ease: EASE }}
            >
              I work where engineering meets art direction: component systems,
              interface motion and the small decisions that make a screen feel
              inevitable.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.12, ease: EASE }}
            >
              My process starts with structure, then pace. I care about
              readable code, fast pages, accessible interactions and motion
              that earns its place. The result should be expressive without
              getting in the way of the person using it.
            </motion.p>

            <motion.dl
              className="about__facts"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              {facts.map(([term, value]) => (
                <div key={term} className="about__fact">
                  <dt>{term}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </motion.dl>

            <motion.a
              href="#contact"
              className="text-link"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              LET&apos;S MAKE SOMETHING
              <ArrowUpRight size={16} aria-hidden="true" />
            </motion.a>
          </div>
        </div>

        <motion.blockquote
          className="about__quote"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: EASE }}
        >
          <span className="about__quote-mark" aria-hidden="true">
            “
          </span>
          A good interface is paced. It tells you where to look, when to
          breathe, and what comes next.
        </motion.blockquote>

        <div id="skills" className="capabilities">
          <SectionHead index="02" label="Capabilities" meta="THE TOOLKIT" />

          <div className="capabilities__head">
            <h3 className="capabilities__title">
              A PRACTICAL
              <br />
              <span className="outline-text">TOOLKIT.</span>
            </h3>
            <p>
              Built for the browser. Chosen for clarity, speed and the ability
              to keep a visual idea intact from first sketch to final build.
            </p>
          </div>

          <div className="capabilities__list">
            {capabilities.map(([index, name, note, category], itemIndex) => (
              <motion.div
                key={name}
                className="capability"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: itemIndex * 0.035, ease: EASE }}
              >
                <span className="capability__index">{index}</span>
                <span className="capability__name">{name}</span>
                <span className="capability__note">{note}</span>
                <span className="capability__category">{category}</span>
                <span className="capability__arrow" aria-hidden="true">
                  ↗
                </span>
                <span className="capability__line" aria-hidden="true" />
              </motion.div>
            ))}
          </div>

          <p className="capabilities__note">
            Currently exploring: motion systems, creative development and
            performance-led interaction.
          </p>
        </div>
      </div>
    </section>
  );
}
