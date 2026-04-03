import { useEffect, useState } from 'react'
import { defaultBarbershopSlug, fetchBackendResource } from '@/lib/backend'
import type { DataMode } from '@/lib/data-source'
import { formatSyncLabel } from '@/lib/formatters'
import type { StatusTone } from '@/features/shared/components/StatusBadge'

type AgendaApiItem = {
  channel: string | null
  customer: {
    name: string
  } | null
  id: number | string
  scheduled_end_at: {
    local: string
  } | null
  scheduled_start_at: {
    local: string
  }
  service: {
    name: string
  } | null
  status: string
}

type AgendaApiResponse = {
  generated_at?: string
  items: AgendaApiItem[]
  summary: {
    completed: number
    scheduled: number
    total: number
  }
}

export type AgendaAppointmentItem = {
  channel: string | null
  customerName: string
  id: number | string
  scheduledEndAt: string | null
  scheduledStartAt: string
  serviceName: string
  status: string
}

export type AgendaOverview = {
  completedCount: number
  confirmedCount: number
  detail: string
  items: AgendaAppointmentItem[]
  lastSyncLabel: string
  mode: DataMode
  nextWindowLabel: string
  sourceLabel: string
  statusTone: StatusTone
  totalToday: number
}

function createDateAt(hour: number, minute: number) {
  const base = new Date()
  base.setHours(hour, minute, 0, 0)
  return base
}

function buildFallbackItems(): AgendaAppointmentItem[] {
  return [
    {
      channel: 'whatsapp',
      customerName: 'Cliente Demo',
      id: 'fallback-1',
      scheduledEndAt: createDateAt(10, 45).toISOString(),
      scheduledStartAt: createDateAt(10, 0).toISOString(),
      serviceName: 'Corte Tradicional',
      status: 'completed',
    },
    {
      channel: 'app',
      customerName: 'Bruno Lima',
      id: 'fallback-2',
      scheduledEndAt: createDateAt(14, 30).toISOString(),
      scheduledStartAt: createDateAt(14, 0).toISOString(),
      serviceName: 'Barba Completa',
      status: 'scheduled',
    },
    {
      channel: 'balcao',
      customerName: 'Henrique Souza',
      id: 'fallback-3',
      scheduledEndAt: createDateAt(16, 15).toISOString(),
      scheduledStartAt: createDateAt(15, 30).toISOString(),
      serviceName: 'Combo Corte + Barba',
      status: 'scheduled',
    },
  ]
}

const timeFormatter = new Intl.DateTimeFormat('pt-BR', {
  hour: '2-digit',
  minute: '2-digit',
})

const initialState: AgendaOverview = {
  completedCount: 0,
  confirmedCount: 0,
  detail: 'Lendo agenda do dia.',
  items: [],
  lastSyncLabel: 'Sincronizando agenda',
  mode: 'loading',
  nextWindowLabel: 'Aguardando horarios',
  sourceLabel: 'Laravel agenda',
  statusTone: 'neutral',
  totalToday: 0,
}

function buildOverviewFromItems(
  items: AgendaAppointmentItem[],
  mode: DataMode,
  detail: string,
  sourceLabel: string,
  statusTone: StatusTone,
  lastSyncLabel: string,
): AgendaOverview {
  const completedCount = items.filter((item) => item.status === 'completed').length
  const confirmedCount = items.filter((item) => item.status === 'scheduled' || item.status === 'confirmed').length
  const now = Date.now()
  const nextItem = items.find((item) => new Date(item.scheduledStartAt).getTime() >= now) ?? items[0]

  return {
    completedCount,
    confirmedCount,
    detail,
    items,
    lastSyncLabel,
    mode,
    nextWindowLabel: nextItem
      ? `${timeFormatter.format(new Date(nextItem.scheduledStartAt))} · ${nextItem.customerName}`
      : 'Sem fila para hoje',
    sourceLabel,
    statusTone,
    totalToday: items.length,
  }
}

function buildFallbackOverview(reason: string): AgendaOverview {
  return buildOverviewFromItems(
    buildFallbackItems(),
    'fallback',
    reason,
    'Fallback local',
    'neutral',
    'Agenda demo carregada',
  )
}

export function useAgendaOverview() {
  const [overview, setOverview] = useState<AgendaOverview>(initialState)

  useEffect(() => {
    const controller = new AbortController()
    let active = true

    async function loadOverview() {
      const today = new Date().toISOString().slice(0, 10)

      try {
        const response = await fetchBackendResource<AgendaApiResponse>(
          '/agenda',
          {
            barbershop_slug: defaultBarbershopSlug,
            date: today,
          },
          controller.signal,
        )

        if (!active || controller.signal.aborted) {
          return
        }

        const items = response.items.map((appointment) => ({
          channel: appointment.channel,
          customerName: appointment.customer?.name ?? 'Cliente nao identificado',
          id: appointment.id,
          scheduledEndAt: appointment.scheduled_end_at?.local ?? null,
          scheduledStartAt: appointment.scheduled_start_at.local,
          serviceName: appointment.service?.name ?? 'Servico nao vinculado',
          status: appointment.status,
        }))

        setOverview(
          buildOverviewFromItems(
            items,
            'live',
            items.length
              ? 'Agenda do dia sincronizada com o backend Laravel.'
              : 'Sem agendamentos retornados para a janela de hoje.',
            'Laravel agenda',
            'positive',
            formatSyncLabel(response.generated_at),
          ),
        )
      } catch (error) {
        if (!active || controller.signal.aborted) {
          return
        }

        setOverview(
          buildFallbackOverview(error instanceof Error ? error.message : 'Falha inesperada ao ler a agenda.'),
        )
      }
    }

    void loadOverview()

    return () => {
      active = false
      controller.abort()
    }
  }, [])

  return overview
}
