import { Link } from 'react-router-dom'
import { ArrowUpRight, Clock, Mail, Newspaper } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import CTABanner from '../components/CTABanner.jsx'
import { blogs, formatDate } from '../data/blogs.jsx'

export default function News() {
  const featured = blogs[0]
  const rest = blogs.slice(1)

  return (
    <>
      <Hero count={blogs.length} />

      {featured && <Featured post={featured} />}

      {rest.length > 0 && (
        <section className="container-x section">
          <SectionHeading
            eyebrow="More writing"
            title="Recent posts."
            description="Practitioner notes, opinions, and the occasional argument with a regulator. Short enough to read on a coffee break."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 0.05}>
                <PostCard post={post} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <Subscribe />

      <CTABanner
        eyebrow="Want a sharper read on your function?"
        title="A 30-minute call costs nothing and decides most of it."
        description="If something here resonated - or annoyed you - tell us. We will say honestly whether a fractional engagement makes sense for your stage."
      />
    </>
  )
}

/* ------------------------------- HERO ------------------------------- */

function Hero({ count }) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-moss-200/60 blur-3xl" />
        <div className="absolute top-32 right-0 h-[24rem] w-[24rem] rounded-full bg-mint-200/70 blur-3xl" />
        <div className="absolute inset-0 grain opacity-30" />
      </div>
      <div className="container-x pt-20 md:pt-28 pb-12">
        <Reveal>
          <span className="eyebrow">News &amp; writing</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="display-1 mt-6 max-w-5xl text-balance">
            Field notes from a small bench{' '}
            <span className="italic text-moss-700">that ships, then writes.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="lede mt-7 max-w-2xl text-pretty">
            We do not publish thought leadership. We publish what we have
            actually run into - first-week mistakes, framework wrangles, board
            conversations that went sideways and the small fixes that pulled
            them back. {count} {count === 1 ? 'piece' : 'pieces'} so far. More on the way.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

/* ----------------------------- FEATURED ------------------------------ */

function Featured({ post }) {
  return (
    <section className="container-x">
      <Reveal>
        <Link
          to={`/news/${post.slug}`}
          className="group block card card-hover overflow-hidden md:grid md:grid-cols-12"
        >
          <div className="md:col-span-5 relative bg-moss-100 aspect-[4/3] md:aspect-auto md:min-h-[26rem] overflow-hidden">
            {post.cover ? (
              <img
                src={post.cover}
                alt=""
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              />
            ) : (
              <div className="w-full h-full grid place-items-center text-moss-500">
                <Newspaper className="h-16 w-16" />
              </div>
            )}
            <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-cream/90 backdrop-blur px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-forest">
              Featured
            </div>
          </div>
          <div className="md:col-span-7 p-7 md:p-10 flex flex-col">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-moss-700">
              <span>{post.category}</span>
              <span className="text-ink-muted">·</span>
              <span className="text-ink-muted">{formatDate(post.date)}</span>
              <span className="text-ink-muted">·</span>
              <span className="inline-flex items-center gap-1 text-ink-muted">
                <Clock className="h-3 w-3" />
                {post.readTime}
              </span>
            </div>
            <h2 className="display-2 mt-5 leading-[1.05] text-balance group-hover:text-forest transition-colors">
              {post.title}
            </h2>
            <p className="mt-5 text-ink-soft leading-relaxed text-pretty">
              {post.excerpt}
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
              <div className="text-sm">
                <div className="font-semibold text-ink">{post.author}</div>
                <div className="text-ink-muted">{post.role}</div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-forest font-semibold text-sm">
                Read the piece <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
            {post.tags?.length ? (
              <div className="mt-6 flex flex-wrap gap-2 pt-6 border-t border-ink/10">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full bg-bone px-3 py-1 text-[11px] uppercase tracking-[0.14em] font-semibold text-ink-soft"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </Link>
      </Reveal>
    </section>
  )
}

/* ----------------------------- POST CARD ----------------------------- */

function PostCard({ post }) {
  return (
    <Link
      to={`/news/${post.slug}`}
      className="group flex flex-col card card-hover overflow-hidden h-full"
    >
      <div className="relative aspect-[16/10] bg-moss-100 overflow-hidden">
        {post.cover ? (
          <img
            src={post.cover}
            alt=""
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="w-full h-full grid place-items-center text-moss-500">
            <Newspaper className="h-10 w-10" />
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] font-semibold text-moss-700">
          <span>{post.category}</span>
          <span className="text-ink-muted">·</span>
          <span className="text-ink-muted">{post.readTime}</span>
        </div>
        <h3 className="font-display text-xl mt-3 leading-tight group-hover:text-forest transition-colors">
          {post.title}
        </h3>
        <p className="mt-3 text-ink-soft text-sm leading-relaxed text-pretty flex-1">
          {post.excerpt}
        </p>
        <div className="mt-5 pt-5 border-t border-ink/10 flex items-center justify-between text-xs">
          <span className="text-ink-soft">{post.author}</span>
          <span className="text-ink-muted">{formatDate(post.date)}</span>
        </div>
      </div>
    </Link>
  )
}

/* ----------------------------- SUBSCRIBE ----------------------------- */

function Subscribe() {
  return (
    <section className="container-x section">
      <div className="rounded-3xl border border-moss-500/25 bg-moss-50/60 p-8 md:p-12 grid gap-8 md:grid-cols-12 items-center">
        <div className="md:col-span-7">
          <span className="eyebrow">Quietly, once a month</span>
          <h3 className="display-2 mt-4 text-balance">
            One short note. No frameworks-of-the-week.
          </h3>
          <p className="mt-4 text-ink-soft leading-relaxed text-pretty max-w-2xl">
            Roughly once a month we send a short letter - usually a single
            argument, an observation from an engagement, and one specific thing
            a leadership team should be doing differently this quarter.
            Unsubscribe in two clicks if it does not earn its keep.
          </p>
        </div>
        <div className="md:col-span-5">
          <a
            href="mailto:hello@breathelead.com?subject=Subscribe%20to%20Breathe%20Lead%20notes"
            className="card p-6 block hover:border-moss-500/40 transition-colors"
          >
            <div className="flex items-center gap-3 text-forest">
              <Mail className="h-5 w-5" />
              <span className="font-display text-lg">Subscribe by email</span>
            </div>
            <p className="text-ink-muted text-sm mt-2 leading-relaxed">
              Drop us a one-line email at{' '}
              <span className="text-forest font-semibold">
                hello@breathelead.com
              </span>{' '}
              and we will add you to the next note.
            </p>
            <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest">
              Send the email <ArrowUpRight className="h-4 w-4" />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
