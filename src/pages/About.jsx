import { Leaf, Sprout, Flag, Wind, Compass } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import CTABanner from '../components/CTABanner.jsx'

export default function About() {
  return (
    <>
      <AboutHero />
      <Story />
      <Philosophy />
      <Principles />
      <Numbers />
      <CTABanner
        eyebrow="If any of this lands"
        title="There is usually a fractional CSO available next quarter."
        description="Our network is small. Conversations move quickly because of it. Tell us where you are stuck and we will tell you whether we are useful."
      />
    </>
  )
}

function AboutHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[28rem] w-[55rem] rounded-full bg-moss-200/40 blur-3xl" />
        <div className="absolute inset-0 grain opacity-30" />
      </div>
      <div className="container-x pt-20 md:pt-28 pb-12">
        <Reveal>
          <span className="eyebrow">About Breathe Lead</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="display-1 mt-6 max-w-5xl text-balance">
            We started Breathe Lead because the right person{' '}
            <span className="italic text-moss-700">often was not in the room.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="lede mt-6 max-w-2xl">
            For a decade we watched companies hire ambition, hire frameworks, hire dashboards - and still end up without senior judgement on the questions that mattered. So we built the smallest possible thing that fixes that.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function Story() {
  return (
    <section className="container-x section">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <span className="eyebrow">The story, briefly</span>
          <h2 className="display-2 mt-4 text-balance">
            Started in the middle, like most useful things.
          </h2>
        </div>
        <div className="lg:col-span-8 grid gap-6">
          <Reveal>
            <p className="lede text-pretty">
              The name <em>Breathe Lead</em> began as shorthand inside a working group of sustainability practitioners who had spent careers running ESG functions for listed companies, family businesses and venture-backed climate firms. The shared frustration was unromantic: the work was real, but the support model was not.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="lede text-pretty">
              Junior consultants were generous on slides and short on conviction. Boutique firms shipped frameworks that nobody on the factory floor could use. And full-time CSOs - when companies could find them - often arrived a year late and left a year early.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lede text-pretty">
              So Breathe Lead took a different shape: a small bench of seasoned operators who would step in part-time, own the function, and make themselves smaller over time. Less heroic, more useful.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="lede text-pretty">
              We are still small. That is on purpose.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Philosophy() {
  const items = [
    {
      icon: <Compass className="h-5 w-5" />,
      title: 'Practical before theoretical',
      body:
        'We use frameworks, but we do not worship them. The point is the operating decision, not the citation.',
    },
    {
      icon: <Sprout className="h-5 w-5" />,
      title: 'Embed, don’t orbit',
      body:
        'A consultant orbits a company. A fractional CSO joins it. The difference shows up in the third month, not the first.',
    },
    {
      icon: <Wind className="h-5 w-5" />,
      title: 'Plain language, defended',
      body:
        'If we cannot explain a number to a procurement lead in two sentences, we treat the number as not yet ready.',
    },
    {
      icon: <Flag className="h-5 w-5" />,
      title: 'Outcomes that survive us',
      body:
        'A good engagement should feel slightly redundant by the end. The internal team should be running it, with us in the wings.',
    },
  ]
  return (
    <section className="bg-bone/60 border-y border-ink/10">
      <div className="container-x section">
        <SectionHeading
          eyebrow="Philosophy"
          title="Four small beliefs that organise the rest."
          description="None of these are slogans. Each one has, more than once, made us turn down work."
          align="center"
          className="text-center"
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <div className="card card-hover p-6 h-full">
                <div className="h-10 w-10 rounded-xl bg-moss-100 text-forest flex items-center justify-center">
                  {p.icon}
                </div>
                <h3 className="mt-5 font-display text-lg">{p.title}</h3>
                <p className="mt-3 text-ink-soft text-sm leading-relaxed">
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

function Principles() {
  return (
    <section className="container-x section">
      <div className="grid gap-12 lg:grid-cols-12 items-start">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="What we will not do"
            title="A short list, kept on purpose."
            description="The shape of a firm is what it refuses, not just what it offers. These are ours."
          />
        </div>
        <div className="lg:col-span-7 grid gap-4">
          {[
            {
              t: 'Decks-as-deliverables',
              d: 'A 60-slide deck is not strategy. It is a souvenir from someone else’s thinking.',
            },
            {
              t: 'Greenwashing-by-omission',
              d: 'We will name the parts of an ESG story that do not survive scrutiny. Quietly first, loudly if needed.',
            },
            {
              t: 'Selling capacity we do not have',
              d: 'Our bench is small. If the right leader is not free, we say so - and sometimes refer you on.',
            },
            {
              t: 'Frameworks as religion',
              d: 'We use CSRD, BRSR, GRI, IFRS S1/S2, TCFD. We do not let them eat the operating reality.',
            },
          ].map((p) => (
            <Reveal key={p.t}>
              <div className="rounded-2xl border border-ink/10 bg-white/70 p-6 flex gap-5 items-start">
                <Leaf className="h-5 w-5 text-moss-700 mt-1 shrink-0" />
                <div>
                  <h4 className="font-display text-lg">{p.t}</h4>
                  <p className="text-ink-soft mt-1 leading-relaxed">{p.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Numbers() {
  const stats = [
    { k: '3 levels', v: 'of fractional CSO seniority - matched to the work, not the title.' },
    { k: '6-24', v: 'months: typical embedded engagement length.' },
    { k: '40-60%', v: 'cost of a full-time CSO at the same seniority - no severance, equity, or search fee.' },
    { k: '1', v: 'small bench. Small on purpose.' },
  ]
  return (
    <section className="bg-forest text-cream relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-10 pointer-events-none" />
      <div className="container-x section relative">
        <div className="grid gap-10 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.k} delay={i * 0.05}>
              <div>
                <div className="font-display text-5xl md:text-6xl text-cream">
                  {s.k}
                </div>
                <p className="mt-3 text-cream/70 text-sm leading-relaxed text-pretty">
                  {s.v}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
