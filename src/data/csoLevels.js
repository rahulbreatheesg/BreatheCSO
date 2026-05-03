// Three tiers we use to slot incoming sustainability leaders.
// Pass `inquiry` via react-router state to pre-fill the contact form.
const csoLevels = [
  {
    id: 'level-1',
    tag: 'Level 01',
    name: 'Contributor CSO',
    horizon: '1 - 5 years',
    pitch:
      'Early-career sustainability operators who pair with a senior fractional lead. They handle the careful, hands-on work - data trails, reporting drafts, supplier outreach, internal coordination - so the senior CSO can spend their time where seniority is actually needed.',
    fits: [
      '1 to 5 years inside an ESG, sustainability or climate function.',
      'Strong on execution - data, frameworks, internal coordination.',
      'Pairs with a Level 02 / 03 lead on the execution side of the work.',
    ],
    inquiry: 'Join the network - Level 01 (Contributor CSO)',
  },
  {
    id: 'level-2',
    tag: 'Level 02',
    name: 'Senior Fractional CSO',
    horizon: '6 - 10 years',
    pitch:
      'Operators who have built or led pieces of a sustainability function before. They walk into mid-market companies, own the function end-to-end, and stick around long enough to make the next leader unnecessary.',
    fits: [
      '6 to 10 years across ESG, sustainability or climate roles.',
      'Comfortable across strategy, disclosure, climate roadmap and people.',
      'Typical engagements 6 - 18 months, embedded part-time.',
    ],
    inquiry: 'Join the network - Level 02 (Senior Fractional CSO)',
    featured: true,
  },
  {
    id: 'level-3',
    tag: 'Level 03',
    name: 'Lead / Executive CSO',
    horizon: '10+ years',
    pitch:
      'Board-facing leaders who have been a CSO, head of sustainability, or equivalent. They hold enterprise mandates, partner with the C-suite and represent the company externally - to investors, regulators and customers.',
    fits: [
      '10+ years; held CSO / Head-of-Sustainability roles or equivalent.',
      'Comfortable with boards, investor calls and regulator conversations.',
      'Typical engagements 12 - 24 months, embedded part-time.',
    ],
    inquiry: 'Join the network - Level 03 (Lead / Executive CSO)',
  },
]

export default csoLevels
