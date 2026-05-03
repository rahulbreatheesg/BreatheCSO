import { Link, Navigate, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowUpRight,
  Clock,
  Linkedin,
  Share2,
} from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import CTABanner from '../components/CTABanner.jsx'
import { blogs, formatDate, getBlogBySlug } from '../data/blogs.jsx'

export default function NewsPost() {
  const { slug } = useParams()
  const post = getBlogBySlug(slug)

  if (!post) return <Navigate to="/news" replace />

  const otherPosts = blogs.filter((b) => b.slug !== post.slug).slice(0, 3)

  return (
    <>
      <Hero post={post} />
      <Body post={post} />
      {otherPosts.length > 0 && <Related posts={otherPosts} />}
      <CTABanner
        eyebrow="If something resonated"
        title="Most engagements start with a 30-minute call."
        description="If a piece of this post matched a question on your desk, tell us. We will say honestly whether a fractional setup is the right answer for your stage."
      />
    </>
  )
}

/* -------------------------------- HERO -------------------------------- */

function Hero({ post }) {
  return (
    <section className="relative overflow-hidden border-b border-ink/10">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-moss-200/50 blur-3xl" />
        <div className="absolute top-32 right-0 h-[24rem] w-[24rem] rounded-full bg-mint-200/60 blur-3xl" />
        <div className="absolute inset-0 grain opacity-25" />
      </div>
      <div className="container-x pt-14 md:pt-20 pb-16 md:pb-20">
        <Reveal>
          <Link
            to="/news"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-moss-700 hover:text-forest transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> All writing
          </Link>
        </Reveal>

        <div className="mt-8 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal delay={0.05}>
              <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-moss-700">
                <span>{post.category}</span>
                <span className="text-ink-muted">·</span>
                <span className="text-ink-muted">{formatDate(post.date)}</span>
                <span className="text-ink-muted">·</span>
                <span className="inline-flex items-center gap-1 text-ink-muted">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="display-1 mt-5 max-w-4xl text-balance leading-[1.04]">
                {post.title}
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="lede mt-6 text-pretty max-w-2xl">{post.excerpt}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap items-center gap-5 text-sm">
                <div className="flex items-center gap-3">
                  {post.cover ? (
                    <img
                      src={post.cover}
                      alt=""
                      className="h-10 w-10 rounded-full object-cover object-top ring-1 ring-ink/10"
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-moss-200 grid place-items-center text-forest font-display text-sm">
                      {post.author?.[0]}
                    </div>
                  )}
                  <div>
                    <div className="font-semibold text-ink">{post.author}</div>
                    <div className="text-ink-muted text-xs">{post.role}</div>
                  </div>
                </div>
                {post.tags?.length ? (
                  <div className="hidden sm:flex flex-wrap gap-1.5 pl-5 border-l border-ink/10">
                    {post.tags.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full bg-bone px-3 py-1 text-[10px] uppercase tracking-[0.16em] font-semibold text-ink-soft"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------- BODY -------------------------------- */

function Body({ post }) {
  const shareUrl =
    typeof window !== 'undefined' ? window.location.href : ''

  return (
    <section className="container-x section">
      <div className="grid gap-12 lg:grid-cols-12">
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-28 space-y-8">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] font-semibold text-ink-muted">
                Written by
              </div>
              <div className="mt-3 flex items-center gap-3">
                {post.cover ? (
                  <img
                    src={post.cover}
                    alt=""
                    className="h-12 w-12 rounded-full object-cover object-top ring-1 ring-ink/10"
                  />
                ) : (
                  <div className="h-12 w-12 rounded-full bg-moss-200 grid place-items-center text-forest font-display">
                    {post.author?.[0]}
                  </div>
                )}
                <div>
                  <div className="font-semibold text-ink">{post.author}</div>
                  <div className="text-ink-muted text-xs">{post.role}</div>
                </div>
              </div>
            </div>

            <div className="border-t border-ink/10 pt-6">
              <div className="text-xs uppercase tracking-[0.18em] font-semibold text-ink-muted">
                Share
              </div>
              <div className="mt-3 flex flex-col gap-2">
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    shareUrl,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-forest transition-colors"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <button
                  type="button"
                  onClick={() => {
                    if (typeof navigator !== 'undefined' && navigator.clipboard) {
                      navigator.clipboard.writeText(shareUrl).catch(() => {})
                    }
                  }}
                  className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-forest transition-colors"
                >
                  <Share2 className="h-4 w-4" /> Copy link
                </button>
              </div>
            </div>
          </div>
        </aside>

        <article className="lg:col-span-9 prose-article">{post.body}</article>
      </div>
    </section>
  )
}

/* ------------------------------- RELATED ------------------------------- */

function Related({ posts }) {
  return (
    <section className="bg-bone border-y border-ink/10">
      <div className="container-x section">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <span className="eyebrow">Keep reading</span>
            <h2 className="display-2 mt-4 text-balance">More from the bench.</h2>
          </div>
          <Link to="/news" className="btn-ghost">
            All posts <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/news/${post.slug}`}
              className="card card-hover p-6 group flex flex-col"
            >
              <div className="text-[10px] uppercase tracking-[0.18em] font-semibold text-moss-700">
                {post.category} · {post.readTime}
              </div>
              <h3 className="font-display text-lg mt-3 leading-tight group-hover:text-forest transition-colors">
                {post.title}
              </h3>
              <p className="mt-3 text-ink-soft text-sm leading-relaxed text-pretty flex-1">
                {post.excerpt}
              </p>
              <div className="mt-5 text-xs text-ink-muted">
                {formatDate(post.date)}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
