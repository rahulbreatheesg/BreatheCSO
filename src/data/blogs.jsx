import React from 'react'

export const blogs = [
  {
    slug: 'first-30-days-fractional-cso',
    title: 'The first 30 days of a fractional CSO',
    excerpt:
      'Less heroic than it sounds. Mostly listening, mapping, and quietly making the room more useful before anything new gets shipped.',
    author: 'Vatsal Mimani',
    role: 'Contributor CSO, Breathe Lead',
    date: '2026-04-22',
    readTime: '7 min read',
    category: 'Practice',
    tags: ['Onboarding', 'Engagement', 'Practitioner notes'],
    cover: '/csos/vatsal-mimani.png',
    body: (
      <>
        <p>
          The first month of a fractional CSO engagement is, contrary to what
          the slide decks imply, mostly quiet. There is no town hall on day one.
          No new strategy. No fresh deck. The work in the first thirty days is
          almost entirely about earning the right to ship the next thirty.
        </p>
        <p>
          What follows is a rough shape of how a Breathe Lead engagement
          tends to run, week by week. It is not a template - if anything, the
          point is to <em>resist</em> templates - but the rhythm holds across
          most of our clients, whether they are a 200-person manufacturer or a
          listed financial services firm.
        </p>

        <h2>Week one - the listening tour, on purpose</h2>
        <p>
          The first week is mostly thirty-minute conversations, scheduled in
          quick succession across functions. Finance, ops, procurement, HR,
          legal, the heads of two or three business units, and the CEO. Same
          three questions every time, give or take:
        </p>
        <ul>
          <li>What does sustainability mean inside your function this year?</li>
          <li>What did the last person in this seat get right or wrong?</li>
          <li>If you had a free hour with a senior CSO, what would you ask?</li>
        </ul>
        <p>
          You learn more from the third answer than the first two combined.
          People will tell you within a sentence whether sustainability is a
          live concern or a calendar item, and that distinction sets the entire
          shape of the engagement.
        </p>
        <p>
          One thing we have learned the hard way: do not ship a written summary
          at the end of week one. It is too soon. Half of what people say in
          their first conversation gets quietly contradicted in week three by
          the same person, and you do not want a paper trail full of premature
          conclusions.
        </p>

        <h2>Week two - mapping the function as it actually exists</h2>
        <p>
          The second week is a desk job. We pull every artifact already in the
          building - the BRSR draft, last year's GHG inventory, the supplier
          code, the climate-risk slide buried in the audit committee deck, the
          internal sustainability tracker that quietly stopped updating in
          September. Everything.
        </p>
        <p>
          Two outputs come from this. First, an honest map of what already
          exists, where it lives, who owns it, and how trustworthy it is. (Most
          companies are surprised by how much they already have, and equally
          surprised by how little of it is current.) Second, a small list of
          decisions that have been hanging - decisions a previous lead deferred
          or a junior owner did not have the authority to take.
        </p>
        <p>
          That second list is gold. It is where a fractional CSO earns their
          fee in the first thirty days, by closing five or six small loops that
          have been open for months.
        </p>

        <h2>Week three - pruning before adding</h2>
        <p>
          By week three, there is usually pressure - sometimes external,
          sometimes self-imposed - to start <em>doing things</em>. Resist
          slightly longer. The third week is for pruning.
        </p>
        <p>
          A typical sustainability function in a mid-market business is
          carrying ten or twelve initiatives, of which three are strategically
          important, four are useful but not urgent, and the rest are
          historical artefacts that nobody has had the heart to kill. You
          cannot run all ten in parallel and you cannot add a new one until
          some of the old ones are paused.
        </p>
        <p>
          So you walk into the leadership meeting in week three with a
          one-pager that lists what is paused, what continues, and what is
          being added. The art of the thing is to make the pause list longer
          than the addition list, and to make it land without anyone feeling
          their pet project has been quietly executed in the parking lot.
        </p>

        <h2>Week four - shipping one thing well</h2>
        <p>
          Only in the fourth week does new work start. And usually only one
          thing. A first-cut climate transition narrative, a refreshed
          materiality view, a defensible Scope 1 and 2 number with a method
          everyone in finance can sign off on. The work is small and
          unglamorous because in the fourth week, your credibility comes from
          shipping <em>any</em> object that the previous owner could not get
          across the line.
        </p>
        <p>
          If the first thing shipped is overly ambitious, two things happen.
          You miss the next deadline, and the room quietly stops trusting that
          fractional was the right call. If the first thing shipped is small
          and useful, the next thing gets the benefit of the doubt - and the
          one after that, and the one after that. That compounding is the
          entire model.
        </p>

        <h2>What we deliberately do not do in the first 30 days</h2>
        <ul>
          <li>
            <strong>No new strategy document.</strong> A real strategy needs
            two or three quarters of context. Anything written in the first
            month tends to sound profound and become embarrassing by month
            four.
          </li>
          <li>
            <strong>No external announcements.</strong> No LinkedIn posts, no
            press release, no "We have appointed a new sustainability lead."
            The work compounds quietly; the announcement, if it happens, comes
            after results.
          </li>
          <li>
            <strong>No vendor swaps.</strong> Even if the existing software,
            consultancy, or rating agency is clearly suboptimal, do not change
            it in the first thirty days. Inheriting someone else's vendor
            choices is part of the job; replacing them is a quarter-three
            decision, not a week-three decision.
          </li>
        </ul>

        <h2>The quiet point</h2>
        <p>
          The reason a fractional CSO can compress what would otherwise be a
          six-month onboarding is not because they are smarter. It is because
          they have done these first thirty days at five or six other
          companies, and they have learned, painfully, what to skip.
        </p>
        <p>
          The promise to a client in the first month is therefore unromantic
          but specific: <em>by day thirty, you will have a clearer picture of
          your sustainability function than you have ever had, you will have
          paused at least three things that were quietly draining time, and you
          will have shipped one defensible artefact that the previous setup
          could not.</em> Everything else - the strategy, the public-facing
          narrative, the long-arc decisions - lives in months two through
          twelve.
        </p>
        <p>
          The first thirty days are deliberately small. That is what makes the
          rest of the engagement large.
        </p>
      </>
    ),
  },
]

export function getBlogBySlug(slug) {
  return blogs.find((b) => b.slug === slug)
}

export function formatDate(iso) {
  if (!iso) return ''
  const d = new Date(iso)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
