import { useMemo, useState } from 'react'
import { OverviewPanel } from '@/features/shared/components/OverviewPanel'
import { MetricTile } from '@/features/shared/components/MetricTile'
import { defaultBarbershopSlug } from '@/lib/backend'
import { useIntegrationActions } from '@/features/integrations/useIntegrationActions'

type IntegrationActionsPanelProps = {
  googleStatus: string
  infinitePayStatus: string
  isFocused?: boolean
}

function humanizeStatus(value: string) {
  switch (value) {
    case 'online':
      return 'Online'
    case 'configured':
      return 'Configurado'
    case 'manual':
      return 'Manual'
    case 'not_configured':
      return 'Nao configurado'
    case 'disabled':
      return 'Desabilitado'
    default:
      return value
  }
}

export function IntegrationActionsPanel({
  googleStatus,
  infinitePayStatus,
  isFocused = false,
}: IntegrationActionsPanelProps) {
  const actions = useIntegrationActions()
  const origin = useMemo(() => window.location.origin, [])
  const [barbershopSlug, setBarbershopSlug] = useState(defaultBarbershopSlug)
  const [calendarId, setCalendarId] = useState('')
  const [handle, setHandle] = useState('')
  const [redirectUrl, setRedirectUrl] = useState(`${origin}/integrations/infinitepay/return`)
  const [webhookUrl, setWebhookUrl] = useState(`${origin}/api/v1/integrations/infinitepay/webhook`)
  const [lastUrl, setLastUrl] = useState<string | null>(null)
  const [localError, setLocalError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  async function handleGoogleConnect(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLocalError(null)
    setSuccessMessage(null)

    try {
      const authorizationUrl = await actions.openGoogleAuthorization({
        barbershopSlug: barbershopSlug.trim() || defaultBarbershopSlug,
        calendarId: calendarId.trim() || undefined,
      })

      setLastUrl(authorizationUrl)
      window.open(authorizationUrl, '_blank', 'noopener,noreferrer')
      setSuccessMessage('URL OAuth do Google gerada e aberta em nova aba.')
    } catch (error) {
      setLocalError(error instanceof Error ? error.message : 'Falha ao gerar URL OAuth.')
    }
  }

  async function handleInfinitePayConfig(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLocalError(null)
    setSuccessMessage(null)

    try {
      await actions.saveInfinitePayConfig({
        barbershopSlug: barbershopSlug.trim() || defaultBarbershopSlug,
        handle: handle.trim(),
        redirectUrl: redirectUrl.trim() || undefined,
        webhookUrl: webhookUrl.trim() || undefined,
        active: true,
      })

      setSuccessMessage('Configuracao InfinitePay salva com sucesso.')
    } catch (error) {
      setLocalError(error instanceof Error ? error.message : 'Falha ao salvar configuracao InfinitePay.')
    }
  }

  const errorMessage = localError ?? actions.error

  return (
    <OverviewPanel
      title="Integracoes"
      subtitle="google e pagamentos"
      statusText={actions.busyAction ? 'Processando' : 'Pronto'}
      statusTone={errorMessage ? 'danger' : 'positive'}
      detail="Conecte Google Agenda e InfinitePay sem sair da shell nativa do sistema."
      footer={`Google ${humanizeStatus(googleStatus)} · InfinitePay ${humanizeStatus(infinitePayStatus)}`}
      isFocused={isFocused}
    >
      <div className="grid gap-3 md:grid-cols-3">
        <MetricTile label="google" value={humanizeStatus(googleStatus)} detail="OAuth e eventos de agenda." />
        <MetricTile label="infinitepay" value={humanizeStatus(infinitePayStatus)} detail="Checkout e webhook real." />
        <MetricTile label="status" value={actions.busyAction ? 'Sincronizando' : 'Livre'} detail="Acoes prontas." />
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-2">
        <form
          onSubmit={handleGoogleConnect}
          className="space-y-3 rounded-[22px] border border-outline-variant/20 bg-black/10 p-4"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-on-surface-variant">
              Google Agenda
            </p>
            <h4 className="mt-1 text-base font-semibold text-on-surface">Gerar OAuth e vincular calendario</h4>
          </div>

          <label className="block">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-on-surface-variant">
              Slug da barbearia
            </span>
            <input
              value={barbershopSlug}
              onChange={(event) => setBarbershopSlug(event.target.value)}
              type="text"
              className="mt-2 h-11 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-primary-container/40"
            />
          </label>

          <label className="block">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-on-surface-variant">
              Calendar ID opcional
            </span>
            <input
              value={calendarId}
              onChange={(event) => setCalendarId(event.target.value)}
              type="text"
              placeholder="primary"
              className="mt-2 h-11 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-primary-container/40"
            />
          </label>

          <div className="flex flex-wrap gap-2">
            <button
              type="submit"
              disabled={actions.busyAction === 'google'}
              className="inline-flex h-11 items-center justify-center rounded-2xl bg-primary-container px-4 text-sm font-semibold text-on-primary transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {actions.busyAction === 'google' ? 'Gerando...' : 'Abrir OAuth Google'}
            </button>
            <button
              type="button"
              onClick={async () => {
                if (!lastUrl) return
                await navigator.clipboard.writeText(lastUrl)
                setSuccessMessage('URL OAuth copiada.')
              }}
              disabled={!lastUrl}
              className="inline-flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 text-sm font-semibold text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-60"
            >
              Copiar URL
            </button>
          </div>
        </form>

        <form
          onSubmit={handleInfinitePayConfig}
          className="space-y-3 rounded-[22px] border border-outline-variant/20 bg-black/10 p-4"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-on-surface-variant">
              InfinitePay
            </p>
            <h4 className="mt-1 text-base font-semibold text-on-surface">Salvar gateway e webhook</h4>
          </div>

          <label className="block">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-on-surface-variant">
              Handle
            </span>
            <input
              value={handle}
              onChange={(event) => setHandle(event.target.value)}
              type="text"
              placeholder="seu-handle"
              className="mt-2 h-11 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-primary-container/40"
            />
          </label>

          <label className="block">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-on-surface-variant">
              Redirect URL
            </span>
            <input
              value={redirectUrl}
              onChange={(event) => setRedirectUrl(event.target.value)}
              type="url"
              className="mt-2 h-11 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-primary-container/40"
            />
          </label>

          <label className="block">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-on-surface-variant">
              Webhook URL
            </span>
            <input
              value={webhookUrl}
              onChange={(event) => setWebhookUrl(event.target.value)}
              type="url"
              className="mt-2 h-11 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-primary-container/40"
            />
          </label>

          <div className="flex flex-wrap gap-2">
            <button
              type="submit"
              disabled={actions.busyAction === 'infinitepay'}
              className="inline-flex h-11 items-center justify-center rounded-2xl bg-primary-container px-4 text-sm font-semibold text-on-primary transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {actions.busyAction === 'infinitepay' ? 'Salvando...' : 'Salvar InfinitePay'}
            </button>
            <button
              type="button"
              onClick={() => {
                setHandle('')
                setRedirectUrl(`${origin}/integrations/infinitepay/return`)
                setWebhookUrl(`${origin}/api/v1/integrations/infinitepay/webhook`)
              }}
              className="inline-flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Resetar URLs
            </button>
          </div>
        </form>
      </div>

      {errorMessage ? (
        <p className="mt-4 rounded-2xl border border-danger-container/30 bg-danger-container/10 px-3 py-2 text-sm text-danger-container">
          {errorMessage}
        </p>
      ) : null}

      {successMessage ? (
        <p className="mt-3 rounded-2xl border border-primary-container/30 bg-primary-container/10 px-3 py-2 text-sm text-primary-container">
          {successMessage}
        </p>
      ) : null}
    </OverviewPanel>
  )
}
