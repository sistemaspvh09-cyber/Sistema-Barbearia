import { useEffect, useState } from 'react'
import { defaultBarbershopSlug, fetchBackendResource } from '@/lib/backend'
import type { DataMode } from '@/lib/data-source'
import { formatSyncLabel } from '@/lib/formatters'
import type { StatusTone } from '@/features/shared/components/StatusBadge'

type FinanceApiCharge = {
  customer: {
    name: string
  } | null
  due_at: {
    local: string
  } | null
  id: number | string
  paid_at: {
    local: string
  } | null
  payment_method: string | null
  status: string
  total_cents: number
}

type FinanceApiResponse = {
  generated_at?: string
  recent_charges: FinanceApiCharge[]
  summary: {
    charge_count: number
    paid_cents: number
    pending_cents: number
    total_cents: number
  }
}

export type FinancialChargeItem = {
  customerName: string
  dueAt: string | null
  id: number | string
  paidAt: string | null
  paymentMethod: string | null
  status: string
  totalCents: number
}

export type FinancialOverview = {
  chargeCount: number
  detail: string
  grossCents: number
  items: FinancialChargeItem[]
  lastSyncLabel: string
  mode: DataMode
  paidCents: number
  pendingCents: number
  sourceLabel: string
  statusTone: StatusTone
}

function createTimestampAt(hour: number, minute: number) {
  const base = new Date()
  base.setHours(hour, minute, 0, 0)
  return base.toISOString()
}

const fallbackItems: FinancialChargeItem[] = [
  {
    customerName: 'Cliente Demo',
    dueAt: createTimestampAt(15, 0),
    id: 'charge-fallback-1',
    paidAt: createTimestampAt(14, 50),
    paymentMethod: 'cash',
    status: 'paid',
    totalCents: 4500,
  },
  {
    customerName: 'Bruno Lima',
    dueAt: createTimestampAt(18, 0),
    id: 'charge-fallback-2',
    paidAt: null,
    paymentMethod: 'pix',
    status: 'pending',
    totalCents: 7000,
  },
]

const initialState: FinancialOverview = {
  chargeCount: 0,
  detail: 'Carregando cobrancas recentes.',
  grossCents: 0,
  items: [],
  lastSyncLabel: 'Sincronizando financeiro',
  mode: 'loading',
  paidCents: 0,
  pendingCents: 0,
  sourceLabel: 'Laravel financeiro',
  statusTone: 'neutral',
}

function buildFallbackOverview(reason: string): FinancialOverview {
  const grossCents = fallbackItems.reduce((total, item) => total + item.totalCents, 0)
  const paidCents = fallbackItems
    .filter((item) => item.status === 'paid')
    .reduce((total, item) => total + item.totalCents, 0)

  return {
    chargeCount: fallbackItems.length,
    detail: reason,
    grossCents,
    items: fallbackItems,
    lastSyncLabel: 'Financeiro demo carregado',
    mode: 'fallback',
    paidCents,
    pendingCents: grossCents - paidCents,
    sourceLabel: 'Fallback local',
    statusTone: 'neutral',
  }
}

export function useFinancialOverview() {
  const [overview, setOverview] = useState<FinancialOverview>(initialState)

  useEffect(() => {
    const controller = new AbortController()
    let active = true

    async function loadOverview() {
      const now = new Date()
      const from = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().slice(0, 10)
      const to = new Date(now.getFullYear(), now.getMonth() + 1, 0).toISOString().slice(0, 10)

      try {
        const response = await fetchBackendResource<FinanceApiResponse>(
          '/finance',
          {
            barbershop_slug: defaultBarbershopSlug,
            from,
            to,
          },
          controller.signal,
        )

        if (!active || controller.signal.aborted) {
          return
        }

        setOverview({
          chargeCount: response.summary.charge_count,
          detail:
            response.recent_charges.length > 0
              ? 'Resumo financeiro consolidado a partir do backend Laravel.'
              : 'Nenhuma cobranca retornou para o periodo atual.',
          grossCents: response.summary.total_cents,
          items: response.recent_charges.map((charge) => ({
            customerName: charge.customer?.name ?? 'Cliente nao identificado',
            dueAt: charge.due_at?.local ?? null,
            id: charge.id,
            paidAt: charge.paid_at?.local ?? null,
            paymentMethod: charge.payment_method,
            status: charge.status,
            totalCents: charge.total_cents,
          })),
          lastSyncLabel: formatSyncLabel(response.generated_at),
          mode: 'live',
          paidCents: response.summary.paid_cents,
          pendingCents: response.summary.pending_cents,
          sourceLabel: 'Laravel financeiro',
          statusTone: 'positive',
        })
      } catch (error) {
        if (!active || controller.signal.aborted) {
          return
        }

        setOverview(
          buildFallbackOverview(error instanceof Error ? error.message : 'Falha inesperada ao ler o financeiro.'),
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
