import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { ArrowUpRight, MoveRight } from "lucide-react";
import SectionHead from "./SectionHead";
import ProjectPreview from "./ProjectPreview";
import { projects, contact } from "../data/projects";
import useMediaQuery from "../hooks/useMediaQuery";

const EASE = [0.16, 1, 0.3, 1];

function requestLink(project) {
  return `mailto:${contact.email}?subject=${encodeURIComponent(
    `Case study request — ${project.title} ${project.titleLine2}`,
  )}`;
}

function ProjectPanel({ project, stacked = false, index = 0 }) {
  return (
    <motion.article
      className={`work-panel ${stacked ? "work-panel--stack" : ""}`}
      initial={{ opacity: stacked ? 0 : 0.28, y: stacked ? 28 : 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: stacked, amount: stacked ? 0.15 : 0.55 }}
      transition={{ duration: 0.85, ease: EASE, delay: stacked ? 0 : index * 0.03 }}
    >
      <div className="work-panel__head">
        <span className="work-panel__num">{project.id}</span>
        <span className="work-panel__type">{project.type}</span>
        <span className="work-panel__year">{project.year}</span>
        <span className="work-panel__status">{project.status}</span>
      </div>

      <div className="work-panel__title-row">
        <h3 className="work-panel__title">
          <span>{project.title}</span>
          <span className="outline-text">{project.titleLine2}</span>
        </h3>
        <span className="work-panel__count" aria-hidden="true">
          {project.id} / 03
        </span>
      </div>

      <div className="work-panel__preview">
        <ProjectPreview project={project} />
      </div>

      <div className="work-panel__foot">
        <p>{project.description}</p>
        <div className="work-panel__aside">
          <ul className="tag-list" aria-label={`${project.title} technologies`}>
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a className="text-link text-link--small" href={requestLink(project)}>
            REQUEST CASE STUDY
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function HorizontalWork() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [distance, setDistance] = useState(0);
  const [active, setActive] = useState(1);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const rawX = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const x = useSpring(rawX, { stiffness: 110, damping: 30, mass: 0.35 });
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 30,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setActive(Math.max(1, Math.floor(value * projects.length) + 1));
  });

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      setDistance(Math.max(0, track.scrollWidth - window.innerWidth));
    };
    measure();
    const observer = new ResizeObserver(measure);
    if (trackRef.current) observer.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div
      className="work-gallery"
      ref={sectionRef}
      style={distance ? { height: `calc(100svh + ${distance}px)` } : undefined}
    >
      <div className="work-gallery__sticky">
        <div className="work-gallery__hud work-gallery__hud--top">
          <span className="mono-label">SELECTED WORK</span>
          <span className="mono-label">01 PROJECT</span>
        </div>

        <motion.div className="work-gallery__track" ref={trackRef} style={{ x }}>
          {projects.map((project, index) => (
            <ProjectPanel key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        <div className="work-gallery__hud work-gallery__hud--bottom">
          <span className="work-gallery__travel">
            <MoveRight size={15} aria-hidden="true" />
            SCROLL TO TRAVEL
          </span>
          <div className="work-gallery__progress" aria-hidden="true">
            <span className="work-gallery__progress-track">
              <motion.span className="work-gallery__progress-fill" style={{ scaleX: progressScale }} />
            </span>
            <span className="work-gallery__count">
              0{active} <span>/ 01</span>
            </span>
          </div>
          <a className="work-gallery__skip" href="#contact">
            SKIP TO CONTACT
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="work-empty">
      <h2>No projects yet</h2>
      <p>Check back soon — new work is added regularly.</p>
      <a href="#contact" className="btn btn--ghost">
        GET IN TOUCH
      </a>
    </div>
  );
}

export default function Projects() {
  const reduceMotion = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const horizontal = isDesktop && !reduceMotion;

  return (
    <section id="projects" className="projects">
      <div className="shell">
        <SectionHead index="03" label="Selected work" meta="THE EXHIBITION" />

        <div className="work-intro">
          <h2 className="work-intro__title">
            <span>SELECTED</span>
            <span className="serif">work.</span>
          </h2>

          <div className="work-intro__aside">
            <p>
              Three builds treated as individual digital experiences. Each one
              is framed, paced and built around a single idea.
            </p>
            <span className="work-intro__note">
              Interface previews are direction studies, not live captures. Full
              case studies available on request.
            </span>
          </div>
        </div>
      </div>

      {horizontal && projects.length > 0 ? (
        <HorizontalWork />
      ) : projects.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="shell">
          <div className="work-stack">
            {projects.map((project, index) => (
              <ProjectPanel
                key={project.id}
                project={project}
                stacked
                index={index}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}