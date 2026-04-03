import type { ReactNode } from 'react'
import { StatusBadge, type StatusTone } from '@/features/shared/components/StatusBadge'

type OverviewPanelProps = {
  title: string
  subtitle: string
  statusText: string
  statusTone: StatusTone
  detail: string
  footer: string
  isFocused?: boolean
  children: ReactNode
}

export function OverviewPanel({
  title,
  subtitle,
  statusText,
  statusTone,
  detail,
  footer,
  isFocused = false,
  children,
}: OverviewPanelProps) {
  return (
    <section
      className={`rounded-[28px] border p-5 transition ${
        isFocused
          ? 'border-primary-container/45 bg-surface-container shadow-[0_0_0_1px_rgba(200,255,0,0.18)]'
          : 'border-outline-variant/20 bg-surface-container-low/80'
      }`}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-on-surface-variant">
            {subtitle}
          </p>
          <h3 className="mt-2 text-xl font-bold tracking-[-0.04em] text-on-surface">{title}</h3>
        </div>
        <StatusBadge tone={statusTone}>{statusText}</StatusBadge>
      </div>

      <p className="mt-4 text-sm leading-6 text-on-surface-variant">{detail}</p>

      <div className="mt-4">{children}</div>

      <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-outline">{footer}</p>
    </section>
  )
}
