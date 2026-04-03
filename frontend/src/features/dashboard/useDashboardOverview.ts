import { useEffect, useState } from 'react'
import {
  backendApiBaseUrl,
  fetchBackendHealth,
  fetchBackendMeta,
  type BackendHealthResponse,
  type BackendMetaResponse,
} from '@/lib/backend'
import type { DataMode } from '@/lib/data-source'
import { formatSyncLabel } from '@/lib/formatters'
import type { StatusTone } from '@/features/shared/components/StatusBadge'

export type DashboardOverview = {
  appName: string
  backendStatus: 'online' | 'offline'
  detail: string
  environment: string
  endpointCount: number
  lastSyncLabel: string
  laravelVersion: string
  mode: DataMode
  phpVersion: string
  sourceLabel: string
  statusTone: StatusTone
  timezone: string
}

const initialState: DashboardOverview = {
  appName: 'BarberPro API',
  backendStatus: 'offline',
  detail: 'Conferindo disponibilidade do backend Laravel.',
  environment: 'carregando',
  endpointCount: 0,
  lastSyncLabel: 'Sincronizando shell',
  laravelVersion: '--',
  mode: 'loading',
  phpVersion: '--',
  sourceLabel: 'Laravel',
  statusTone: 'neutral',
  timezone: 'America/Cuiaba',
}

function buildLiveOverview(health: BackendHealthResponse | null, meta: BackendMetaResponse | null): DashboardOverview {
  const generatedAt = health?.timestamp ?? meta?.generated_at ?? null
  const endpointCount = Object.keys(meta?.endpoints ?? {}).length

  return {
    appName: meta?.name ?? health?.service ?? 'BarberPro API',
    backendStatus: health?.status === 'ok' ? 'online' : 'offline',
    detail: `Laravel respondeu em ${backendApiBaseUrl}.`,
    environment: meta?.environment ?? 'local',
    endpointCount,
    lastSyncLabel: formatSyncLabel(generatedAt),
    laravelVersion: meta?.version ?? '--',
    mode: 'live',
    phpVersion: meta?.php_version ?? '--',
    sourceLabel: 'Laravel ativo',
    statusTone: health?.status === 'ok' ? 'positive' : 'neutral',
    timezone: meta?.timezone ?? 'America/Cuiaba',
  }
}

function buildFallbackOverview(reason: string): DashboardOverview {
  return {
    appName: 'BarberPro API',
    backendStatus: 'offline',
    detail: reason,
    environment: 'fallback local',
    endpointCount: 0,
    lastSyncLabel: 'Usando resumo local',
    laravelVersion: '--',
    mode: 'fallback',
    phpVersion: '--',
    sourceLabel: 'Fallback local',
    statusTone: 'danger',
    timezone: 'America/Cuiaba',
  }
}

export function useDashboardOverview() {
  const [overview, setOverview] = useState<DashboardOverview>(initialState)

  useEffect(() => {
    const controller = new AbortController()
    let active = true

    async function loadOverview() {
      const [healthResult, metaResult] = await Promise.allSettled([
        fetchBackendHealth(controller.signal),
        fetchBackendMeta(controller.signal),
      ])

      if (!active || controller.signal.aborted) {
        return
      }

      const health = healthResult.status === 'fulfilled' ? healthResult.value : null
      const meta = metaResult.status === 'fulfilled' ? metaResult.value : null

      if (health || meta) {
        setOverview(buildLiveOverview(health, meta))
        return
      }

      const failureReason =
        healthResult.status === 'rejected'
          ? healthResult.reason instanceof Error
            ? healthResult.reason.message
            : 'Falha ao consultar /health.'
          : metaResult.status === 'rejected'
            ? metaResult.reason instanceof Error
              ? metaResult.reason.message
              : 'Falha ao consultar /meta.'
            : 'Laravel indisponivel.'

      setOverview(buildFallbackOverview(failureReason))
    }

    void loadOverview()

    return () => {
      active = false
      controller.abort()
    }
  }, [])

  return overview
}
