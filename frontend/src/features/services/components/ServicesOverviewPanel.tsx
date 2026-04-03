import { MetricTile } from '@/features/shared/components/MetricTile'
import { OverviewPanel } from '@/features/shared/components/OverviewPanel'
import { formatCurrency, formatDurationMinutes } from '@/lib/formatters'
import type { ServicesOverview } from '@/features/services/useServicesOverview'

type ServicesOverviewPanelProps = {
  overview: ServicesOverview
  isFocused?: boolean
}

export function ServicesOverviewPanel({ overview, isFocused = false }: ServicesOverviewPanelProps) {
  return (
    <OverviewPanel
      title="Servicos"
      subtitle="supabase"
      statusText={overview.sourceLabel}
      statusTone={overview.statusTone}
      detail={overview.detail}
      footer={overview.lastSyncLabel}
      isFocused={isFocused}
    >
      <div className="grid gap-3 md:grid-cols-2">
        <MetricTile
          label="ativos"
          value={`${overview.totalActive}`}
          detail="Quantidade de servicos prontos para a vitrine e agenda."
        />
        <MetricTile
          label="ticket medio"
          value={formatCurrency(overview.averageTicketCents)}
          detail="Media calculada sobre a amostra exibida."
        />
      </div>

      <ul className="mt-4 space-y-2">
        {overview.items.slice(0, 4).map((service) => (
          <li
            key={service.id}
            className="flex items-start justify-between gap-3 rounded-2xl border border-outline-variant/20 bg-black/10 px-3 py-3"
          >
            <div>
              <p className="text-sm font-semibold text-on-surface">{service.name}</p>
              <p className="mt-1 text-xs leading-5 text-on-surface-variant">
                {service.description ?? 'Sem descricao publica no momento.'}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-primary-container">{formatCurrency(service.priceCents)}</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-on-surface-variant">
                {formatDurationMinutes(service.durationMinutes)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </OverviewPanel>
  )
}
