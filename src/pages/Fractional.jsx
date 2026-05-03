import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Briefcase,
  Building2,
  Check,
  Clock,
  Compass,
  Layers,
  Minus,
  Sparkles,
  X,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import CTABanner from '../components/CTABanner.jsx'
import Accordion from '../components/Accordion.jsx'

export default function Fractional() {
  return (
    <>
      <Hero />
      <WhatItIs />
      <HowItWorks />
      <Comparison />
      <WhenToHire />
      <FAQ />
      <CTABanner
        eyebrow="Still on the fence?"
        title="A 30-minute call costs nothing and decides most of it."
        description="We will tell you whether a fractional lead is the right answer, a different shape is, or none at all. The first conversation is genuinely free of pitch."
      />
    </>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-moss-200/60 blur-3xl" />
        <div className="absolute top-32 right-0 h-[24rem] w-[24rem] rounded-full bg-mint-200/70 blur-3xl" />
        <div className="absolute inset-0 grain opacity-30" />
      </div>
      <div className="container-x pt-20 md:pt-28 pb-12">
        <Reveal>
          <span className="eyebrow">What is a Fractional CSO?</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="display-1 mt-6 max-w-5xl text-balance">
            A senior sustainability operator,{' '}
            <span className="italic text-moss-700">without the full-time commitment.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="lede mt-7 max-w-2xl">
            A Fractional CSO is exactly what the words suggest: a Chief Sustainability Officer who is not full-time at your company, but acts like one for the time they are. Real ownership, real accountability, real internal email - just on a slimmer calendar.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link to="/contact" className="btn-primary">
              Talk to us about a fit <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link to="/why-fractional" className="btn-ghost">
              Why a fractional CSO?
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function WhatItIs() {
  const points = [
    {
      icon: <Briefcase className="h-5 w-5" />,
      title: 'Embedded, not advisory',
      body:
        'A name on the org chart, an inbox in your domain, a seat at the leadership table. Not a vendor. A colleague who happens to be part-time.',
    },
    {
      icon: <Compass className="h-5 w-5" />,
      title: 'Senior, by definition',
      body:
        'Someone who has already led an ESG or sustainability function before, usually for a long stretch. Judgement is the product.',
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: 'Right-sized to the work',
      body:
        'Embedded part-time, scaled up during a regulatory crunch, dialled down once the work has landed. The cadence fits the engagement, not the other way round.',
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: 'Strategy and execution',
      body:
        'They write the roadmap, but they also pick up the phone. The line between strategy and operations is mostly fictional anyway.',
    },
  ]
  return (
    <section className="container-x section">
      <div className="grid gap-12 lg:grid-cols-12 items-start">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Defined, briefly"
            title="The clearest definition we can offer."
            description="A Fractional CSO is a senior sustainability leader who joins a company on a part-time, ongoing basis and owns the function end-to-end during that time. They are accountable for outcomes, not deliverables - and the cadence is sized to the engagement, not pre-set."
          />
          <p className="lede mt-6 text-pretty">
            Some companies call them Fractional Chief Sustainability Officers. Some call them Heads of ESG-on-Loan. We just call them senior leaders, sized to your business.
          </p>
        </div>
        <div className="lg:col-span-7 grid gap-5 sm:grid-cols-2">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <div className="card card-hover p-6 h-full">
                <div className="h-10 w-10 rounded-xl bg-moss-100 text-forest flex items-center justify-center">
                  {p.icon}
                </div>
                <h3 className="mt-5 font-display text-lg">{p.title}</h3>
                <p className="mt-2 text-ink-soft text-sm leading-relaxed">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    {
      n: '01',
      t: 'A scoping call',
      d: 'Ninety minutes. We listen for friction, ambition, and what the next twelve months actually look like.',
    },
    {
      n: '02',
      t: 'A short shape doc',
      d: 'Named CSO, scope, cadence, what the first 90 days will produce. No 60-page proposal theatre.',
    },
    {
      n: '03',
      t: 'Embed and run',
      d: 'The CSO joins the leadership rhythm - board prep, ops reviews, internal teams - and the work begins.',
    },
    {
      n: '04',
      t: 'Hand-over, not exit',
      d: 'As your in-house team grows, our presence quietly tapers. The point is to be needed, then unneeded.',
    },
  ]
  return (
    <section className="bg-bone border-y border-ink/10">
      <div className="container-x section">
        <SectionHeading
          eyebrow="How it actually works"
          title="From first call to hand-over, in four moves."
          description="Engagements vary, but the underlying choreography is consistent. None of it includes a 60-slide kickoff."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <div className="card card-hover p-6 h-full">
                <span className="font-mono text-xs text-moss-700">{s.n}</span>
                <h3 className="mt-3 font-display text-xl">{s.t}</h3>
                <p className="mt-2 text-ink-soft text-sm leading-relaxed">
                  {s.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Comparison() {
  const rows = [
    {
      label: 'Accountability',
      consultant: { tone: 'no', text: 'Project-bound, deliverables.' },
      fractional: { tone: 'yes', text: 'Owns the function, end-to-end.' },
      fulltime: { tone: 'yes', text: 'Owns the function, full-time.' },
    },
    {
      label: 'Time at your company',
      consultant: { tone: 'mid', text: 'Defined sprint, then gone.' },
      fractional: { tone: 'yes', text: '6 - 24 months, embedded part-time.' },
      fulltime: { tone: 'yes', text: 'Permanent, full-time.' },
    },
    {
      label: 'Speed to value',
      consultant: { tone: 'mid', text: 'Slower; ramps a project team.' },
      fractional: { tone: 'yes', text: 'Days to weeks. Senior from day one.' },
      fulltime: { tone: 'no', text: 'Months of search + onboarding.' },
    },
    {
      label: 'Cost shape',
      consultant: { tone: 'no', text: 'Fixed fee, often six figures per project.' },
      fractional: { tone: 'yes', text: 'Monthly retainer, scaled to days.' },
      fulltime: { tone: 'no', text: 'Salary, equity, benefits, search fee.' },
    },
    {
      label: 'Exit',
      consultant: { tone: 'mid', text: 'Leaves a deck. You operate it.' },
      fractional: { tone: 'yes', text: 'Hand-over to in-house team.' },
      fulltime: { tone: 'mid', text: 'Notice period, replacement search.' },
    },
  ]
  const dot = (tone) =>
    tone === 'yes'
      ? 'bg-moss-500'
      : tone === 'mid'
      ? 'bg-moss-200 ring-2 ring-moss-300'
      : 'bg-ink/25'

  return (
    <section className="container-x section">
      <SectionHeading
        eyebrow="Vs. the alternatives"
        title="Where a Fractional CSO actually beats the other two options."
        description="There is no universal best answer. There is a best answer for the next twelve months. This is the honest comparison we walk clients through."
      />

      <Reveal>
        <div className="mt-12 overflow-x-auto rounded-3xl border border-ink/10 bg-white shadow-soft">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-bone text-left">
                <th className="px-6 py-4 font-semibold text-ink-soft text-xs uppercase tracking-[0.16em]">
                  Dimension
                </th>
                <th className="px-6 py-4 font-semibold text-ink-soft text-xs uppercase tracking-[0.16em]">
                  Consultant
                </th>
                <th className="px-6 py-4 font-semibold text-forest text-xs uppercase tracking-[0.16em] bg-moss-50">
                  Fractional CSO
                </th>
                <th className="px-6 py-4 font-semibold text-ink-soft text-xs uppercase tracking-[0.16em]">
                  Full-time CSO
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/10">
              {rows.map((r) => (
                <tr key={r.label} className="align-top">
                  <td className="px-6 py-5 font-display text-base text-ink">
                    {r.label}
                  </td>
                  {[r.consultant, r.fractional, r.fulltime].map((c, i) => (
                    <td
                      key={i}
                      className={`px-6 py-5 ${i === 1 ? 'bg-moss-50/60' : ''}`}
                    >
                      <div className="flex gap-3 items-start">
                        <span
                          className={`mt-1.5 h-2 w-2 rounded-full shrink-0 ${dot(c.tone)}`}
                        />
                        <span className="text-ink-soft leading-relaxed">
                          {c.text}
                        </span>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </section>
  )
}

function WhenToHire() {
  const yes = [
    'Your board has started asking sharper sustainability questions.',
    'You are facing a CSRD, BRSR or IFRS S2 deadline within 18 months.',
    'Your existing ESG owner is a senior IC who needs cover, not replacement.',
    'You have outgrown advisory engagements but a full-time CSO feels heavy.',
    'A lender, customer or investor wants a credible transition plan.',
    'Your sustainability program drifts whenever the CFO is busy.',
  ]
  const no = [
    'You need a deck for next week and that is it.',
    'You want a junior body to fill in templates.',
    'There is no executive sponsor inside the company.',
    'Sustainability is, candidly, a marketing exercise here.',
  ]
  return (
    <section className="bg-bone border-y border-ink/10">
      <div className="container-x section">
        <SectionHeading
          eyebrow="When this fits"
          title="A short test, before the call."
          description="We are not built for everyone. These two columns are roughly how we triage incoming conversations."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="card p-7 md:p-8 h-full border-moss-500/30">
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-full bg-moss-100 text-forest flex items-center justify-center">
                  <Check className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl">A good fit if...</h3>
              </div>
              <ul className="mt-6 space-y-4">
                {yes.map((y) => (
                  <li key={y} className="flex gap-3 items-start">
                    <Check className="h-4 w-4 mt-1 text-moss-600 shrink-0" />
                    <span className="text-ink-soft leading-relaxed">{y}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="card p-7 md:p-8 h-full">
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-full bg-bone text-ink-soft flex items-center justify-center">
                  <X className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl">Not a fit if...</h3>
              </div>
              <ul className="mt-6 space-y-4">
                {no.map((n) => (
                  <li key={n} className="flex gap-3 items-start">
                    <Minus className="h-4 w-4 mt-1 text-ink-muted shrink-0" />
                    <span className="text-ink-soft leading-relaxed">{n}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const faqs = [
    {
      q: 'How is a Fractional CSO different from a consultant?',
      a: (
        <>
          A consultant orbits a company; a Fractional CSO joins it. The difference shows up in three places. First, accountability - a fractional lead owns the function, not a deliverable. Second, time horizon - they typically stay for 6 to 24 months, not 8 to 12 weeks. Third, the people side - they hire, mentor, and represent the company externally, the way a permanent CSO would.
        </>
      ),
    },
    {
      q: 'How does the time commitment work?',
      a: (
        <>
          A fractional engagement is sized to the work, not the calendar. Light periods can be a focused stretch each week on a specific track; heavier ones, during a regulatory crunch or board run-up, can be considerably more. The cadence is set in the shape document and reviewed quarterly - we increase it when the work demands and quietly taper it when the in-house team is ready.
        </>
      ),
    },
    {
      q: 'Are they an employee, a contractor, or something else?',
      a: (
        <>
          Engaged through Breathe Lead on a monthly retainer, but operationally embedded inside your company - a named role, an internal email, attendance at the leadership and board meetings that matter. We handle contracts, replacements, and quality. You handle giving them work that is worth a senior person.
        </>
      ),
    },
    {
      q: 'Which sectors and frameworks do you cover?',
      a: (
        <>
          Across our bench: manufacturing, financial services, real estate, hospitality, FMCG, software and climate-tech. Frameworks include CSRD &amp; ESRS, BRSR (Core and full), IFRS S1/S2, GRI, TCFD-aligned disclosures, GHG Protocol Scope 1, 2 &amp; 3, plus India-specific ones like SEBI BRSR Lite. If a leader is not the right fit for your sector, we say so up front.
        </>
      ),
    },
    {
      q: 'What does this typically cost?',
      a: (
        <>
          Engagements start in the low five figures (USD) per month for a Level 01 / 02 setup, and scale up from there based on level and scope. The economics usually land at <strong>40 - 60% of the loaded cost of a full-time hire</strong> at the same seniority, with no severance, equity, or onboarding overhead. Most clients see the saving show up first in their search budget - a senior CSO hire can cost six figures and nine months before anyone has done any actual work.
        </>
      ),
    },
    {
      q: 'How do you choose the right CSO for our company?',
      a: (
        <>
          We match on three axes: sector instinct, type of work (strategy vs disclosure vs decarbonisation), and personality fit with your CEO and CFO. After the scoping call, we put forward one or two leaders and you meet both. If neither feels right, we refuse the engagement rather than force a fit. It happens.
        </>
      ),
    },
    {
      q: 'How do you measure success?',
      a: (
        <>
          By outcomes the rest of the business can see. A defensible disclosure published on time. A roadmap the CFO can budget. A supplier engagement program with real coverage numbers. An internal team that no longer needs a fractional CSO. We build the measurement frame into the shape document - never abstract, never just a slide.
        </>
      ),
    },
    {
      q: 'What happens at the end of an engagement?',
      a: (
        <>
          Ideally, a quiet hand-over. The function is in better shape than we found it, an internal lead is running the day-to-day, and we step into a lighter advisory role - or step out entirely. We have ended engagements after six months and after twenty-four. Both are fine, as long as the work has landed.
        </>
      ),
    },
  ]
  return (
    <section className="container-x section">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="FAQ"
            title="Honest answers to the questions we get asked first."
            description="If your question is not below, the contact form is the fastest way - we read every message ourselves."
          />
          <Link to="/contact" className="btn-soft mt-8">
            Ask us directly <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="lg:col-span-8">
          <Reveal>
            <Accordion items={faqs} defaultOpenIndex={0} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
