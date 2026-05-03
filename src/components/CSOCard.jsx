import { Linkedin, ArrowUpRight } from 'lucide-react'
import csoLevels from '../data/csoLevels.js'

export default function CSOCard({ cso }) {
  const initials = cso.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  const level = cso.level
    ? csoLevels.find((l) => l.id === cso.level)
    : null

  return (
    <article className="group card card-hover overflow-hidden flex flex-col h-full">
      <div className="relative aspect-[4/5] bg-moss-100 overflow-hidden">
        {cso.photo ? (
          <img
            src={cso.photo}
            alt={`${cso.name} - ${cso.title}`}
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-moss-200 to-moss-400">
            <span className="font-display text-7xl text-forest/60">
              {initials}
            </span>
          </div>
        )}
        {cso.location && (
          <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[11px] font-semibold text-ink-soft tracking-wide">
            {cso.location}
          </span>
        )}
        {level && (
          <span
            className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-forest/90 backdrop-blur px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-cream"
            title={`${level.name} · ${level.horizon}`}
          >
            {level.tag}
          </span>
        )}
      </div>

      <div className="flex flex-col h-full p-6 md:p-7">
        <h3 className="font-display text-xl text-ink leading-tight">
          {cso.name}
        </h3>
        <p className="text-sm font-semibold text-moss-700 mt-1">{cso.title}</p>

        <p className="mt-4 text-ink-soft text-sm leading-relaxed text-pretty">
          {cso.bio}
        </p>

        {cso.tags?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {cso.tags.map((t) => (
              <span
                key={t}
                className="text-[11px] px-2.5 py-1 rounded-full bg-bone text-ink-soft border border-ink/10"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto pt-5 border-t border-ink/10 flex items-center justify-between gap-3">
          {cso.linkedin ? (
            <a
              href={cso.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest hover:text-moss-700"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          ) : (
            <span className="text-sm text-ink-muted">Profile pending</span>
          )}
          <a
            href={cso.profile || cso.linkedin || '#'}
            target={cso.linkedin ? '_blank' : undefined}
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm font-semibold text-ink-soft group-hover:text-forest transition"
          >
            View profile <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  )
}
