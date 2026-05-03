import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Banknote,
  Clock,
  Compass,
  Gauge,
  GraduationCap,
  Layers,
  Scale,
  ShieldCheck,
  Wallet,
  Zap,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import CTABanner from '../components/CTABanner.jsx'
import Accordion from '../components/Accordion.jsx'

export default function WhyFractional() {
  return (
    <>
      <Hero />
      <CostBreakdown />
      <Reasons />
      <Speed />
      <ROIBlock />
      <ObjectionsFAQ />
      <CTABanner
        eyebrow="Make the call"
        title="Get the seniority. Skip the salary."
        description="Tell us where the friction is. We will say honestly whether a fractional lead is the right answer - and what it would cost compared to a full-time hire."
      />
    </>
  )
}

/* ------------------------------- HERO ------------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-moss-200/60 blur-3xl" />
        <div className="absolute top-32 right-0 h-[24rem] w-[24rem] rounded-full bg-mint-200/70 blur-3xl" />
        <div className="absolute inset-0 grain opacity-30" />
      </div>
      <div className="container-x pt-20 md:pt-28 pb-14">
        <Reveal>
          <span className="eyebrow">Why a Fractional CSO?</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="display-1 mt-6 max-w-5xl text-balance">
            All the seniority of a CSO.{' '}
            <span className="italic text-moss-700">
              About half the cost.
            </span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="lede mt-7 max-w-2xl text-pretty">
            Most companies do not need a full-time chief sustainability officer. They need senior judgement, owned outcomes, and a person who can look the board in the eye - without paying for five days a week of executive cost. A fractional model gives you exactly that, at roughly <strong>40 - 60% of the loaded cost of a full-time hire</strong>.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link to="/contact" className="btn-primary">
              See if this fits <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link to="/fractional" className="btn-ghost">
              First, what is a Fractional CSO?
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------------------------- COST BREAKDOWN ----------------------------- */

