import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Leaf,
  LineChart,
  Quote,
  ShieldCheck,
  Sprout,
  Users,
  Wallet,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import CSOCard from '../components/CSOCard.jsx'
import csos from '../data/csos.js'

export default function Home() {
  return (
    <>
      <Hero />
      <Offering />
      <People />
      <VoicesAndCTA />
    </>
  )
}

/* ------------------------------ 1. HERO ------------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-32 h-[30rem] w-[30rem] rounded-full bg-moss-200/70 blur-3xl" />
        <div className="absolute top-32 -right-32 h-[26rem] w-[26rem] rounded-full bg-mint-200/70 blur-3xl" />
        <div className="absolute inset-0 grain opacity-30" />
      </div>

      <div className="container-x pt-14 md:pt-20 pb-20 md:pb-24">
        <Reveal>
          <span className="eyebrow">Fractional CSO</span>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="display-1 mt-6 max-w-5xl text-balance">
            Sustainability leadership,{' '}
            <span className="italic text-moss-700">without the overhead.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="lede mt-7 max-w-2xl text-pretty">
            Senior CSOs, embedded part-time, paid by the result. We slot into companies that need the judgement of a chief sustainability officer - minus the long search, the corner office, and the slide-deck theatre.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link to="/contact" className="btn-primary">
              Start a conversation <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link to="/fractional" className="btn-ghost">
              What is a Fractional CSO?
            </Link>
            <Link
              to="/contact"
              state={{ inquiry: 'Join the network - not sure of level' }}
              className="text-sm font-semibold text-forest hover:text-moss-700 link-underline ml-1 inline-flex items-center gap-1"
            >
              Or enroll as a CSO <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Reveal>

        {/* Stats inline, integrated into hero so this stays one section */}
        <Reveal delay={0.25}>
          <div className="mt-16 grid gap-5 sm:grid-cols-3">
            {[
              {
                k: '40 - 60% less',
                v: 'than the loaded cost of a full-time CSO at the same seniority. No severance, equity, or search fee.',
                icon: <Wallet className="h-5 w-5" />,
              },
              {
                k: '3 levels',
                v: 'of fractional CSO seniority - matched to the engagement, not bolted on.',
                icon: <Sprout className="h-5 w-5" />,
              },
              {
                k: 'No fluff',
                v: 'on calls, in decks, or in disclosures. Numbers we can defend.',
                icon: <ShieldCheck className="h-5 w-5" />,
              },
            ].map((s) => (
              <div key={s.k} className="card p-6 hover:border-moss-500/40 transition-colors">
                <div className="flex items-center gap-2 text-moss-700">
                  {s.icon}
                  <span className="font-display text-lg text-ink">{s.k}</span>
                </div>
                <p className="mt-2 text-ink-soft text-sm leading-relaxed">
                  {s.v}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Logos strip integrated into hero block */}
        <Reveal delay={0.3}>
          <div className="mt-14 pt-8 border-t border-ink/10 flex flex-wrap items-center justify-between gap-x-10 gap-y-4">
            <span className="text-xs uppercase tracking-[0.18em] text-ink-muted shrink-0 font-semibold">
              Quietly working with
            </span>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink-soft">
              {[
                'Mid-market manufacturer',
                'Series-C climate startup',
                'Listed real-estate group',
                'Family-owned FMCG',
                'Hospitality chain',
              ].map((i) => (
                <span key={i} className="font-medium">{i}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------------------------- 2. OFFERING ----------------------------- */

function Offering() {
  return (
    <section className="bg-bone border-y border-ink/10">
      <div className="container-x section">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="The work"
              title={
                <>
                  A CSO at the table,{' '}
                  <span className="italic text-moss-700">just not yours fully.</span>
                </>
              }
              description="A Fractional CSO walks into your business, takes ownership of the function, and leaves it stronger than a consultant ever could. Embedded part-time, sized to the work. Long enough to build, short enough to stay sharp across a small portfolio."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/fractional" className="btn-soft">
                Read the full explainer <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/why-fractional" className="btn-ghost">
                Why hire one?
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid gap-5 sm:grid-cols-2">
            {[
              {
                title: 'Embedded, not advisory',
                body: 'A name in your org chart, an inbox in your domain. We run things, not just slide-show them.',
                icon: <Users className="h-5 w-5" />,
              },
              {
                title: 'Strategy that ships',
                body: 'Roadmaps that survive Monday morning - written with your COO, CFO and the team that does the work.',
                icon: <LineChart className="h-5 w-5" />,
              },
              {
                title: 'Disclosure with a spine',
                body: 'CSRD, BRSR, GRI, IFRS S2 handled, but not worshipped. Numbers we can defend in a room.',
                icon: <ShieldCheck className="h-5 w-5" />,
              },
              {
                title: 'Net zero, in decimals',
                body: 'Hotspots, levers, capex, milestones. Less ambition statement, more spreadsheet you trust.',
                icon: <Leaf className="h-5 w-5" />,
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05}>
                <div className="card card-hover p-6 h-full">
                  <div className="flex items-center gap-2 text-moss-700">
                    {c.icon}
                    <span className="text-xs uppercase tracking-[0.16em] font-semibold">
                      Pillar 0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-xl">{c.title}</h3>
                  <p className="mt-2 text-ink-soft text-sm leading-relaxed">
                    {c.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------- 3. PEOPLE ------------------------------ */

function People() {
  const featured = csos.slice(0, 3)
  return (
    <section className="container-x section">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <SectionHeading
          eyebrow="The people"
          title="Senior leaders who would rather build than pitch."
          description="Our network is small on purpose. Each leader has owned a sustainability function before - usually for a long stretch - and now embeds part-time across two or three companies."
        />
        <div className="flex flex-wrap gap-3 shrink-0">
          <Link to="/network" className="btn-ghost">
            See the network <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            state={{ inquiry: 'Join the network - not sure of level' }}
            className="btn-soft"
          >
            Enroll as a CSO
          </Link>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((c, i) => (
          <Reveal key={c.id} delay={i * 0.05}>
            <CSOCard cso={c} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {[
            { tag: 'Level 01', name: 'Contributor CSO', span: '1 - 5 yrs' },
            { tag: 'Level 02', name: 'Senior Fractional CSO', span: '6 - 10 yrs' },
            { tag: 'Level 03', name: 'Lead / Executive CSO', span: '10+ yrs' },
          ].map((lvl) => (
            <Link
              key={lvl.tag}
              to="/network#join"
              className="group rounded-2xl border border-ink/10 bg-white p-5 flex items-center justify-between hover:border-moss-500/40 hover:shadow-soft transition"
            >
              <div>
                <span className="font-mono text-[11px] text-moss-700 uppercase tracking-[0.18em]">
                  {lvl.tag}
                </span>
                <div className="font-display text-lg text-ink mt-1">{lvl.name}</div>
                <div className="text-xs text-ink-muted mt-0.5">{lvl.span}</div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-ink-muted group-hover:text-forest transition" />
            </Link>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

/* ------------------------- 4. VOICES + CTA ---------------------------- */

function VoicesAndCTA() {
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
    <section className="relative overflow-hidden bg-forest text-cream">
      <div className="absolute inset-0 grain opacity-10 pointer-events-none" />
      <div className="absolute -top-32 -right-20 h-80 w-80 rounded-full bg-moss-500/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-moss-700/40 blur-3xl pointer-events-none" />

      <div className="container-x section relative">
        <SectionHeading
          eyebrow={<span className="!text-moss-300">In their words</span>}
          title={
            <span className="text-cream">
              What our customers say.
            </span>
          }
          description={
            <span className="text-cream/80">
              A few words from leaders who have worked with Breathe Lead over the years.
            </span>
          }
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {quotes.map((t, i) => (
            <Reveal key={t.who} delay={i * 0.05}>
              <figure className="rounded-3xl border border-cream/15 bg-cream/5 p-8 md:p-9 h-full backdrop-blur-sm flex flex-col">
                <Quote className="h-7 w-7 text-moss-300" />
                <blockquote className="mt-5 text-pretty leading-relaxed text-cream/90 text-[1.05rem]">
                  "{t.q}"
                </blockquote>
                <figcaption className="mt-auto pt-7 border-t border-cream/15 flex items-center gap-4">
                  <div
                    className="h-12 w-12 rounded-full bg-cream/10 flex items-center justify-center font-display text-lg text-moss-300 shrink-0"
                    aria-hidden
                  >
                    {t.who
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .slice(0, 2)}
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold text-cream">{t.who}</div>
                    <div className="text-cream/70">
                      {t.role}, {t.org}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-16 rounded-[2rem] bg-cream/10 border border-cream/15 backdrop-blur-sm p-8 md:p-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <span className="eyebrow !text-moss-300">
                Next step
              </span>
              <h3 className="display-2 mt-4 text-balance text-cream">
                A CSO at the table, before the next board meeting.
              </h3>
              <p className="mt-4 text-cream/80 lede">
                Tell us where the friction is. We will tell you whether a fractional lead actually solves it - and if not, who might.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="btn bg-cream text-forest hover:bg-moss-100">
                Start the conversation <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/fractional" className="btn border border-cream/30 text-cream hover:bg-cream/10">
                Read the FAQ
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
