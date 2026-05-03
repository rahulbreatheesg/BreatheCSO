import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Quote, Search } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import CSOCard from '../components/CSOCard.jsx'
import CSOLevelCard from '../components/CSOLevelCard.jsx'
import CTABanner from '../components/CTABanner.jsx'
import csos from '../data/csos.js'
import csoLevels from '../data/csoLevels.js'

export default function Network() {
  const [query, setQuery] = useState('')
  const [tag, setTag] = useState('All')
  const [levelFilter, setLevelFilter] = useState('all')

  const tags = useMemo(() => {
    const s = new Set(['All'])
    csos.forEach((c) => c.tags?.forEach((t) => s.add(t)))
    return Array.from(s)
  }, [])

  const visible = csos.filter((c) => {
    const matchesQuery =
      !query ||
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.bio.toLowerCase().includes(query.toLowerCase()) ||
      c.tags?.some((t) => t.toLowerCase().includes(query.toLowerCase()))
    const matchesTag = tag === 'All' || c.tags?.includes(tag)
    const matchesLevel = levelFilter === 'all' || c.level === levelFilter
    return matchesQuery && matchesTag && matchesLevel
  })

  // Group results by level, with most senior (Level 03) at the top.
  const grouped = [...csoLevels]
    .reverse()
    .map((lvl) => ({
      level: lvl,
      profiles: visible.filter((c) => c.level === lvl.id),
    }))
    .filter((g) => g.profiles.length > 0)

  const totalByLevel = useMemo(
    () =>
      Object.fromEntries(
        csoLevels.map((l) => [l.id, csos.filter((c) => c.level === l.id).length])
      ),
    []
  )

  const levelChips = [
    { id: 'all', label: 'All levels', count: csos.length },
    ...[...csoLevels].reverse().map((l) => ({
      id: l.id,
      label: l.tag,
      sub: l.horizon,
      count: totalByLevel[l.id] || 0,
    })),
  ]

  return (
    <>
      <NetworkHero />

      <section className="container-x">
        <div className="flex flex-col gap-5 py-8 border-y border-ink/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div className="relative w-full md:max-w-sm">
              <Search className="h-4 w-4 absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search names, expertise, sectors…"
                className="w-full rounded-full border border-ink/15 bg-white pl-10 pr-4 py-2.5 text-sm placeholder:text-ink-muted focus:outline-none focus:border-forest transition"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {levelChips.map((chip) => {
                const isActive = levelFilter === chip.id
                return (
                  <button
                    key={chip.id}
                    onClick={() => setLevelFilter(chip.id)}
                    className={`group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold transition ${
                      isActive
                        ? 'bg-forest border-forest text-cream shadow-soft'
                        : 'border-ink/15 text-ink-soft hover:border-forest hover:text-forest'
                    }`}
                  >
                    <span>{chip.label}</span>
                    {chip.sub && (
                      <span
                        className={`text-[10px] tracking-wide font-mono ${
                          isActive ? 'text-cream/70' : 'text-ink-muted'
                        }`}
                      >
                        {chip.sub}
                      </span>
                    )}
                    <span
                      className={`inline-flex items-center justify-center min-w-[1.25rem] h-5 px-1.5 rounded-full text-[10px] font-bold ${
                        isActive
                          ? 'bg-cream/15 text-cream'
                          : 'bg-moss-100 text-forest'
                      }`}
                    >
                      {chip.count}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] uppercase tracking-[0.18em] text-ink-muted font-semibold mr-1">
              Expertise
            </span>
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setTag(t)}
                className={`text-xs px-3 py-1.5 rounded-full border transition ${
                  tag === t
                    ? 'bg-moss-100 border-moss-500/40 text-forest'
                    : 'border-ink/10 text-ink-muted hover:border-forest/40 hover:text-forest'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-16 space-y-20">
        {grouped.length === 0 ? (
          <div className="card p-10 text-center">
            <p className="text-ink-soft">
              No leaders match that combination yet - try a broader filter.
            </p>
            <button
              onClick={() => {
                setQuery('')
                setTag('All')
                setLevelFilter('all')
              }}
              className="btn-soft mt-6"
            >
              Reset filters
            </button>
          </div>
        ) : (
          grouped.map(({ level, profiles }) => (
            <LevelSection
              key={level.id}
              level={level}
              profiles={profiles}
              total={totalByLevel[level.id] || 0}
            />
          ))
        )}
      </section>

      <NetworkTestimonials />

      <JoinNetwork />

      <CTABanner
        eyebrow="Need a specific shape of leader?"
        title="Tell us the problem. We will recommend the human."
        description="Our network is small on purpose. Sometimes the right answer is one of the leaders above - sometimes it is someone we know but haven&rsquo;t listed yet."
      />
    </>
  )
}

function LevelSection({ level, profiles, total }) {
  const showing = profiles.length
  return (
    <div id={level.id} className="scroll-mt-24">
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 pb-6 border-b border-ink/10">
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="inline-flex items-center gap-2 rounded-full bg-forest text-cream px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em]">
                {level.tag}
              </span>
              <span className="text-xs font-mono text-moss-700">
                {level.horizon}
              </span>
              <span className="text-xs text-ink-muted">
                {showing} of {total} {total === 1 ? 'leader' : 'leaders'}
              </span>
            </div>
            <h2 className="display-2 mt-4 text-balance">{level.name}</h2>
            <p className="lede mt-3 max-w-3xl text-pretty">{level.pitch}</p>
          </div>
          <Link
            to="/contact"
            state={{ inquiry: level.inquiry }}
            className="btn-soft shrink-0"
          >
            Apply at {level.tag} <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {profiles.map((c, i) => (
          <Reveal key={c.id} delay={(i % 3) * 0.05}>
            <CSOCard cso={c} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}

function NetworkHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-moss-200/60 blur-3xl" />
        <div className="absolute top-32 right-0 h-[22rem] w-[22rem] rounded-full bg-mint-200/70 blur-3xl" />
        <div className="absolute inset-0 grain opacity-30" />
      </div>
      <div className="container-x pt-20 md:pt-28 pb-10">
        <Reveal>
          <span className="eyebrow">CSO Network</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="display-1 mt-6 max-w-4xl text-balance">
            A bench of senior leaders.{' '}
            <span className="italic text-moss-700">
              Each one has done the job before.
            </span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="lede mt-6 max-w-2xl text-pretty">
            We do not run an open marketplace. Every leader on this page has held a senior sustainability role somewhere - and earned the right to walk into yours. Browse, then write to us about who feels closest to the work.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function NetworkTestimonials() {
  const quotes = [
    {
      q: "Breathe Lead's approach revolutionised how we run sustainability. Their senior bench and clear playbook streamlined our ESG processes and reporting - enabling us to make informed decisions, faster.",
      who: 'Karan Virwani',
      role: 'CEO',
      org: 'WeWork',
    },
    {
      q: 'Breathe Lead shows a profound understanding of global best practices, while demonstrating a remarkable willingness to align with clients and adapt to moving targets. I recommend Breathe Lead to any business seeking a committed sustainability partner that excels in both practice and reporting.',
      who: 'Pradeep Lala',
      role: 'CEO',
      org: 'Embassy Services Private Limited',
    },
  ]

  return (
    <section className="bg-bone border-y border-ink/10">
      <div className="container-x section">
        <SectionHeading
          eyebrow="In their words"
          title="What our customers say."
          description="A few words from leaders who have worked with Breathe Lead. We do not pitch case studies in the first call - this is what shows up after a few quarters of work."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {quotes.map((t, i) => (
            <Reveal key={t.who} delay={i * 0.05}>
              <figure className="card p-8 md:p-9 h-full flex flex-col">
                <Quote className="h-7 w-7 text-moss-500" />
                <blockquote className="mt-5 text-ink-soft leading-relaxed text-pretty text-[1.05rem]">
                  "{t.q}"
                </blockquote>
                <figcaption className="mt-auto pt-7 border-t border-ink/10 flex items-center gap-4">
                  <div
                    className="h-12 w-12 rounded-full bg-moss-100 flex items-center justify-center font-display text-lg text-forest shrink-0"
                    aria-hidden
                  >
                    {t.who
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .slice(0, 2)}
                  </div>
                  <div>
                    <div className="font-semibold text-ink">{t.who}</div>
                    <div className="text-sm text-ink-muted">
                      {t.role}, {t.org}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function JoinNetwork() {
  return (
    <section
      id="join"
      className="bg-bone border-y border-ink/10 scroll-mt-24"
    >
      <div className="container-x section">
        <div className="grid gap-10 lg:grid-cols-12 items-end">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Join the network"
              title="Three levels. One bar: someone who has actually done the work."
              description="We slot incoming sustainability leaders into one of three levels - by depth of leadership experience, not by seniority of title. Pick the level that sounds like you, then write to us."
            />
          </div>
          <div className="lg:col-span-5 lg:justify-self-end">
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" state={{ inquiry: 'Join the network - not sure of level' }} className="btn-ghost">
                Not sure which level?
              </Link>
              <a href="mailto:info@breathelead.com" className="btn-soft">
                info@breathelead.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {csoLevels.map((lvl, i) => (
            <Reveal key={lvl.id} delay={i * 0.06}>
              <CSOLevelCard level={lvl} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-ink/10 bg-white p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <p className="text-ink-soft text-sm md:text-base text-pretty max-w-3xl">
            Every applicant has a short, unhurried call with one of our partners. We are looking for judgement and operating instinct, not certifications. You will hear back within a week, even if it is a no.
          </p>
          <Link
            to="/contact"
            state={{ inquiry: 'Join the network - general enquiry' }}
            className="btn-primary shrink-0"
          >
            Enroll as a CSO <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
