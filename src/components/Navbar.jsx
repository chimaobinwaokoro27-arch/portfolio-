import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <a href="#" className="font-mono text-sm font-bold tracking-wider text-white">
          DEV.VIC&nbsp;&nbsp;<span className="text-red-600"></span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-600 shadow-[0_0_10px_#dc2626]" />
            <span className="font-mono text-[10px] tracking-widest text-neutral-500">
              HERE TO HELP
            </span>
          </li>
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-xs tracking-wider text-neutral-500 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-[#050505]/95 backdrop-blur-md md:hidden">
          <ul className="flex flex-col px-5 py-4 sm:px-8">
            <li className="mb-2 flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-red-600" />
              <span className="font-mono text-[10px] tracking-widest text-neutral-500">
                HERE TO HELP
              </span>
            </li>
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-mono text-sm tracking-wider text-neutral-400 transition-colors hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
