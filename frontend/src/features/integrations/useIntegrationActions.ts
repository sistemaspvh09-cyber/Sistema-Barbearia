import { useCallback, useState } from 'react'
import {
  fetchGoogleAuthorizationUrl,
  storeInfinitePayConfig,
} from '@/lib/auth-api'

export type InfinitePayConfigInput = {
  barbershopSlug: string
  handle: string
  redirectUrl?: string
  webhookUrl?: string
  active?: boolean
}

type BusyAction = 'google' | 'infinitepay' | null

export function useIntegrationActions() {
  const [busyAction, setBusyAction] = useState<BusyAction>(null)
  const [error, setError] = useState<string | null>(null)

  const openGoogleAuthorization = useCallback(async (payload: { barbershopSlug: string; calendarId?: string }) => {
    setBusyAction('google')
    setError(null)

    try {
      const response = await fetchGoogleAuthorizationUrl(
        {
          barbershop_slug: payload.barbershopSlug,
          calendar_id: payload.calendarId,
        },
      )

      return response.authorization_url
    } catch (requestError) {
      const message = requestError instanceof Error ? requestError.message : 'Falha ao gerar URL OAuth do Google.'
      setError(message)
      throw requestError
    } finally {
      setBusyAction(null)
    }
  }, [])

  const saveInfinitePayConfig = useCallback(async (payload: InfinitePayConfigInput) => {
    setBusyAction('infinitepay')
    setError(null)

    try {
      return await storeInfinitePayConfig(
        {
          barbershop_slug: payload.barbershopSlug,
          handle: payload.handle,
          redirect_url: payload.redirectUrl,
          webhook_url: payload.webhookUrl,
          is_active: payload.active,
        },
      )
    } catch (requestError) {
      const message = requestError instanceof Error ? requestError.message : 'Falha ao salvar configuracao InfinitePay.'
      setError(message)
      throw requestError
    } finally {
      setBusyAction(null)
    }
  }, [])

  const clearError = useCallback(() => {
    setError(null)
  }, [])

  return {
    busyAction,
    clearError,
    error,
    openGoogleAuthorization,
    saveInfinitePayConfig,
  }
}
