import { ArrowUpRight, ExternalLink } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-[20px] border border-white/5 bg-white/[0.02] backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-red-500/20 hover:shadow-[0_0_60px_rgba(220,38,38,0.06)]">
      {/* Project preview area */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-950 to-red-950/20">
        <div className="absolute inset-4 rounded-xl border border-white/10 bg-black/60 p-5 shadow-2xl backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold tracking-tight text-white">
              {project.name}
            </span>
            <span className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-[8px] font-bold tracking-widest text-red-400">
              LIVE
            </span>
          </div>
          <div className="mt-6">
            <div className="h-2.5 w-28 rounded bg-white/10" />
            <div className="mt-2.5 h-2 w-40 rounded bg-white/5" />
            <div className="mt-6 grid grid-cols-3 gap-2">
              <div className="aspect-[3/4] rounded bg-white/8" />
              <div className="aspect-[3/4] rounded bg-white/4" />
              <div className="aspect-[3/4] rounded bg-white/8" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-[-30%] right-[-10%] h-48 w-48 rounded-full bg-red-600/15 blur-[80px]" />
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col p-6">
        <span className="font-mono text-[10px] text-neutral-600">
          {String(project.id).padStart(2, "0")}
        </span>

        <h3 className="mt-2 text-xl font-bold uppercase tracking-tight text-white">
          {project.name}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-500">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/5 bg-white/[0.03] px-3 py-1 font-mono text-[9px] tracking-wider text-neutral-500"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3 border-t border-white/5 pt-4">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 rounded-full bg-red-600 px-4 py-2 text-xs font-bold text-white transition-all duration-300 hover:bg-red-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.3)]"
          >
            LIVE DEMO <ExternalLink size={12} />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-bold text-neutral-400 transition-all duration-300 hover:border-white/20 hover:text-white"
          >
            GITHUB <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}
