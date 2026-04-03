import { MetricTile } from '@/features/shared/components/MetricTile'
import { OverviewPanel } from '@/features/shared/components/OverviewPanel'
import { formatCompactDateTime, formatCurrency } from '@/lib/formatters'
import type { FinancialOverview } from '@/features/financial/useFinancialOverview'

type FinancialOverviewPanelProps = {
  overview: FinancialOverview
  isFocused?: boolean
}

function humanizeChargeStatus(status: string) {
  switch (status) {
    case 'paid':
      return 'Pago'
    case 'pending':
      return 'Pendente'
    default:
      return status
  }
}

export function FinancialOverviewPanel({ overview, isFocused = false }: FinancialOverviewPanelProps) {
  return (
    <OverviewPanel
      title="Financeiro"
      subtitle="recebimentos"
      statusText={overview.sourceLabel}
      statusTone={overview.statusTone}
      detail={overview.detail}
      footer={overview.lastSyncLabel}
      isFocused={isFocused}
    >
      <div className="grid gap-3 md:grid-cols-3">
        <MetricTile label="cobrancas" value={`${overview.chargeCount}`} detail="Itens recentes considerados neste resumo." />
        <MetricTile label="recebido" value={formatCurrency(overview.paidCents)} detail="Total conciliado como pago." />
        <MetricTile label="em aberto" value={formatCurrency(overview.pendingCents)} detail="Saldo pendente na mesma amostra." />
      </div>

      <ul className="mt-4 space-y-2">
        {overview.items.slice(0, 4).map((charge) => (
          <li
            key={charge.id}
            className="flex items-center justify-between gap-3 rounded-2xl border border-outline-variant/20 bg-black/10 px-3 py-3"
          >
            <div>
              <p className="text-sm font-semibold text-on-surface">{charge.customerName}</p>
              <p className="mt-1 text-xs leading-5 text-on-surface-variant">
                {charge.paidAt ? formatCompactDateTime(charge.paidAt) : formatCompactDateTime(charge.dueAt)}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-primary-container">{formatCurrency(charge.totalCents)}</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-on-surface-variant">
                {humanizeChargeStatus(charge.status)} · {charge.paymentMethod ?? 'manual'}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </OverviewPanel>
  )
}
