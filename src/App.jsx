import { useEffect, useState } from "react";
import { AnimatePresence, MotionConfig, useReducedMotion } from "framer-motion";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const INTRO_KEY = "maobi:intro-seen";

function introAlreadySeen() {
  try {
    return window.sessionStorage.getItem(INTRO_KEY) === "1";
  } catch {
    return false;
  }
}

export default function App() {
  const reduceMotion = useReducedMotion();
  const [introDone, setIntroDone] = useState(() => {
    if (typeof window === "undefined") return true;
    return introAlreadySeen();
  });
  const [introKey, setIntroKey] = useState(0);

  useEffect(() => {
    document.body.classList.toggle("is-locked", !introDone);
    return () => document.body.classList.remove("is-locked");
  }, [introDone]);

  const finishIntro = () => {
    try {
      window.sessionStorage.setItem(INTRO_KEY, "1");
    } catch {
      // Session storage can be unavailable in privacy modes; the intro still closes.
    }
    setIntroDone(true);
  };

  const replayIntro = () => {
    try {
      window.sessionStorage.removeItem(INTRO_KEY);
    } catch {
      // Ignore storage failures and replay for this visit.
    }
    setIntroKey((key) => key + 1);
    window.scrollTo({ top: 0, behavior: "auto" });
    setIntroDone(false);
  };

  return (
    <MotionConfig reducedMotion="never">
      <div className="site">
        <AnimatePresence>
          {!introDone && (
            <Intro
              key={introKey}
              reducedMotion={Boolean(reduceMotion)}
              onComplete={finishIntro}
            />
          )}
        </AnimatePresence>

        <Navbar ready={introDone} />

        <main id="main">
          <Hero ready={introDone} />
          <Marquee />
          <About />
          <Projects />
          <Contact />
        </main>

        <Footer onReplayIntro={replayIntro} />
      </div>
    </MotionConfig>
  );
}