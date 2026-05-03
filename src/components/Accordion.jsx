import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

export default function Accordion({ items, defaultOpenIndex = -1 }) {
  const [open, setOpen] = useState(defaultOpenIndex)

  return (
    <ul className="divide-y divide-ink/10 rounded-3xl border border-ink/10 bg-white shadow-soft overflow-hidden">
      {items.map((it, i) => {
        const isOpen = open === i
        return (
          <li key={it.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="w-full flex items-start justify-between gap-6 text-left px-6 md:px-8 py-5 md:py-6 transition-colors hover:bg-moss-50/60"
            >
              <span className="font-display text-lg md:text-xl text-ink text-pretty pr-2">
                {it.q}
              </span>
              <span
                className={`shrink-0 mt-1 h-9 w-9 inline-flex items-center justify-center rounded-full transition ${
                  isOpen
                    ? 'bg-forest text-cream rotate-0'
                    : 'bg-moss-100 text-forest'
                }`}
              >
                {isOpen ? (
                  <Minus className="h-4 w-4" />
                ) : (
                  <Plus className="h-4 w-4" />
                )}
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 md:px-8 pb-6 md:pb-8 text-ink-soft text-pretty leading-relaxed">
                  {it.a}
                </div>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
