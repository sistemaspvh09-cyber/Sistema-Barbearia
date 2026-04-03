import { MetricTile } from '@/features/shared/components/MetricTile'
import { OverviewPanel } from '@/features/shared/components/OverviewPanel'
import { formatShortTime } from '@/lib/formatters'
import type { AgendaOverview } from '@/features/agenda/useAgendaOverview'

type AgendaOverviewPanelProps = {
  overview: AgendaOverview
  isFocused?: boolean
}

function humanizeStatus(status: string) {
  switch (status) {
    case 'completed':
      return 'Concluido'
    case 'confirmed':
      return 'Confirmado'
    case 'scheduled':
      return 'Agendado'
    default:
      return status
  }
}

export function AgendaOverviewPanel({ overview, isFocused = false }: AgendaOverviewPanelProps) {
  return (
    <OverviewPanel
      title="Agenda"
      subtitle="operacao diaria"
      statusText={overview.sourceLabel}
      statusTone={overview.statusTone}
      detail={overview.detail}
      footer={overview.lastSyncLabel}
      isFocused={isFocused}
    >
      <div className="grid gap-3 md:grid-cols-3">
        <MetricTile label="hoje" value={`${overview.totalToday}`} detail="Atendimentos carregados para a data corrente." />
        <MetricTile label="na fila" value={`${overview.confirmedCount}`} detail={overview.nextWindowLabel} />
        <MetricTile label="concluidos" value={`${overview.completedCount}`} detail="Slots ja encerrados na amostra atual." />
      </div>

      <ul className="mt-4 space-y-2">
        {overview.items.slice(0, 4).map((appointment) => (
          <li
            key={appointment.id}
            className="flex items-center justify-between gap-3 rounded-2xl border border-outline-variant/20 bg-black/10 px-3 py-3"
          >
            <div>
              <p className="text-sm font-semibold text-on-surface">{appointment.customerName}</p>
              <p className="mt-1 text-xs leading-5 text-on-surface-variant">
                {appointment.serviceName} · {appointment.channel ?? 'canal interno'}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-primary-container">
                {formatShortTime(appointment.scheduledStartAt)}
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-on-surface-variant">
                {humanizeStatus(appointment.status)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </OverviewPanel>
  )
}
