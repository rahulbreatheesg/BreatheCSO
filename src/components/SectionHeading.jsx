export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}) {
  const alignment =
    align === 'center' ? 'text-center mx-auto items-center' : 'text-left'
  return (
    <div className={`flex flex-col gap-5 max-w-3xl ${alignment} ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {title && <h2 className="display-2 text-balance">{title}</h2>}
      {description && <p className="lede text-pretty">{description}</p>}
    </div>
  )
}
