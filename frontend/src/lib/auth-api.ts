type JsonRecord = Record<string, unknown>

type RequestOptions = {
  body?: JsonRecord
  signal?: AbortSignal
}

function readCookie(name: string) {
  if (typeof document === 'undefined') {
    return null
  }

  const prefix = `${name}=`

  for (const rawSegment of document.cookie.split(';')) {
    const segment = rawSegment.trim()

    if (segment.startsWith(prefix)) {
      return decodeURIComponent(segment.slice(prefix.length))
    }
  }

  return null
}

async function requestJson<T>(path: string, options: RequestOptions = {}) {
  const csrfToken = readCookie('XSRF-TOKEN')

  const response = await fetch(path, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(csrfToken ? { 'X-XSRF-TOKEN': csrfToken } : {}),
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
    signal: options.signal,
  })

  if (!response.ok) {
    const message = await response.text().catch(() => '')
    throw new Error(message || `Request failed with status ${response.status} at ${path}.`)
  }

  return response.json() as Promise<T>
}

async function requestGetJson<T>(path: string, signal?: AbortSignal) {
  const response = await fetch(path, {
    credentials: 'include',
    headers: {
      Accept: 'application/json',
    },
    signal,
  })

  if (!response.ok) {
    const message = await response.text().catch(() => '')
    throw new Error(message || `Request failed with status ${response.status} at ${path}.`)
  }

  return response.json() as Promise<T>
}

export type AuthUserPayload = {
  active_barbershop_id: number | null
  email: string
  id: number
  name: string
}

export type AuthBarbershopPayload = {
  currency: string
  id: number
  name: string
  slug: string
  timezone: string
}

export type AuthMembershipPayload = {
  barbershop_id: number
  commission_rate: number | string | null
  is_active: boolean
  role: string
}

export type AuthSessionPayload = {
  barbershop: AuthBarbershopPayload | null
  membership: AuthMembershipPayload | null
  user: AuthUserPayload
}

export async function ensureCsrfCookie(signal?: AbortSignal) {
  const response = await fetch('/sanctum/csrf-cookie', {
    credentials: 'include',
    signal,
  })

  if (!response.ok) {
    throw new Error(`Falha ao preparar CSRF cookie (${response.status}).`)
  }
}

export async function fetchAuthSession(signal?: AbortSignal) {
  return requestGetJson<AuthSessionPayload>('/api/v1/auth/me', signal)
}

export async function loginWithPassword(
  payload: {
    email: string
    password: string
    remember?: boolean
  },
  signal?: AbortSignal,
) {
  await ensureCsrfCookie(signal)
  return requestJson<AuthSessionPayload>('/api/v1/auth/login', {
    body: payload,
    signal,
  })
}

export async function logoutSession(signal?: AbortSignal) {
  await ensureCsrfCookie(signal)
  return requestJson<{ status: string }>('/api/v1/auth/logout', {
    signal,
  })
}

export async function switchBarbershop(
  payload: {
    barbershop_id?: number
    barbershop_slug?: string
  },
  signal?: AbortSignal,
) {
  await ensureCsrfCookie(signal)
  return requestJson<AuthSessionPayload>('/api/v1/auth/switch-barbershop', {
    body: payload,
    signal,
  })
}

export async function fetchGoogleAuthorizationUrl(
  payload: {
    barbershop_slug: string
    calendar_id?: string
  },
  signal?: AbortSignal,
) {
  const searchParams = new URLSearchParams()
  searchParams.set('barbershop_slug', payload.barbershop_slug)

  if (payload.calendar_id) {
    searchParams.set('calendar_id', payload.calendar_id)
  }

  return requestGetJson<{ authorization_url: string }>(`/api/v1/integrations/google/authorize?${searchParams.toString()}`, signal)
}

export async function storeInfinitePayConfig(
  payload: {
    barbershop_slug: string
    handle: string
    redirect_url?: string
    webhook_url?: string
    is_active?: boolean
  },
  signal?: AbortSignal,
) {
  await ensureCsrfCookie(signal)
  return requestJson<{ connection: Record<string, unknown> }>('/api/v1/integrations/infinitepay/config', {
    body: payload,
    signal,
  })
}
