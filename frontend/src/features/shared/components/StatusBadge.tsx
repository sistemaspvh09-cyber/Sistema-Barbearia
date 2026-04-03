export type StatusTone = 'neutral' | 'positive' | 'danger'

type StatusBadgeProps = {
  children: string
  tone: StatusTone
}

export function StatusBadge({ children, tone }: StatusBadgeProps) {
  const palette =
    tone === 'positive'
      ? 'bg-emerald-400/15 text-emerald-200'
      : tone === 'danger'
        ? 'bg-rose-400/15 text-rose-200'
        : 'bg-white/10 text-zinc-200'

  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] ${palette}`}>
      {children}
    </span>
  )
}
