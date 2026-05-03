import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Briefcase,
  ClipboardCheck,
  Compass,
  GraduationCap,
  Leaf,
  Route,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import CTABanner from '../components/CTABanner.jsx'

const services = [
  {
    id: 'fractional-cso',
    eyebrow: 'Service 01',
    title: 'A CSO, by the day',
    icon: <Briefcase className="h-6 w-6" />,
    intro:
      'A senior sustainability operator who joins your leadership team part-time, owns the function end-to-end, and sticks around long enough to build something that lasts. Not a consultant. A colleague with a roadmap.',
    points: [
      'Embedded into your leadership rhythm - board, ops, finance.',
      'Hires and mentors the small internal team, where one is needed.',
      'Owns the sustainability narrative externally, with investors and customers.',
      'Typical engagements run 6-24 months, embedded part-time and sized to the work.',
    ],
  },
  {
    id: 'esg-strategy-reporting',
    eyebrow: 'Service 02',
    title: 'ESG strategy &amp; reporting that holds up',
    icon: <ClipboardCheck className="h-6 w-6" />,
    intro:
      'Disclosure should be a side-effect of running the business well, not the other way around. We design strategy and reporting in the same breath, so the numbers you publish are the numbers you actually manage.',
    points: [
      'Materiality work that is short, sharp and stakeholder-tested.',
      'Frameworks: CSRD, BRSR Core, GRI, IFRS S1/S2, TCFD-aligned.',
      'Auditable data trails - built once, used everywhere.',
      'Narrative reports that read like the business, not a template.',
    ],
  },
  {
    id: 'net-zero',
    eyebrow: 'Service 03',
    title: 'A climate roadmap with decimals',
    icon: <Route className="h-6 w-6" />,
    intro:
      'Most net-zero plans collapse the moment a CFO opens them. Ours start there. Hotspot first, levers second, capex third - milestones tied to the budget cycle, not a press release.',
    points: [
      'Scope 1, 2 and 3 baselines done properly, even where the data is ugly.',
      'Marginal abatement curves you can actually argue with internally.',
      'Capex/opex sequencing tied to procurement and engineering teams.',
      'Annual progress reviews - what worked, what slipped, what to drop.',
    ],
  },
  {
    id: 'compliance-disclosures',
    eyebrow: 'Service 04',
    title: 'Compliance, with fewer surprises',
    icon: <ShieldCheck className="h-6 w-6" />,
    intro:
      'The regulatory map keeps redrawing itself. We help you read it - once, properly - and then quietly stay ahead so audits and investor questions stop being events.',
    points: [
      'CSRD &amp; ESRS readiness, gap analyses, double materiality assessments.',
      'BRSR (Core &amp; full) for Indian listed and supply-chain entities.',
      'Climate disclosures aligned to IFRS S2 / TCFD recommendations.',
      'Assurance prep - internal trails, controls and documentation that pass.',
    ],
  },
  {
    id: 'capability-building',
    eyebrow: 'Service 05',
    title: 'Building the team you eventually have',
    icon: <GraduationCap className="h-6 w-6" />,
    intro:
      'A fractional CSO should make themselves smaller over time, not larger. We coach the people who will run sustainability after the engagement ends - finance, HR, procurement, ops - so the function does not collapse the day we leave.',
    points: [
      'Operating models for sustainability that fit your existing org chart.',
      'Coaching for in-house leads - from analyst to head of function.',
      'Working sessions for executive teams (no death-by-deck).',
      'Light-touch governance: the meetings that need to happen, no more.',
    ],
  },
]

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesIndex />
      <div className="container-x">
        <div className="border-t border-ink/10" />
      </div>
      {services.map((s, i) => (
        <ServiceBlock key={s.id} service={s} reverse={i % 2 === 1} />
      ))}
      <Engagement />
      <CTABanner
        eyebrow="Working together"
        title="Ninety minutes is enough to know if this fits."
        description="We start with one honest call. You describe the problem; we tell you whether a fractional lead, a project, or a different shape entirely is the right answer."
      />
    </>
  )
}

function ServicesHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 right-0 h-[26rem] w-[26rem] rounded-full bg-mint-200/70 blur-3xl" />
        <div className="absolute top-40 -left-32 h-[26rem] w-[26rem] rounded-full bg-moss-200/60 blur-3xl" />
        <div className="absolute inset-0 grain opacity-30" />
      </div>
      <div className="container-x pt-20 md:pt-28 pb-16">
        <Reveal>
          <span className="eyebrow">Services</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="display-1 mt-6 max-w-4xl text-balance">
            Five services.{' '}
            <span className="italic text-moss-700">One belief: own it, don&rsquo;t outsource it.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="lede mt-6 max-w-2xl">
            We sell time and judgement, mostly in that order. Below is the spectrum - pick what fits, leave what does not. Most engagements braid two or three together.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function ServicesIndex() {
  return (
    <section className="bg-bone/60 border-y border-ink/10">
      <div className="container-x py-10">
        <div className="flex flex-wrap gap-3">
          {services.map((s, i) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="group inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/60 px-4 py-2 text-sm text-ink-soft hover:border-forest hover:text-forest transition"
            >
              <span className="text-xs text-moss-700 font-mono">
                0{i + 1}
              </span>
              <span dangerouslySetInnerHTML={{ __html: s.title }} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceBlock({ service, reverse }) {
  return (
    <section
      id={service.id}
      className="container-x section scroll-mt-24"
    >
      <div
        className={`grid gap-12 lg:grid-cols-12 items-start ${
          reverse ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        <div className="lg:col-span-5">
          <Reveal>
            <span className="eyebrow">{service.eyebrow}</span>
            <h2
              className="display-2 mt-5 text-balance"
              dangerouslySetInnerHTML={{ __html: service.title }}
            />
          </Reveal>
          <Reveal delay={0.05}>
            <p className="lede mt-6 text-pretty">{service.intro}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/contact" className="btn-soft mt-8">
              Discuss this service <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <div className="card p-8 md:p-10 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-moss-100 opacity-60" />
              <div className="relative">
                <div className="h-12 w-12 rounded-2xl bg-forest text-cream flex items-center justify-center">
                  {service.icon}
                </div>
                <ul className="mt-8 space-y-5">
                  {service.points.map((p) => (
                    <li key={p} className="flex gap-3 items-start">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-moss-500 shrink-0" />
                      <span
                        className="text-ink-soft leading-relaxed text-pretty"
                        dangerouslySetInnerHTML={{ __html: p }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Engagement() {
  const steps = [
    {
      n: '01',
      title: 'A first honest call',
      body:
        'Ninety minutes. You describe the friction; we describe what a fractional lead can and cannot fix.',
      icon: <Compass className="h-5 w-5" />,
    },
    {
      n: '02',
      title: 'A short shape document',
      body:
        'Scope, cadence, the named CSO, and what the first 90 days will produce. No 60-page proposals.',
      icon: <Sparkles className="h-5 w-5" />,
    },
    {
      n: '03',
      title: 'Embed and run',
      body:
        'The CSO joins your rhythm - leadership meetings, board prep, internal teams - and the work begins.',
      icon: <Leaf className="h-5 w-5" />,
    },
    {
      n: '04',
      title: 'Hand-over, not exit',
      body:
        'We taper down as your in-house capability grows. The point is not to be needed forever.',
      icon: <Route className="h-5 w-5" />,
    },
  ]
  return (
    <section className="bg-bone/60 border-y border-ink/10">
      <div className="container-x section">
        <SectionHeading
          eyebrow="How an engagement actually goes"
          title="Less proposal theatre. More work that lands."
          description="Every engagement is shaped to a company, but the underlying choreography looks roughly like this."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <div className="card card-hover p-6 h-full">
                <div className="flex items-center justify-between text-moss-700">
                  {s.icon}
                  <span className="font-mono text-xs">{s.n}</span>
                </div>
                <h3 className="mt-5 font-display text-xl">{s.title}</h3>
                <p className="mt-3 text-ink-soft text-sm leading-relaxed">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
