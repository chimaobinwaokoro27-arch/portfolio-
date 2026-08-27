import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  MousePointer2,
} from "lucide-react";

function Github({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white"
    >
      {/* Atmospheric background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[140px]" />

        <div className="absolute right-[-10%] top-[20%] h-[300px] w-[300px] rounded-full bg-red-600/10 blur-[120px]" />
      </div>

      {/* Top metadata */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 pt-28 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 font-mono text-[10px] tracking-[0.25em] text-neutral-500"
        >
          <span className="h-2 w-2 rounded-full bg-red-600 shadow-[0_0_12px_#dc2626]" />
          READY TO GIVE A HELPING HAND
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="hidden font-mono text-[10px] tracking-[0.25em] text-neutral-600 sm:block"
        >
          ARISE
        </motion.p>
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto grid min-h-[75vh] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
        {/* Left */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 font-mono text-xs tracking-[0.3em] text-red-500"
          >
            FRONTEND DEVELOPER
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[16vw] font-black leading-[0.78] tracking-[-0.07em] sm:text-[13vw] lg:text-[8.5rem]"
            >
              CHIMAOBI
              <br />
              NWAOKORO
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-8 max-w-lg"
          >
            <p className="text-sm leading-7 text-neutral-500 sm:text-base">
              I build modern digital experiences with clean interfaces,
              responsive layouts and interactive frontend technology.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group flex items-center gap-3 rounded-full bg-red-600 px-6 py-3 text-sm font-bold transition-all duration-300 hover:bg-red-500 hover:shadow-[0_0_35px_rgba(220,38,38,0.35)]"
              >
                VIEW PROJECTS
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-3 rounded-full border border-neutral-800 bg-white/[0.03] px-6 py-3 text-sm font-bold backdrop-blur-md transition-all duration-300 hover:border-neutral-600 hover:bg-white/[0.06]"
              >
                CONTACT
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 8 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{
            duration: 1.1,
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full max-w-xl"
        >
          {/* Outer glow */}
          <div className="absolute -inset-10 rounded-[40px] bg-red-600/10 blur-3xl" />

          {/* Main glass frame */}
          <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-neutral-950/70 p-2 shadow-2xl backdrop-blur-xl">
            {/* Browser top */}
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
              </div>

              <span className="font-mono text-[9px] tracking-widest text-neutral-600">
                PROJECT_001
              </span>

              <Github size={14} className="text-neutral-600" />
            </div>

            {/* Project visual */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-b-[18px] bg-gradient-to-br from-neutral-900 via-neutral-950 to-red-950/30">
              {/* Replace this with your actual project screenshot */}
              <div className="absolute inset-5 rounded-xl border border-white/10 bg-black/70 p-5 shadow-2xl">
                <div className="flex items-center justify-between">
                  <span className="font-bold tracking-tight">CINEVAULT</span>

                  <span className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-[8px] tracking-widest text-red-400">
                    LIVE
                  </span>
                </div>

                <div className="mt-8">
                  <div className="h-3 w-32 rounded bg-white/10" />
                  <div className="mt-3 h-2 w-48 rounded bg-white/5" />
                  <div className="mt-8 grid grid-cols-3 gap-2">
                    <div className="aspect-[2/3] rounded bg-white/10" />
                    <div className="aspect-[2/3] rounded bg-white/5" />
                    <div className="aspect-[2/3] rounded bg-white/10" />
                  </div>
                </div>
              </div>

              {/* Crimson light */}
              <div className="absolute bottom-[-40%] right-[-10%] h-64 w-64 rounded-full bg-red-600/20 blur-[100px]" />
            </div>
          </div>

          {/* Floating metadata */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 top-20 rounded-xl border border-white/10 bg-black/70 px-4 py-3 font-mono text-[9px] tracking-widest text-neutral-400 shadow-xl backdrop-blur-xl sm:-left-8"
          >
            STACK
            <span className="ml-2 text-white">REACT / JS</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-3 bottom-12 rounded-xl border border-red-500/20 bg-black/70 px-4 py-3 font-mono text-[9px] tracking-widest text-neutral-500 shadow-xl backdrop-blur-xl sm:-right-8"
          >
            STATUS
            <span className="ml-2 text-red-500">CODING</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom metadata */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between border-t border-white/5 px-5 py-6 sm:px-8 lg:px-12">
        <div className="flex items-center gap-3 font-mono text-[9px] tracking-widest text-neutral-600">
          <MousePointer2 size={12} />
           EXPLORE
        </div>

        <a
          href="#projects"
          className="flex items-center gap-2 font-mono text-[9px] tracking-widest text-neutral-500 transition-colors hover:text-white"
        >
          SCROLL
          <ArrowDown size={13} />
        </a>

        <span className="hidden font-mono text-[9px] tracking-widest text-neutral-700 sm:block">
          ALWAYS READY
        </span>
      </div>
    </section>
  );
}
