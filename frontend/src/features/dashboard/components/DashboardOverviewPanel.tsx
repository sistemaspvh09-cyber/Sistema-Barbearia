import { MetricTile } from '@/features/shared/components/MetricTile'
import { OverviewPanel } from '@/features/shared/components/OverviewPanel'
import type { DashboardOverview } from '@/features/dashboard/useDashboardOverview'

type DashboardOverviewPanelProps = {
  overview: DashboardOverview
  isFocused?: boolean
}

export function DashboardOverviewPanel({ overview, isFocused = false }: DashboardOverviewPanelProps) {
  return (
    <OverviewPanel
      title={overview.appName}
      subtitle="dashboard"
      statusText={overview.sourceLabel}
      statusTone={overview.statusTone}
      detail={overview.detail}
      footer={overview.lastSyncLabel}
      isFocused={isFocused}
    >
      <div className="grid gap-3 md:grid-cols-2">
        <MetricTile
          label="backend"
          value={overview.backendStatus === 'online' ? 'Online' : 'Offline'}
          detail={overview.mode === 'live' ? 'Shell conectada ao Laravel.' : 'Resumo resiliente para nao travar a UI.'}
        />
        <MetricTile
          label="ambiente"
          value={overview.environment}
          detail={`${overview.endpointCount} endpoints detectados no prefixo da API.`}
        />
        <MetricTile label="laravel" value={overview.laravelVersion} detail="Versao reportada pelo backend." />
        <MetricTile label="runtime" value={overview.phpVersion} detail={`Timezone ${overview.timezone}.`} />
      </div>
    </OverviewPanel>
  )
}
