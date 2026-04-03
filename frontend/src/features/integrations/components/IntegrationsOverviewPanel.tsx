import { MetricTile } from '@/features/shared/components/MetricTile'
import { OverviewPanel } from '@/features/shared/components/OverviewPanel'
import type { IntegrationsOverview } from '@/features/integrations/useIntegrationsOverview'

type IntegrationsOverviewPanelProps = {
  overview: IntegrationsOverview
  isFocused?: boolean
}

function humanizeStatus(status: string) {
  switch (status) {
    case 'online':
      return 'Online'
    case 'configured':
      return 'Configurado'
    case 'manual':
      return 'Manual'
    case 'not_configured':
      return 'Nao configurado'
    case 'disabled':
      return 'Desabilitado'
    default:
      return status
  }
}

export function IntegrationsOverviewPanel({
  overview,
  isFocused = false,
}: IntegrationsOverviewPanelProps) {
  return (
    <OverviewPanel
      title="Integracoes"
      subtitle="conectores"
      statusText={overview.sourceLabel}
      statusTone={overview.statusTone}
      detail={overview.detail}
      footer={overview.lastSyncLabel}
      isFocused={isFocused}
    >
      <div className="grid gap-3 md:grid-cols-2">
        <MetricTile label="saudaveis" value={`${overview.healthy}`} detail="Itens operacionais ou configurados." />
        <MetricTile label="monitorados" value={`${overview.total}`} detail="Infraestrutura e conectores em observacao." />
      </div>

      <ul className="mt-4 space-y-2">
        {overview.items.slice(0, 4).map((item) => (
          <li
            key={item.key}
            className="rounded-2xl border border-outline-variant/20 bg-black/10 px-3 py-3"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-on-surface">{item.label}</p>
              <p className="text-[11px] uppercase tracking-[0.18em] text-primary-container">
                {humanizeStatus(item.status)}
              </p>
            </div>
            <p className="mt-2 text-xs leading-5 text-on-surface-variant">{item.details}</p>
          </li>
        ))}
      </ul>
    </OverviewPanel>
  )
}
