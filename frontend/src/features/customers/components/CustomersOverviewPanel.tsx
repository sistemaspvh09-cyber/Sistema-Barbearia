import { MetricTile } from '@/features/shared/components/MetricTile'
import { OverviewPanel } from '@/features/shared/components/OverviewPanel'
import { formatCompactDateTime } from '@/lib/formatters'
import type { CustomersOverview } from '@/features/customers/useCustomersOverview'

type CustomersOverviewPanelProps = {
  overview: CustomersOverview
  isFocused?: boolean
}

export function CustomersOverviewPanel({
  overview,
  isFocused = false,
}: CustomersOverviewPanelProps) {
  return (
    <OverviewPanel
      title="Clientes"
      subtitle="crm"
      statusText={overview.sourceLabel}
      statusTone={overview.statusTone}
      detail={overview.detail}
      footer={overview.lastSyncLabel}
      isFocused={isFocused}
    >
      <div className="grid gap-3 md:grid-cols-3">
        <MetricTile label="ativos" value={`${overview.total}`} detail="Base total carregada para a unidade." />
        <MetricTile label="vip" value={`${overview.vip}`} detail="Clientes com fidelidade acima da faixa premium." />
        <MetricTile
          label="aniversarios"
          value={`${overview.birthdaysThisMonth}`}
          detail="Clientes com aniversario no mes corrente."
        />
      </div>

      <ul className="mt-4 space-y-2">
        {overview.items.slice(0, 4).map((customer) => (
          <li
            key={customer.id}
            className="flex items-center justify-between gap-3 rounded-2xl border border-outline-variant/20 bg-black/10 px-3 py-3"
          >
            <div>
              <p className="text-sm font-semibold text-on-surface">{customer.name}</p>
              <p className="mt-1 text-xs leading-5 text-on-surface-variant">
                Ultima visita: {formatCompactDateTime(customer.lastVisitAt)}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-primary-container">{customer.loyaltyPoints} pts</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-on-surface-variant">
                {customer.totalVisits} visitas
              </p>
            </div>
          </li>
        ))}
      </ul>
    </OverviewPanel>
  )
}
