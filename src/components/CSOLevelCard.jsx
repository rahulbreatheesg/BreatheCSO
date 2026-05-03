import { Link } from 'react-router-dom'
import { ArrowUpRight, Check } from 'lucide-react'

export default function CSOLevelCard({ level }) {
  const featured = level.featured
  return (
    <article
      className={`group relative h-full rounded-3xl p-7 md:p-8 transition-all duration-300 ${
        featured
          ? 'bg-forest text-cream shadow-lift'
          : 'bg-white border border-ink/10 hover:border-moss-500/50 hover:-translate-y-1 hover:shadow-soft'
      }`}
    >
      {featured && (
        <span className="absolute -top-3 left-7 inline-flex items-center gap-1 rounded-full bg-moss-300 text-forest text-[10px] uppercase tracking-[0.18em] font-semibold px-3 py-1">
          Most common
        </span>
      )}

      <div className="flex items-center justify-between">
        <span
          className={`text-xs uppercase tracking-[0.18em] font-mono ${
            featured ? 'text-moss-300' : 'text-moss-700'
          }`}
        >
          {level.tag}
        </span>
        <span
          className={`text-xs ${featured ? 'text-cream/70' : 'text-ink-muted'}`}
        >
          {level.horizon}
        </span>
      </div>

      <h3
        className={`mt-5 font-display text-2xl ${
          featured ? 'text-cream' : 'text-ink'
        }`}
      >
        {level.name}
      </h3>

      <p
        className={`mt-3 leading-relaxed text-pretty ${
          featured ? 'text-cream/85' : 'text-ink-soft'
        }`}
      >
        {level.pitch}
      </p>

      <ul className="mt-6 space-y-3">
        {level.fits.map((f) => (
          <li key={f} className="flex gap-3 items-start">
            <Check
              className={`h-4 w-4 mt-1 shrink-0 ${
                featured ? 'text-moss-300' : 'text-moss-600'
              }`}
            />
            <span
              className={`text-sm leading-relaxed ${
                featured ? 'text-cream/85' : 'text-ink-soft'
              }`}
            >
              {f}
            </span>
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        state={{ inquiry: level.inquiry }}
        className={`mt-8 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition ${
          featured
            ? 'bg-cream text-forest hover:bg-moss-100'
            : 'bg-forest text-cream hover:bg-moss-700'
        }`}
      >
        Apply at this level <ArrowUpRight className="h-4 w-4" />
      </Link>
    </article>
  )
}
