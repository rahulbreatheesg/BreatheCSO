import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import Logo from './Logo.jsx'

const links = [
  { to: '/fractional', label: 'Fractional CSO' },
  { to: '/why-fractional', label: 'Why Fractional?' },
  { to: '/services', label: 'Services' },
  { to: '/network', label: 'Network' },
  { to: '/news', label: 'News' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 bg-white/95 backdrop-blur-md border-b border-ink/10 ${
        scrolled ? 'shadow-soft' : ''
      }`}
    >
      <div className="container-x flex h-16 lg:h-[72px] items-center justify-between gap-4">
        <Logo />

        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `nav-link whitespace-nowrap ${
                  isActive ? 'nav-link-active' : 'nav-link-idle'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2 shrink-0">
          <Link
            to="/contact"
            state={{ inquiry: 'Join the network - not sure of level' }}
            className="btn-soft whitespace-nowrap !px-4 !py-2 !text-[13px]"
          >
            Enroll as SO
          </Link>
          <Link to="/contact" className="btn-primary whitespace-nowrap !px-4 !py-2 !text-[13px]">
            Start a conversation
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink hover:bg-moss-50 transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ${
          open ? 'max-h-[28rem] border-b border-ink/10' : 'max-h-0'
        } bg-white`}
      >
        <div className="container-x py-5 flex flex-col gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `px-3 py-2.5 rounded-xl text-base font-semibold ${
                  isActive
                    ? 'text-forest bg-moss-100'
                    : 'text-ink-soft hover:bg-moss-50 hover:text-forest'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <div className="mt-3 flex flex-wrap gap-2">
            <Link to="/contact" className="btn-primary">
              Start a conversation <ArrowUpRight className="h-4 w-4" />
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
      </div>
    </header>
  )
}
