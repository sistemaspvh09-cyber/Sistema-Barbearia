import { useEffect, useState } from 'react'
import { defaultBarbershopSlug, fetchBackendResource } from '@/lib/backend'
import type { DataMode } from '@/lib/data-source'
import { formatSyncLabel } from '@/lib/formatters'
import type { StatusTone } from '@/features/shared/components/StatusBadge'

type CustomersApiItem = {
  id: number | string
  last_visit_at: {
    local: string
  } | null
  loyalty_points: number
  name: string
  total_visits: number
}

type CustomersApiResponse = {
  generated_at?: string
  items: CustomersApiItem[]
  summary: {
    total: number
    vip: number
    birthdays_this_month: number
  }
}

export type CustomerOverviewItem = {
  id: number | string
  lastVisitAt: string | null
  loyaltyPoints: number
  name: string
  totalVisits: number
}

export type CustomersOverview = {
  birthdaysThisMonth: number
  detail: string
  items: CustomerOverviewItem[]
  lastSyncLabel: string
  mode: DataMode
  sourceLabel: string
  statusTone: StatusTone
  total: number
  vip: number
}

const fallbackItems: CustomerOverviewItem[] = [
  {
    id: 'fallback-customer-1',
    lastVisitAt: new Date().toISOString(),
    loyaltyPoints: 120,
    name: 'Cliente Demo',
    totalVisits: 8,
  },
  {
    id: 'fallback-customer-2',
    lastVisitAt: new Date(Date.now() - 86400000).toISOString(),
    loyaltyPoints: 45,
    name: 'Marina Souza',
    totalVisits: 4,
  },
]

const initialState: CustomersOverview = {
  birthdaysThisMonth: 0,
  detail: 'Lendo base de clientes.',
  items: [],
  lastSyncLabel: 'Sincronizando clientes',
  mode: 'loading',
  sourceLabel: 'Laravel CRM',
  statusTone: 'neutral',
  total: 0,
  vip: 0,
}

function buildFallbackOverview(reason: string): CustomersOverview {
  return {
    birthdaysThisMonth: 1,
    detail: reason,
    items: fallbackItems,
    lastSyncLabel: 'CRM demo carregado',
    mode: 'fallback',
    sourceLabel: 'Fallback local',
    statusTone: 'neutral',
    total: fallbackItems.length,
    vip: 1,
  }
}

export function useCustomersOverview() {
  const [overview, setOverview] = useState<CustomersOverview>(initialState)

  useEffect(() => {
    const controller = new AbortController()
    let active = true

    async function loadOverview() {
      try {
        const response = await fetchBackendResource<CustomersApiResponse>(
          '/customers',
          {
            barbershop_slug: defaultBarbershopSlug,
          },
          controller.signal,
        )

        if (!active || controller.signal.aborted) {
          return
        }

        setOverview({
          birthdaysThisMonth: response.summary.birthdays_this_month,
          detail:
            response.items.length > 0
              ? 'Clientes carregados do backend com historico e fidelidade.'
              : 'Nenhum cliente retornou para a barbearia atual.',
          items: response.items.map((customer) => ({
            id: customer.id,
            lastVisitAt: customer.last_visit_at?.local ?? null,
            loyaltyPoints: customer.loyalty_points,
            name: customer.name,
            totalVisits: customer.total_visits,
          })),
          lastSyncLabel: formatSyncLabel(response.generated_at),
          mode: 'live',
          sourceLabel: 'Laravel CRM',
          statusTone: 'positive',
          total: response.summary.total,
          vip: response.summary.vip,
        })
      } catch (error) {
        if (!active || controller.signal.aborted) {
          return
        }

        setOverview(
          buildFallbackOverview(error instanceof Error ? error.message : 'Falha inesperada ao ler clientes.'),
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
