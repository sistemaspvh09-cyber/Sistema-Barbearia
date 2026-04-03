import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  fetchAuthSession,
  loginWithPassword,
  logoutSession,
  switchBarbershop as switchBarbershopRequest,
  type AuthBarbershopPayload,
  type AuthMembershipPayload,
  type AuthSessionPayload,
  type AuthUserPayload,
} from '@/lib/auth-api'

type AuthMode = 'loading' | 'guest' | 'authenticated' | 'error'

export type AuthSessionState = {
  barbershop: AuthBarbershopPayload | null
  error: string | null
  loading: boolean
  membership: AuthMembershipPayload | null
  mode: AuthMode
  user: AuthUserPayload | null
}

const initialState: AuthSessionState = {
  barbershop: null,
  error: null,
  loading: true,
  membership: null,
  mode: 'loading',
  user: null,
}

function applySession(payload: AuthSessionPayload | null): AuthSessionState {
  if (!payload) {
    return {
      barbershop: null,
      error: null,
      loading: false,
      membership: null,
      mode: 'guest',
      user: null,
    }
  }

  return {
    barbershop: payload.barbershop,
    error: null,
    loading: false,
    membership: payload.membership,
    mode: 'authenticated',
    user: payload.user,
  }
}

function buildErrorState(message: string): AuthSessionState {
  return {
    barbershop: null,
    error: message,
    loading: false,
    membership: null,
    mode: 'error',
    user: null,
  }
}

export function useAuthSession() {
  const [state, setState] = useState<AuthSessionState>(initialState)

  const refresh = useCallback(async () => {
    try {
      const payload = await fetchAuthSession()
      setState(applySession(payload))
      return payload
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Falha inesperada ao carregar a sessao.'
      setState(buildErrorState(message))
      throw error
    }
  }, [])

  useEffect(() => {
    const controller = new AbortController()

    void fetchAuthSession(controller.signal)
      .then((payload) => {
        setState(applySession(payload))
      })
      .catch((error) => {
        if (controller.signal.aborted) {
          return
        }

        const message = error instanceof Error ? error.message : 'Falha inesperada ao carregar a sessao.'
        setState({
          barbershop: null,
          error: message,
          loading: false,
          membership: null,
          mode: 'error',
          user: null,
        })
      })

    return () => {
      controller.abort()
    }
  }, [])

  const actions = useMemo(
    () => ({
      async login(email: string, password: string, remember = false) {
        try {
          const payload = await loginWithPassword({ email, password, remember })
          setState(applySession(payload))
          return payload
        } catch (error) {
          const message = error instanceof Error ? error.message : 'Falha ao autenticar.'
          setState(buildErrorState(message))
          throw error
        }
      },
      async logout() {
        try {
          await logoutSession()
          setState(applySession(null))
        } catch (error) {
          const message = error instanceof Error ? error.message : 'Falha ao encerrar a sessao.'
          setState(buildErrorState(message))
          throw error
        }
      },
      async switchBarbershop(barbershopId?: number, barbershopSlug?: string) {
        try {
          const payload = await switchBarbershopRequest({
            barbershop_id: barbershopId,
            barbershop_slug: barbershopSlug,
          })
          setState(applySession(payload))
          return payload
        } catch (error) {
          const message = error instanceof Error ? error.message : 'Falha ao trocar de unidade.'
          setState(buildErrorState(message))
          throw error
        }
      },
      refresh,
    }),
    [refresh],
  )

  return {
    ...state,
    ...actions,
  }
}
