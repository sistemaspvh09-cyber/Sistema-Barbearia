import { useMemo, useState } from 'react'
import { OverviewPanel } from '@/features/shared/components/OverviewPanel'
import { MetricTile } from '@/features/shared/components/MetricTile'
import { useAuthSession } from '@/features/auth/useAuthSession'

type AuthSessionPanelProps = {
  isFocused?: boolean
}

function humanizeAuthMode(mode: string) {
  switch (mode) {
    case 'authenticated':
      return 'Autenticado'
    case 'guest':
      return 'Desconectado'
    case 'error':
      return 'Erro'
    default:
      return 'Carregando'
  }
}

export function AuthSessionPanel({ isFocused = false }: AuthSessionPanelProps) {
  const auth = useAuthSession()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(true)
  const [barbershopSlug, setBarbershopSlug] = useState('')
  const [localError, setLocalError] = useState<string | null>(null)

  const statusText = useMemo(() => humanizeAuthMode(auth.mode), [auth.mode])
  const detail =
    auth.mode === 'authenticated'
      ? 'Sessao ativa via Sanctum. Use login, troca de unidade e logout sem recarregar a pagina.'
      : auth.mode === 'error'
        ? auth.error ?? 'Falha ao carregar a sessao.'
        : 'Autenticacao pronta para login de producao.'

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLocalError(null)

    try {
      await auth.login(email, password, remember)
      setPassword('')
    } catch (error) {
      setLocalError(error instanceof Error ? error.message : 'Falha ao autenticar.')
    }
  }

  async function handleSwitchBarbershop(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLocalError(null)

    try {
      await auth.switchBarbershop(undefined, barbershopSlug.trim())
    } catch (error) {
      setLocalError(error instanceof Error ? error.message : 'Falha ao trocar de unidade.')
    }
  }

  const errorMessage = localError ?? auth.error

  return (
    <OverviewPanel
      title="Acesso"
      subtitle="auth"
      statusText={statusText}
      statusTone={auth.mode === 'authenticated' ? 'positive' : auth.mode === 'error' ? 'danger' : 'neutral'}
      detail={detail}
      footer={auth.loading ? 'Sincronizando sessao' : auth.user ? `Usuario ${auth.user.id}` : 'Sessao local pronta'}
      isFocused={isFocused}
    >
      <div className="grid gap-3 md:grid-cols-2">
        <MetricTile
          label="usuario"
          value={auth.user?.name ?? 'Anonimo'}
          detail={auth.user?.email ?? 'Aguardando login'}
        />
        <MetricTile
          label="unidade"
          value={auth.barbershop?.name ?? 'Nenhuma'}
          detail={auth.barbershop?.slug ?? 'Selecione uma barbearia'}
        />
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-2">
        <form onSubmit={handleLogin} className="space-y-3 rounded-[22px] border border-outline-variant/20 bg-black/10 p-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-on-surface-variant">
              Login
            </p>
            <h4 className="mt-1 text-base font-semibold text-on-surface">Entrar com a sessao real</h4>
          </div>

          <label className="block">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-on-surface-variant">
              Email
            </span>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="admin@barbearia.com"
              className="mt-2 h-11 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-primary-container/40"
            />
          </label>

          <label className="block">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-on-surface-variant">
              Senha
            </span>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Senha do usuario"
              className="mt-2 h-11 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-primary-container/40"
            />
          </label>

          <label className="flex items-center gap-2 text-sm text-on-surface-variant">
            <input
              checked={remember}
              onChange={(event) => setRemember(event.target.checked)}
              type="checkbox"
              className="h-4 w-4 rounded border-white/20 bg-white/5 text-primary-container focus:ring-primary-container"
            />
            Manter sessao ativa
          </label>

          {errorMessage ? (
            <p className="rounded-2xl border border-danger-container/30 bg-danger-container/10 px-3 py-2 text-sm text-danger-container">
              {errorMessage}
            </p>
          ) : null}

          <div className="flex flex-wrap gap-2">
            <button
              type="submit"
              disabled={auth.loading}
              className="inline-flex h-11 items-center justify-center rounded-2xl bg-primary-container px-4 text-sm font-semibold text-on-primary transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {auth.loading ? 'Carregando...' : 'Entrar'}
            </button>
            <button
              type="button"
              onClick={async () => {
                setLocalError(null)
                try {
                  await auth.logout()
                } catch (error) {
                  setLocalError(error instanceof Error ? error.message : 'Falha ao encerrar a sessao.')
                }
              }}
              className="inline-flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Sair
            </button>
            <button
              type="button"
              onClick={async () => {
                setLocalError(null)
                try {
                  await auth.refresh()
                } catch (error) {
                  setLocalError(error instanceof Error ? error.message : 'Falha ao recarregar a sessao.')
                }
              }}
              className="inline-flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Recarregar
            </button>
          </div>
        </form>

        <form
          onSubmit={handleSwitchBarbershop}
          className="space-y-3 rounded-[22px] border border-outline-variant/20 bg-black/10 p-4"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-on-surface-variant">
              Unidade
            </p>
            <h4 className="mt-1 text-base font-semibold text-on-surface">Trocar barbearia ativa</h4>
          </div>

          <label className="block">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-on-surface-variant">
              Slug da unidade
            </span>
            <input
              value={barbershopSlug}
              onChange={(event) => setBarbershopSlug(event.target.value)}
              type="text"
              placeholder="barbearia-cabral"
              className="mt-2 h-11 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-primary-container/40"
            />
          </label>

          {errorMessage ? (
            <p className="rounded-2xl border border-danger-container/30 bg-danger-container/10 px-3 py-2 text-sm text-danger-container">
              {errorMessage}
            </p>
          ) : null}

          <div className="flex flex-wrap gap-2">
            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center rounded-2xl bg-primary-container px-4 text-sm font-semibold text-on-primary transition hover:brightness-110"
            >
              Ativar unidade
            </button>
            <button
              type="button"
              onClick={() => setBarbershopSlug(auth.barbershop?.slug ?? '')}
              className="inline-flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Usar unidade atual
            </button>
          </div>
        </form>
      </div>
    </OverviewPanel>
  )
}
