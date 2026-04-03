export type BackendHealthResponse = {
  status: string
  service?: string
  timestamp?: string
}

export type BackendMetaResponse = {
  name?: string
  environment?: string
  version?: string
  php_version?: string
  timezone?: string
  api_prefix?: string
  endpoints?: Record<string, string>
  generated_at?: string
}

type QueryPrimitive = string | number | boolean
type QueryValue = QueryPrimitive | null | undefined

function trimTrailingSlashes(value: string) {
  return value.replace(/\/+$/, '')
}

function resolveBackendOrigin() {
  const envOrigin = import.meta.env.VITE_BACKEND_URL?.trim()

  if (envOrigin) {
    return trimTrailingSlashes(envOrigin)
  }

  if (typeof window !== 'undefined' && window.location.port === '8000') {
    return trimTrailingSlashes(window.location.origin)
  }

  return 'http://127.0.0.1:8000'
}

export const backendOrigin = resolveBackendOrigin()
export const backendApiBaseUrl = `${backendOrigin}/api/v1`
export const defaultBarbershopSlug = import.meta.env.VITE_BARBERSHOP_SLUG?.trim() || 'barbearia-cabral'

function buildQueryString(params?: Record<string, QueryValue>) {
  if (!params) {
    return ''
  }

  const searchParams = new URLSearchParams()

  for (const [key, value] of Object.entries(params)) {
    if (value === null || value === undefined || value === '') {
      continue
    }

    searchParams.set(key, String(value))
  }

  const query = searchParams.toString()

  return query ? `?${query}` : ''
}

async function fetchBackendJson<T>(
  path: string,
  signal?: AbortSignal,
  params?: Record<string, QueryValue>,
) {
  const response = await fetch(`${backendApiBaseUrl}${path}${buildQueryString(params)}`, {
    headers: {
      Accept: 'application/json',
    },
    credentials: 'include',
    signal,
  })

  if (!response.ok) {
    throw new Error(`Laravel respondeu com ${response.status} em ${path}.`)
  }

  return response.json() as Promise<T>
}

export function fetchBackendHealth(signal?: AbortSignal) {
  return fetchBackendJson<BackendHealthResponse>('/health', signal)
}

export function fetchBackendMeta(signal?: AbortSignal) {
  return fetchBackendJson<BackendMetaResponse>('/meta', signal)
}

export function fetchBackendResource<T>(
  path: string,
  params?: Record<string, QueryValue>,
  signal?: AbortSignal,
) {
  return fetchBackendJson<T>(path, signal, params)
}
