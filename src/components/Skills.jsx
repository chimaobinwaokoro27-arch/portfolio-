import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Braces,
  Layout,
  Wind,
  GitBranch,
  Globe,
  Smartphone,
} from "lucide-react";

const skills = [
  { name: "HTML5", icon: Code2 },
  { name: "CSS3", icon: Palette },
  { name: "JavaScript", icon: Braces },
  { name: "React.js", icon: Layout },
  { name: "Tailwind CSS", icon: Wind },
  { name: "Git", icon: GitBranch },
  { name: "GitHub", icon: Globe },
  { name: "Responsive Design", icon: Smartphone },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/5 py-24 px-5 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-[0.3em] text-red-500"
        >
          EXPERTISE
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-4xl font-extrabold uppercase tracking-tight text-white md:text-5xl"
        >
          Skills
        </motion.p>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {skills.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex flex-col items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-md transition-all duration-300 hover:border-red-500/20 hover:bg-red-600/5 hover:shadow-[0_0_30px_rgba(220,38,38,0.05)]"
              >
                <Icon
                  size={28}
                  className="text-neutral-600 transition-colors group-hover:text-red-500"
                />
                <span className="font-mono text-[10px] tracking-wider text-neutral-500 group-hover:text-neutral-300">
                  {s.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
