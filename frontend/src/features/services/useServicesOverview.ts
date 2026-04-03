import { useEffect, useState } from 'react'
import type { DataMode } from '@/lib/data-source'
import { formatSyncLabel } from '@/lib/formatters'
import { supabase, supabaseConfig } from '@/utils/supabase'
import type { StatusTone } from '@/features/shared/components/StatusBadge'

type SupabaseServiceRow = {
  description: string | null
  duration_minutes: number
  id: number | string
  name: string
  price_cents: number
  updated_at?: string | null
}

export type ServiceCatalogItem = {
  description: string | null
  durationMinutes: number
  id: number | string
  name: string
  priceCents: number
}

export type ServicesOverview = {
  averageTicketCents: number
  detail: string
  items: ServiceCatalogItem[]
  lastSyncLabel: string
  mode: DataMode
  sourceLabel: string
  statusTone: StatusTone
  totalActive: number
}

const fallbackItems: ServiceCatalogItem[] = [
  {
    description: 'Corte masculino classico com acabamento.',
    durationMinutes: 45,
    id: 'fallback-corte-tradicional',
    name: 'Corte Tradicional',
    priceCents: 4500,
  },
  {
    description: 'Modelagem com toalha quente e acabamento completo.',
    durationMinutes: 30,
    id: 'fallback-barba-completa',
    name: 'Barba Completa',
    priceCents: 3000,
  },
  {
    description: 'Pacote completo para atendimento premium.',
    durationMinutes: 75,
    id: 'fallback-combo-premium',
    name: 'Combo Corte + Barba',
    priceCents: 7000,
  },
]

const initialState: ServicesOverview = {
  averageTicketCents: 0,
  detail: 'Lendo catalogo de servicos no Supabase.',
  items: [],
  lastSyncLabel: 'Sincronizando servicos',
  mode: 'loading',
  sourceLabel: 'Supabase',
  statusTone: 'neutral',
  totalActive: 0,
}

function buildFallbackOverview(reason: string): ServicesOverview {
  const averageTicketCents = Math.round(
    fallbackItems.reduce((total, item) => total + item.priceCents, 0) / fallbackItems.length,
  )

  return {
    averageTicketCents,
    detail: reason,
    items: fallbackItems,
    lastSyncLabel: 'Fallback local carregado',
    mode: 'fallback',
    sourceLabel: 'Fallback local',
    statusTone: 'neutral',
    totalActive: fallbackItems.length,
  }
}

export function useServicesOverview() {
  const [overview, setOverview] = useState<ServicesOverview>(initialState)

  useEffect(() => {
    let active = true

    async function loadOverview() {
      if (!supabaseConfig.configured) {
        setOverview(buildFallbackOverview(supabaseConfig.reason ?? 'Supabase nao configurado para o catalogo publico.'))
        return
      }

      try {
        const { count, data, error } = await supabase
          .from('services')
          .select('id, name, description, duration_minutes, price_cents, updated_at', { count: 'exact' })
          .eq('is_active', true)
          .order('sort_order', { ascending: true })
          .order('name', { ascending: true })
          .limit(6)

        if (!active) {
          return
        }

        if (error) {
          setOverview(buildFallbackOverview(error.message))
          return
        }

        const rows = (data ?? []) as SupabaseServiceRow[]
        const items = rows.map((service) => ({
          description: service.description,
          durationMinutes: service.duration_minutes,
          id: service.id,
          name: service.name,
          priceCents: service.price_cents,
        }))

        const totalActive = count ?? rows.length
        const averageTicketCents = items.length
          ? Math.round(items.reduce((total, item) => total + item.priceCents, 0) / items.length)
          : 0
        const lastUpdatedAt = rows.reduce<string | null>((latest, row) => {
          if (!row.updated_at) {
            return latest
          }

          if (!latest || row.updated_at > latest) {
            return row.updated_at
          }

          return latest
        }, null)

        setOverview({
          averageTicketCents,
          detail: items.length
            ? 'Catalogo publico lido diretamente do Supabase.'
            : 'Nenhum servico ativo retornou da tabela services.',
          items,
          lastSyncLabel: formatSyncLabel(lastUpdatedAt),
          mode: 'live',
          sourceLabel: 'Supabase publico',
          statusTone: 'positive',
          totalActive,
        })
      } catch (error) {
        if (!active) {
          return
        }

        setOverview(
          buildFallbackOverview(error instanceof Error ? error.message : 'Falha inesperada ao ler services.'),
        )
      }
    }

    void loadOverview()

    return () => {
      active = false
    }
  }, [])

  return overview
}
