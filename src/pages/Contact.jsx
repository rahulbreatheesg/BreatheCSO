import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
  ArrowUpRight,
  Calendar,
  Check,
  ChevronDown,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Twitter,
  Instagram,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'

const INQUIRY_OPTIONS = [
  'Hire a Fractional CSO for our company',
  'ESG strategy &/ reporting support',
  'Net zero / climate roadmap',
  'Compliance &/ disclosures (CSRD, BRSR, IFRS S2)',
  'Internal capability building',
  'Join the network - Level 01 (Contributor CSO)',
  'Join the network - Level 02 (Senior Fractional CSO)',
  'Join the network - Level 03 (Lead / Executive CSO)',
  'Join the network - not sure of level',
  'Partnership / something else',
]

export default function Contact() {
  return (
    <>
      <ContactHero />
      <div className="container-x pb-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <aside className="lg:col-span-5 flex flex-col gap-6">
            <BookingCard />
            <ReachCard />
            <SocialCard />
          </aside>
        </div>
      </div>
    </>
  )
}

function ContactHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-32 h-[24rem] w-[24rem] rounded-full bg-moss-200/60 blur-3xl" />
        <div className="absolute top-32 right-0 h-[22rem] w-[22rem] rounded-full bg-mint-200/70 blur-3xl" />
        <div className="absolute inset-0 grain opacity-30" />
      </div>
      <div className="container-x pt-20 md:pt-28 pb-12">
        <Reveal>
          <span className="eyebrow">Contact</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="display-1 mt-6 max-w-4xl text-balance">
            Start the conversation.{' '}
            <span className="italic text-moss-700">
              We will keep it short.
            </span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="lede mt-6 max-w-2xl">
            Tell us a little about where the friction is - what is working, what is not, what your board has started asking. We reply within two business days, and the first call is always on us.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function ContactForm() {
  const { state: routeState } = useLocation()
  const [state, setState] = useState({
    name: '',
    email: '',
    company: '',
    inquiry: INQUIRY_OPTIONS[0],
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (routeState?.inquiry && INQUIRY_OPTIONS.includes(routeState.inquiry)) {
      setState((s) => ({ ...s, inquiry: routeState.inquiry }))
      const el = document.getElementById('contact-form-anchor')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [routeState])

  const update = (k) => (e) => setState((s) => ({ ...s, [k]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    const next = {}
    if (!state.name.trim()) next.name = 'Please share a name.'
    if (!state.email.trim() || !/^\S+@\S+\.\S+$/.test(state.email))
      next.email = 'A valid email helps us reply.'
    if (!state.message.trim() || state.message.trim().length < 10)
      next.message = 'A few lines is plenty - but we need a few.'
    setErrors(next)
    if (Object.keys(next).length === 0) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div id="contact-form-anchor" className="card p-10 scroll-mt-24">
        <div className="h-12 w-12 rounded-2xl bg-moss-100 text-forest flex items-center justify-center">
          <Check className="h-6 w-6" />
        </div>
        <h2 className="display-2 mt-6">Message in. Thank you.</h2>
        <p className="lede mt-4 text-pretty">
          We will read it properly - usually the same day - and write back with either a calendar slot or a quiet, useful question. Whichever is more honest.
        </p>
        <p className="text-ink-muted text-sm mt-8">- The Breathe Lead team</p>
      </div>
    )
  }

  const isCsoEnrollment = state.inquiry?.startsWith('Join the network')

  return (
    <form
      id="contact-form-anchor"
      onSubmit={onSubmit}
      noValidate
      className="card p-8 md:p-10 scroll-mt-24"
      aria-label="Contact form"
    >
      <SectionHeading
        eyebrow={isCsoEnrollment ? 'Enroll as a CSO' : 'Send a note'}
        title={
          isCsoEnrollment
            ? 'Tell us a bit about the work you have led.'
            : 'Tell us what is going on.'
        }
        description={
          isCsoEnrollment
            ? 'A few lines about previous roles, sectors and what kind of engagement would suit you. We will reply with a 30-minute call.'
            : 'Roughly: who you are, what your business does, and where sustainability is currently sitting in the org.'
        }
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <Field label="Your name" id="name" error={errors.name}>
          <input
            id="name"
            value={state.name}
            onChange={update('name')}
            placeholder="Jane Mistry"
            className="w-full rounded-2xl border border-ink/15 bg-white px-4 py-3 text-sm focus:outline-none focus:border-forest transition"
          />
        </Field>
        <Field label="Email" id="email" error={errors.email}>
          <input
            id="email"
            type="email"
            value={state.email}
            onChange={update('email')}
            placeholder="jane@company.com"
            className="w-full rounded-2xl border border-ink/15 bg-white px-4 py-3 text-sm focus:outline-none focus:border-forest transition"
          />
        </Field>

        <div className="sm:col-span-2">
          <Field label="Company" id="company">
            <input
              id="company"
              value={state.company}
              onChange={update('company')}
              placeholder={isCsoEnrollment ? 'Most recent company' : 'Where do you work?'}
              className="w-full rounded-2xl border border-ink/15 bg-white px-4 py-3 text-sm focus:outline-none focus:border-forest transition"
            />
          </Field>
        </div>

        <div className="sm:col-span-2">
          <Field label="What is this about?" id="inquiry">
            <div className="relative">
              <select
                id="inquiry"
                value={state.inquiry}
                onChange={update('inquiry')}
                className="w-full appearance-none rounded-2xl border border-ink/15 bg-white px-4 py-3 pr-10 text-sm focus:outline-none focus:border-forest transition"
              >
                {INQUIRY_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <ChevronDown className="h-4 w-4 absolute right-4 top-1/2 -translate-y-1/2 text-ink-muted pointer-events-none" />
            </div>
          </Field>
        </div>

        <div className="sm:col-span-2">
          <Field
            label={isCsoEnrollment ? 'Your background, briefly' : 'What is going on?'}
            id="message"
            error={errors.message}
          >
            <textarea
              id="message"
              value={state.message}
              onChange={update('message')}
              rows={6}
              placeholder={
                isCsoEnrollment
                  ? 'Recent roles, sectors, the kind of engagements you would step into. A LinkedIn URL is welcome.'
                  : 'Brief context is plenty - board pressure, a CSRD deadline, a roadmap that stalled, a hire that did not happen…'
              }
              className="w-full rounded-2xl border border-ink/15 bg-white px-4 py-3 text-sm focus:outline-none focus:border-forest transition resize-none"
            />
          </Field>
        </div>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <p className="text-xs text-ink-muted">
          We answer in plain English (or Hindi). No newsletter, no automated sequences.
        </p>
        <button type="submit" className="btn-primary self-start">
          Start the conversation <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
    </form>
  )
}

function Field({ label, id, children, error }) {
  return (
    <label htmlFor={id} className="flex flex-col gap-2">
      <span className="text-xs uppercase tracking-[0.16em] text-moss-700">
        {label}
      </span>
      {children}
      {error && <span className="text-xs text-red-700/80">{error}</span>}
    </label>
  )
}

function BookingCard() {
  return (
    <div className="rounded-3xl border border-ink/10 bg-forest text-cream p-8 relative overflow-hidden">
      <div className="absolute -top-16 -right-16 h-44 w-44 rounded-full bg-moss-500/30 blur-2xl" />
      <div className="relative">
        <div className="h-10 w-10 rounded-xl bg-cream/10 flex items-center justify-center">
          <Calendar className="h-5 w-5 text-moss-300" />
        </div>
        <h3 className="font-display text-2xl mt-5">
          Pick a slot, skip the email loop.
        </h3>
        <p className="mt-3 text-cream/80 leading-relaxed">
          Prefer a calendar to a form? Book a 30-minute introductory call directly. We use the time to listen, not pitch.
        </p>
        <a
          href="https://calendly.com/"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-cream px-5 py-2.5 text-sm font-medium text-forest hover:bg-moss-100 transition"
        >
          Open the calendar <ArrowUpRight className="h-4 w-4" />
        </a>
        <p className="text-xs text-cream/55 mt-4">
          Booking placeholder - wire to Calendly / Cal.com when ready.
        </p>
      </div>
    </div>
  )
}

function ReachCard() {
  return (
    <div className="card p-8">
      <h3 className="font-display text-xl">Other ways to reach us</h3>
      <ul className="mt-6 space-y-5 text-ink-soft">
        <li className="flex gap-3 items-start">
          <Mail className="h-5 w-5 text-moss-700 mt-0.5" />
          <div>
            <div className="font-medium text-ink">Email</div>
            <a
              href="mailto:info@breatheesg.com"
              className="hover:text-forest link-underline"
            >
              info@breatheesg.com
            </a>
          </div>
        </li>
        <li className="flex gap-3 items-start">
          <Phone className="h-5 w-5 text-moss-700 mt-0.5" />
          <div>
            <div className="font-medium text-ink">Phone</div>
            <a href="tel:+919900028401" className="hover:text-forest link-underline block">
              +91 99000 28401
            </a>
            <a href="tel:+918879291098" className="hover:text-forest link-underline block">
              +91 88792 91098
            </a>
          </div>
        </li>
        <li className="flex gap-3 items-start">
          <MessageSquare className="h-5 w-5 text-moss-700 mt-0.5" />
          <div>
            <div className="font-medium text-ink">For sustainability leaders</div>
            <p className="text-sm leading-relaxed">
              Use the form above and pick a “Join the network” option, or simply email us at{' '}
              <a
                href="mailto:info@breatheesg.com"
                className="text-forest hover:underline"
              >
                info@breatheesg.com
              </a>
              .
            </p>
          </div>
        </li>
        <li className="flex gap-3 items-start">
          <MapPin className="h-5 w-5 text-moss-700 mt-0.5" />
          <div>
            <div className="font-medium text-ink">Office</div>
            <p className="text-sm leading-relaxed">
              Breathe Lead Private Limited<br />
              AVISHA, 73, Central St, Kumara Park West,<br />
              Seshadripuram, Bengaluru - 560020
            </p>
          </div>
        </li>
      </ul>
    </div>
  )
}

function SocialCard() {
  const socials = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/breathe-lead/', Icon: Linkedin },
    { label: 'X', href: 'https://x.com/breathe_lead', Icon: Twitter },
    { label: 'Instagram', href: 'https://www.instagram.com/breathelead/', Icon: Instagram },
  ]
  return (
    <div className="card p-7">
      <h3 className="font-display text-lg">Find us elsewhere</h3>
      <p className="text-sm text-ink-muted mt-2">
        Lighter updates, fewer pitches.
      </p>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {socials.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2.5 rounded-xl border border-ink/10 px-3.5 py-2.5 text-sm text-ink-soft hover:border-forest hover:text-forest transition"
          >
            <Icon className="h-4 w-4" />
            <span>{label}</span>
            <ArrowUpRight className="h-3.5 w-3.5 ml-auto opacity-0 group-hover:opacity-100 transition" />
          </a>
        ))}
      </div>
    </div>
  )
}
