import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal.jsx'

export default function CTABanner({
  eyebrow = 'Next step',
  title = 'A CSO at the table, before the next board meeting.',
  description = "Tell us where the friction is. We will tell you whether a fractional lead actually solves it - and if not, who might.",
  primary = { to: '/contact', label: 'Start the conversation' },
  secondary = { to: '/services', label: 'See what we do' },
}) {
  return (
    <section className="container-x py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-forest text-cream p-10 md:p-16">
          <div className="absolute -top-32 -right-20 h-72 w-72 rounded-full bg-moss-500/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-mint-200/15 blur-3xl" />
          <div className="absolute inset-0 grain opacity-15 pointer-events-none" />
          <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <span className="eyebrow !text-moss-300">
                {eyebrow}
              </span>
              <h3 className="display-2 mt-4 text-balance !text-cream">{title}</h3>
              <p className="mt-4 lede !text-cream/80">{description}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to={primary.to}
                className="btn bg-cream text-forest hover:bg-moss-100"
              >
                {primary.label} <ArrowUpRight className="h-4 w-4" />
              </Link>
              {secondary && (
                <Link
                  to={secondary.to}
                  className="btn border border-cream/30 text-cream hover:bg-cream/10"
                >
                  {secondary.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