function CostBreakdown() {
  const fullTime = [
    { label: 'Salary (senior)', amount: '$160k - $260k' },
    { label: 'Bonus + equity', amount: '15 - 30% of salary' },
    { label: 'Benefits + payroll', amount: '20 - 25% loaded' },
    { label: 'Search fee', amount: '25 - 33% of first-year comp' },
    { label: 'Onboarding lag', amount: '3 - 6 months' },
    { label: 'Severance risk', amount: '3 - 6 months' },
  ]
  const fractional = [
    { label: 'Monthly retainer', amount: 'Low five-figures (USD), scales with level' },
    { label: 'Ramp time', amount: 'Days, not months' },
    { label: 'Search', amount: 'None - we name the CSO in week one' },
    { label: 'Equity / bonus', amount: 'None' },
    { label: 'Severance', amount: 'None - notice period only' },
    { label: 'Cadence', amount: 'Sized to the engagement, not pre-set' },
  ]

  return (
    <section className="bg-bone border-y border-ink/10">
      <div className="container-x section">
        <SectionHeading
          eyebrow="The cost case, plainly"
          title="What you pay for. What you skip."
          description="The salary is the visible number. The hidden one - search, equity, severance, the wasted onboarding months - is usually larger. Fractional dodges most of it."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="card p-7 md:p-8 h-full">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-bone text-ink-soft flex items-center justify-center">
                  <Banknote className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-[0.18em] text-ink-muted font-semibold">
                    Full-time CSO
                  </span>
                  <h3 className="font-display text-xl text-ink leading-tight">
                    What you actually pay
                  </h3>
                </div>
              </div>
              <ul className="mt-7 divide-y divide-ink/10">
                {fullTime.map((row) => (
                  <li
                    key={row.label}
                    className="flex items-start justify-between gap-6 py-3.5 text-sm"
                  >
                    <span className="text-ink-soft">{row.label}</span>
                    <span className="text-ink font-semibold text-right shrink-0">
                      {row.amount}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-xs text-ink-muted leading-relaxed">
                US benchmark ranges. Indian and EU markets sit lower in absolute terms but the structure is the same.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="card p-7 md:p-8 h-full bg-forest text-cream border-forest relative overflow-hidden">
              <div className="absolute -top-16 -right-16 h-44 w-44 rounded-full bg-moss-500/30 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-cream/10 text-moss-300 flex items-center justify-center">
                    <Wallet className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-[0.18em] text-moss-300 font-semibold">
                      Fractional CSO
                    </span>
                    <h3 className="font-display text-xl text-cream leading-tight">
                      What you pay instead
                    </h3>
                  </div>
                </div>
                <ul className="mt-7 divide-y divide-cream/15">
                  {fractional.map((row) => (
                    <li
                      key={row.label}
                      className="flex items-start justify-between gap-6 py-3.5 text-sm"
                    >
                      <span className="text-cream/80">{row.label}</span>
                      <span className="text-cream font-semibold text-right shrink-0">
                        {row.amount}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-7 text-xs text-cream/60 leading-relaxed">
                  Net effect: roughly half the loaded cost of a full-time hire, with most of the seniority - and ten months less waiting.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* The headline savings strip */}
        <Reveal delay={0.1}>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            <SavingsTile
              k="40 - 60%"
              v="lower loaded cost than a full-time CSO at the same level of seniority."
            />
            <SavingsTile
              k="0"
              v="search fees, equity grants, or onboarding lag. The CSO is named in week one."
            />
            <SavingsTile
              k="9+ months"
              v="of executive search avoided - that is by itself a six-figure saving for many companies."
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function SavingsTile({ k, v }) {
  return (
    <div className="rounded-3xl border border-moss-500/30 bg-moss-50 p-7">
      <div className="font-display text-4xl text-forest">{k}</div>
      <p className="mt-3 text-ink-soft text-sm leading-relaxed text-pretty">
        {v}
      </p>
    </div>
  )
}

/* ------------------------------ REASONS ------------------------------ */

function Reasons() {
  const reasons = [
    {
      icon: <Wallet className="h-5 w-5" />,
      title: 'Save real money',
      body:
        'Pay for the senior brain, not the salary, equity, search fee, severance and onboarding lag that come with a full-time hire. Most companies see net savings of 40 - 60%.',
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: 'Move fast',
      body:
        'A full-time CSO search takes nine to twelve months. A Breathe Lead CSO is named in your first week, and useful inside the first month. The roadmap does not wait.',
    },
    {
      icon: <Compass className="h-5 w-5" />,
      title: 'Seniority on demand',
      body:
        'You get someone who has already led an ESG function, sat across from a board, and answered hard investor questions. Junior consultants cannot manufacture that experience.',
    },
    {
      icon: <Gauge className="h-5 w-5" />,
      title: 'Right-sized cadence',
      body:
        'Heavier during a CSRD crunch or a board run-up, lighter once the work is in motion. The engagement flexes; you do not pay for fixed hours nobody needs.',
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: 'No long-term lock-in',
      body:
        'Notice-period exit, no severance, no equity overhang. If the fit is wrong, you find out in weeks - not after eighteen months and a difficult conversation.',
    },
    {
      icon: <GraduationCap className="h-5 w-5" />,
      title: 'Build your in-house team',
      body:
        'A good fractional CSO leaves the function stronger than they found it. They mentor an internal lead, set up the rhythm, and quietly make themselves smaller as the team grows.',
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: 'Strategy and execution, together',
      body:
        'Consultants ship slides; in-house leaders run things. A fractional CSO does both - writes the plan and is in the room when it gets executed.',
    },
    {
      icon: <Scale className="h-5 w-5" />,
      title: 'Honest, framework-aware reporting',
      body:
        'CSRD, BRSR, IFRS S1/S2, GRI, TCFD. Numbers built once, used everywhere, and defensible to an auditor. No greenwashing-by-omission, no template-led copy.',
    },
  ]
  return (
    <section className="container-x section">
      <SectionHeading
        eyebrow="Eight reasons"
        title="Where the value actually shows up."
        description="Cost is the loudest reason, but rarely the only one. Most clients tell us the speed and seniority matter just as much, once the fractional model is up and running."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {reasons.map((r, i) => (
          <Reveal key={r.title} delay={(i % 4) * 0.05}>
            <div className="card card-hover p-6 h-full">
              <div className="h-10 w-10 rounded-xl bg-moss-100 text-forest flex items-center justify-center">
                {r.icon}
              </div>
              <h3 className="mt-5 font-display text-lg">{r.title}</h3>
              <p className="mt-3 text-ink-soft text-sm leading-relaxed text-pretty">
                {r.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ------------------------------- SPEED ------------------------------- */

function Speed() {
  const steps = [
    {
      label: 'Full-time CSO',
      sub: 'Hiring path',
      tone: 'slow',
      timeline: [
        { week: '0 - 4', text: 'Job spec, briefing, agency selection.' },
        { week: '4 - 16', text: 'Search, screening, board interviews.' },
        { week: '16 - 28', text: 'Offer, negotiation, notice period.' },
        { week: '28 - 36', text: 'Onboarding, handovers, first cycle.' },
        { week: '36+', text: 'Productive work begins.' },
      ],
    },
    {
      label: 'Fractional CSO',
      sub: 'Engagement path',
      tone: 'fast',
      timeline: [
        { week: '0', text: 'Scoping call. Friction described.' },
        { week: '1', text: 'Shape document, named CSO, agreed cadence.' },
        { week: '2', text: 'CSO embeds in leadership rhythm.' },
        { week: '3 - 4', text: 'First decisions made. Roadmap drafted.' },
        { week: '4 - 8', text: 'Productive work, board-ready outputs.' },
      ],
    },
  ]
  return (
    <section className="bg-forest text-cream relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-10 pointer-events-none" />
      <div className="absolute -top-32 -right-20 h-80 w-80 rounded-full bg-moss-500/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-moss-700/40 blur-3xl pointer-events-none" />

      <div className="container-x section relative">
        <SectionHeading
          eyebrow={<span className="!text-moss-300">The speed difference</span>}
          title={
            <span className="text-cream">
              Eight weeks vs nine months. Compounded over a CSRD deadline.
            </span>
          }
          description={
            <span className="text-cream/80">
              The biggest hidden cost of a full-time CSO hire is not the salary - it is the months of nothing-happening while the search runs. Below is what each path looks like, week by week.
            </span>
          }
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {steps.map((path) => (
            <Reveal key={path.label}>
              <div
                className={`rounded-3xl p-7 md:p-8 h-full ${
                  path.tone === 'fast'
                    ? 'bg-cream/10 border border-cream/15 backdrop-blur-sm'
                    : 'bg-cream/5 border border-cream/10 opacity-90'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Clock
                    className={`h-5 w-5 ${
                      path.tone === 'fast' ? 'text-moss-300' : 'text-cream/60'
                    }`}
                  />
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-cream/60 font-semibold">
                      {path.sub}
                    </div>
                    <h3 className="font-display text-2xl text-cream leading-tight">
                      {path.label}
                    </h3>
                  </div>
                </div>
                <ol className="mt-7 space-y-4">
                  {path.timeline.map((t) => (
                    <li key={t.week} className="flex gap-4 items-start">
                      <span
                        className={`shrink-0 inline-flex items-center justify-center min-w-[3.5rem] h-7 px-2 rounded-full text-[11px] font-mono font-semibold ${
                          path.tone === 'fast'
                            ? 'bg-moss-500/30 text-moss-300'
                            : 'bg-cream/10 text-cream/70'
                        }`}
                      >
                        Wk {t.week}
                      </span>
                      <span className="text-cream/90 leading-relaxed text-sm">
                        {t.text}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* -------------------------------- ROI -------------------------------- */

function ROIBlock() {
  const points = [
    {
      title: 'Avoided search budget',
      detail:
        'A retained executive search for a CSO typically runs at 25 - 33% of first-year compensation. On a $200k salary, that is $50 - 66k of fee, paid before anyone has done any work.',
    },
    {
      title: 'Faster regulatory readiness',
      detail:
        'Companies starting CSRD or BRSR work nine months early routinely report saving the equivalent of one to two senior FTEs in last-minute panic spend.',
    },
    {
      title: 'Cheaper capital',
      detail:
        'Banks and investors increasingly price climate risk. A credible transition plan - the kind a senior fractional CSO can write in eight weeks - has shown up in tighter loan margins for several of our clients.',
    },
    {
      title: 'No mis-hire downside',
      detail:
        'The cost of a wrong CSO hire (severance, search re-do, lost time) often exceeds two years of fractional fees. Fractional engagements end on a notice period if the fit is off.',
    },
  ]
  return (
    <section className="container-x section">
      <SectionHeading
        eyebrow="Where the savings really land"
        title="The line items that rarely make it onto the salary spreadsheet."
        description="Cost-versus-cost is usually how this gets pitched. The harder, more useful comparison is cost-versus-risk and cost-versus-time."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {points.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.05}>
            <div className="card card-hover p-7 h-full">
              <h3 className="font-display text-xl">{p.title}</h3>
              <p className="mt-3 text-ink-soft leading-relaxed text-pretty">
                {p.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ----------------------------- OBJECTIONS ----------------------------- */

function ObjectionsFAQ() {
  const items = [
    {
      q: '"Will a part-time leader actually be invested in our company?"',
      a: (
        <>
          A fractional CSO carries two or three engagements at most - not seventeen clients. They are named in your org, attend the leadership meetings that matter, and are accountable for the same outcomes as a full-time hire. Investment shows up in commitment, not in hours billed.
        </>
      ),
    },
    {
      q: '"Will the cost saving cost us in quality?"',
      a: (
        <>
          The saving is structural, not a discount on talent. Fractional leaders work with multiple companies, so their effective day-rate is competitive without anyone earning less. You are sharing a senior brain, not buying a cheaper one.
        </>
      ),
    },
    {
      q: '"What if we eventually want a full-time CSO?"',
      a: (
        <>
          Most clients eventually do - and we help with the transition. A fractional engagement is often the cleanest way to scope what a future full-time hire should actually own, before you write the job spec.
        </>
      ),
    },
    {
      q: '"How is this different from a consultant?"',
      a: (
        <>
          A consultant orbits a company; a fractional CSO joins it. Same accountability as a full-time leader, longer time horizon than a project, and no slide deck masquerading as strategy. There is a deeper answer on the <Link to="/fractional" className="text-forest underline underline-offset-2">What is a Fractional CSO?</Link> page.
        </>
      ),
    },
  ]
  return (
    <section className="bg-bone border-y border-ink/10">
      <div className="container-x section">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Fair questions"
              title="Objections we hear, answered honestly."
              description="If a fractional setup did not have trade-offs we would worry. These are the ones that come up most - here is how we think about them."
            />
            <Link to="/contact" className="btn-soft mt-8">
              Ask us anything else <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-8">
            <Reveal>
              <Accordion items={items} defaultOpenIndex={0} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
