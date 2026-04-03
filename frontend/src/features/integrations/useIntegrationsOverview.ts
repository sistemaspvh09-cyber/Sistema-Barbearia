import { useEffect, useState } from 'react'
import { defaultBarbershopSlug, fetchBackendResource } from '@/lib/backend'
import type { DataMode } from '@/lib/data-source'
import { formatSyncLabel } from '@/lib/formatters'
import type { StatusTone } from '@/features/shared/components/StatusBadge'

type IntegrationApiItem = {
  details: string
  key: string
  label: string
  status: string
}

type IntegrationsApiResponse = {
  checked_at?: string
  items: IntegrationApiItem[]
  summary: {
    healthy: number
    total: number
  }
}

export type IntegrationOverviewItem = IntegrationApiItem

export type IntegrationsOverview = {
  detail: string
  healthy: number
  items: IntegrationOverviewItem[]
  lastSyncLabel: string
  mode: DataMode
  sourceLabel: string
  statusTone: StatusTone
  total: number
}

const fallbackItems: IntegrationOverviewItem[] = [
  {
    details: 'Credenciais Google ainda nao configuradas no ambiente.',
    key: 'calendar',
    label: 'Google Agenda',
    status: 'not_configured',
  },
  {
    details: 'Cobrancas operando no modo manual ate conectar gateway.',
    key: 'payments',
    label: 'Pagamentos',
    status: 'manual',
  },
]

const initialState: IntegrationsOverview = {
  detail: 'Verificando conectores principais.',
  healthy: 0,
  items: [],
  lastSyncLabel: 'Sincronizando integracoes',
  mode: 'loading',
  sourceLabel: 'Laravel integracoes',
  statusTone: 'neutral',
  total: 0,
}

function buildFallbackOverview(reason: string): IntegrationsOverview {
  return {
    detail: reason,
    healthy: 1,
    items: fallbackItems,
    lastSyncLabel: 'Integracoes demo carregadas',
    mode: 'fallback',
    sourceLabel: 'Fallback local',
    statusTone: 'neutral',
    total: fallbackItems.length,
  }
}

export function useIntegrationsOverview() {
  const [overview, setOverview] = useState<IntegrationsOverview>(initialState)

  useEffect(() => {
    const controller = new AbortController()
    let active = true

    async function loadOverview() {
      try {
        const response = await fetchBackendResource<IntegrationsApiResponse>(
          '/integrations/status',
          {
            barbershop_slug: defaultBarbershopSlug,
          },
          controller.signal,
        )

        if (!active || controller.signal.aborted) {
          return
        }

        setOverview({
          detail:
            response.summary.healthy > 0
              ? 'Status consolidado dos conectores e infraestrutura principal.'
              : 'Nenhuma integracao operacional detectada ainda.',
          healthy: response.summary.healthy,
          items: response.items,
          lastSyncLabel: formatSyncLabel(response.checked_at),
          mode: 'live',
          sourceLabel: 'Laravel integracoes',
          statusTone: 'positive',
          total: response.summary.total,
        })
      } catch (error) {
        if (!active || controller.signal.aborted) {
          return
        }

        setOverview(
          buildFallbackOverview(error instanceof Error ? error.message : 'Falha inesperada ao ler integracoes.'),
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
