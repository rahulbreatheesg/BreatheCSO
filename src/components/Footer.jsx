import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react'
import Logo from './Logo.jsx'

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/breathe-lead/', Icon: Linkedin },
  { label: 'X', href: 'https://x.com/breathe_lead', Icon: Twitter },
  { label: 'Instagram', href: 'https://www.instagram.com/breathelead/', Icon: Instagram },
]

export default function Footer() {
  return (
    <footer className="relative mt-12 bg-forest text-cream overflow-hidden">
      <div className="absolute inset-0 grain opacity-10 pointer-events-none" />
      <div className="container-x relative pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="[&_a]:text-cream">
              <Logo light />
            </div>
            <p className="mt-6 max-w-md text-cream/75 text-pretty leading-relaxed">
              Senior sustainability leadership, embedded part-time, paid per outcome.
              Less hand-waving, more progress that lands on a P&amp;L.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-cream px-5 py-2.5 text-sm font-medium text-forest hover:bg-moss-100 transition">
                Bring a CSO into the room <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                state={{ inquiry: 'Join the network - not sure of level' }}
                className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-5 py-2.5 text-sm font-medium text-cream hover:bg-cream/10 transition"
              >
                Enroll as a CSO
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-cream/20 text-cream/85 hover:bg-cream hover:text-forest hover:border-cream transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-cream/60 text-xs uppercase tracking-[0.18em] mb-4">
              Wander
            </h4>
            <ul className="space-y-3 text-cream/85">
              <li><Link to="/fractional" className="hover:text-cream link-underline">What is a Fractional CSO?</Link></li>
              <li><Link to="/why-fractional" className="hover:text-cream link-underline">Why Fractional?</Link></li>
              <li><Link to="/services" className="hover:text-cream link-underline">Services</Link></li>
              <li><Link to="/network" className="hover:text-cream link-underline">CSO Network</Link></li>
              <li><Link to="/network#join" className="hover:text-cream link-underline">Join as a CSO</Link></li>
              <li><Link to="/news" className="hover:text-cream link-underline">News &amp; writing</Link></li>
              <li><Link to="/about" className="hover:text-cream link-underline">About</Link></li>
              <li><Link to="/contact" className="hover:text-cream link-underline">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-cream/60 text-xs uppercase tracking-[0.18em] mb-4">
              Reach us
            </h4>
            <ul className="space-y-4 text-cream/85">
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 mt-1 text-moss-300 shrink-0" />
                <a href="mailto:info@breathelead.com" className="hover:text-cream link-underline">
                  info@breathelead.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 mt-1 text-moss-300 shrink-0" />
                <div className="flex flex-wrap gap-x-3">
                  <a href="tel:+919900028401" className="hover:text-cream link-underline">
                    +91 99000 28401
                  </a>
                  <span className="text-cream/40">/</span>
                  <a href="tel:+918879291098" className="hover:text-cream link-underline">
                    +91 88792 91098
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-1 text-moss-300 shrink-0" />
                <p className="leading-relaxed text-cream/80 text-sm">
                  Breathe Lead Private Limited<br />
                  AVISHA, 73, Central St, Kumara Park West,<br />
                  Seshadripuram, Bengaluru - 560020
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/15 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between text-sm text-cream/55">
          <p>© {new Date().getFullYear()} Breathe Lead Private Limited. All rights, gently reserved.</p>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-cream">Privacy</a>
            <a href="#" className="hover:text-cream">Terms</a>
            <a href="#" className="hover:text-cream">Data Protection</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
