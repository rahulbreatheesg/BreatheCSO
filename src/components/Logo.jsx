import { Link } from 'react-router-dom'

export default function Logo({ light = false, className = '' }) {
  return (
    <Link
      to="/"
      aria-label="Breathe Lead - Fractional CSO Services"
      className={`inline-flex items-center gap-3 group shrink-0 ${className}`}
    >
      <img
        src="/brand/breathe-lead-mark.png"
        alt=""
        width="40"
        height="40"
        aria-hidden="true"
        className="h-9 w-9 md:h-10 md:w-10 select-none transition-transform duration-500 group-hover:-translate-y-0.5"
        draggable={false}
      />

      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-semibold text-[1.35rem] md:text-[1.55rem] tracking-tightish transition-colors ${
            light ? 'text-cream' : 'text-ink'
          }`}
        >
          Breathe Lead
        </span>
        <span
          className={`hidden sm:inline-block mt-1.5 text-[10px] md:text-[11px] uppercase tracking-[0.22em] font-semibold ${
            light ? 'text-moss-300/90' : 'text-moss-700'
          }`}
        >
          Fractional CSO Service
        </span>
      </span>
    </Link>
  )
}
