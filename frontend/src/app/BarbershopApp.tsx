import { Suspense, startTransition, useCallback, useEffect, useMemo, useState } from 'react'
import { AgendaOverviewPanel } from '@/features/agenda/components/AgendaOverviewPanel'
import { useAgendaOverview } from '@/features/agenda/useAgendaOverview'
import { CustomersOverviewPanel } from '@/features/customers/components/CustomersOverviewPanel'
import { useCustomersOverview } from '@/features/customers/useCustomersOverview'
import { DashboardOverviewPanel } from '@/features/dashboard/components/DashboardOverviewPanel'
import { useDashboardOverview } from '@/features/dashboard/useDashboardOverview'
import { FinancialOverviewPanel } from '@/features/financial/components/FinancialOverviewPanel'
import { useFinancialOverview } from '@/features/financial/useFinancialOverview'
import { IntegrationsOverviewPanel } from '@/features/integrations/components/IntegrationsOverviewPanel'
import { useIntegrationsOverview } from '@/features/integrations/useIntegrationsOverview'
import { ServicesOverviewPanel } from '@/features/services/components/ServicesOverviewPanel'
import { useServicesOverview } from '@/features/services/useServicesOverview'
import { StatusBadge } from '@/features/shared/components/StatusBadge'
import {
  appModules,
  appModulesById,
  findModuleByScreenSlug,
  type AppModule,
  type AppModuleId,
} from '@/app/config'
import { stitchPreviewComponents, type StitchScreen } from '@/lib/screenRegistry'

type LocationSelection = {
  moduleId: AppModuleId
  screenSlug: string | null
}

type WorkspaceSelection = {
  moduleId: AppModuleId
  screenSlug: string | null
}

type SidebarEntry = {
  key: string
  label: string
  hint: string
  moduleId: AppModuleId
  screenSlug?: string | null
}

type RouteDescriptor = {
  label: string
  url: string
}

const appModuleIds: AppModuleId[] = [
  'overview',
  'agenda',
  'operacao',
  'clientes',
  'financeiro',
  'integracoes',
  'marketing',
  'acesso',
]

const sidebarPrimaryEntries: SidebarEntry[] = [
  { key: 'dashboard', label: 'Cockpit', hint: 'visao geral', moduleId: 'overview' },
  { key: 'agenda', label: 'Agenda', hint: 'encaixes do dia', moduleId: 'agenda', screenSlug: 'agenda-multi-barbeiro-admin' },
  { key: 'novo-agendamento', label: 'Novo agendamento', hint: 'entrada rapida', moduleId: 'agenda', screenSlug: 'agendamento-sele-ode-servi-o' },
  { key: 'clientes', label: 'Clientes', hint: 'crm', moduleId: 'clientes', screenSlug: 'perfil-detalhado-do-cliente-crm' },
  { key: 'financeiro', label: 'Financeiro', hint: 'caixa e cobranca', moduleId: 'financeiro', screenSlug: 'configura-ofinanceira-admin' },
]

const sidebarManagementEntries: SidebarEntry[] = [
  { key: 'equipe', label: 'Equipe', hint: 'roles e escala', moduleId: 'operacao', screenSlug: 'gest-ode-equipe-admin' },
  { key: 'servicos', label: 'Servicos', hint: 'catalogo e ticket', moduleId: 'operacao', screenSlug: 'configura-ode-servi-os-desktop' },
  { key: 'estoque', label: 'Estoque', hint: 'entradas e controle', moduleId: 'operacao', screenSlug: 'gest-ode-estoque-desktop' },
  { key: 'marketing', label: 'Marketing', hint: 'campanhas', moduleId: 'marketing', screenSlug: 'dashboard-de-marketing-egrowth' },
]

const sidebarIntegrationEntries: SidebarEntry[] = [
  { key: 'google-calendar', label: 'Google Agenda', hint: 'oauth e eventos', moduleId: 'integracoes', screenSlug: 'integra-ogoogle-agenda-admin' },
  { key: 'infinitepay', label: 'InfinitePay', hint: 'checkout e webhook', moduleId: 'integracoes', screenSlug: 'pagamentos-infinitepay' },
  { key: 'webhooks', label: 'Webhooks', hint: 'monitoramento', moduleId: 'integracoes', screenSlug: 'configura-ode-webhooks-admin' },
  { key: 'acesso', label: 'Acesso', hint: 'login e permissoes', moduleId: 'acesso', screenSlug: 'tela-de-login' },
]


function isAppModuleId(value: string | null): value is AppModuleId {
  return value !== null && appModuleIds.includes(value as AppModuleId)
}

function readLocationSelection(): LocationSelection {
  const params = new URLSearchParams(window.location.search)
  const moduleFromUrl = params.get('module')
  const screenSlug = params.get('screen')

  if (moduleFromUrl === 'overview') {
    return {
      moduleId: 'overview',
      screenSlug: null,
    }
  }

  if (isAppModuleId(moduleFromUrl) && moduleFromUrl !== 'overview') {
    return {
      moduleId: moduleFromUrl,
      screenSlug,
    }
  }

  const owner = findModuleByScreenSlug(screenSlug)

  if (owner) {
    return {
      moduleId: owner.id,
      screenSlug,
    }
  }

  return {
    moduleId: 'agenda',
    screenSlug: appModulesById.agenda.defaultScreen.slug,
  }
}

function normalizeWorkspaceSelection(selection: LocationSelection): WorkspaceSelection {
  if (selection.moduleId === 'overview') {
    return {
      moduleId: 'overview',
      screenSlug: null,
    }
  }

  const module = appModulesById[selection.moduleId]
  const screen = module.screens.find((entry) => entry.slug === selection.screenSlug) ?? module.defaultScreen

  return {
    moduleId: module.id,
    screenSlug: screen.slug,
  }
}

function buildMainUrl(moduleId: AppModuleId, screenSlug: string | null) {
  const url = new URL(window.location.href)
  url.searchParams.delete('mode')
  url.searchParams.delete('standalone')

  if (moduleId === 'overview') {
    url.searchParams.set('module', 'overview')
    url.searchParams.delete('screen')
    return url.toString()
  }

  url.searchParams.set('module', moduleId)

  if (screenSlug) {
    url.searchParams.set('screen', screenSlug)
  } else {
    url.searchParams.delete('screen')
  }

  return url.toString()
}

function getScreenSurfaceLabel(screen: StitchScreen) {
  if (/Mobile/i.test(screen.fileName)) {
    return 'Mobile'
  }

  if (/Desktop/i.test(screen.fileName)) {
    return 'Desktop'
  }

  if (/Admin|Painel|Dashboard/i.test(screen.fileName)) {
    return 'Admin'
  }

  return 'Fluxo'
}

function isSidebarEntryActive(entry: SidebarEntry, selection: WorkspaceSelection) {
  if (entry.moduleId !== selection.moduleId) {
    return false
  }

  if (!entry.screenSlug) {
    return true
  }

  return selection.screenSlug === entry.screenSlug
}

function SidebarEntryButton({
  entry,
  selection,
  onSelect,
}: {
  entry: SidebarEntry
  selection: WorkspaceSelection
  onSelect: (entry: SidebarEntry) => void
}) {
  const active = isSidebarEntryActive(entry, selection)

  return (
    <button
      type="button"
      onClick={() => onSelect(entry)}
      className={`rounded-2xl border px-4 py-3 text-left transition ${
        active
          ? 'border-primary-container bg-primary-container/10 text-primary-container'
          : 'border-outline-variant/25 bg-surface-container-low text-on-surface hover:border-primary-container/40'
      }`}
    >
      <span className="block text-[11px] font-semibold uppercase tracking-[0.24em] text-on-surface-variant">
        {entry.hint}
      </span>
      <span className="mt-1 block text-sm font-semibold">{entry.label}</span>
    </button>
  )
}

function SidebarSection({
  title,
  entries,
  selection,
  onSelect,
}: {
  title: string
  entries: SidebarEntry[]
  selection: WorkspaceSelection
  onSelect: (entry: SidebarEntry) => void
}) {
  return (
    <section className="space-y-3">
      <div className="px-1">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-on-surface-variant">
          {title}
        </p>
      </div>

      <div className="grid gap-2">
        {entries.map((entry) => (
          <SidebarEntryButton
            key={entry.key}
            entry={entry}
            selection={selection}
            onSelect={onSelect}
          />
        ))}
      </div>
    </section>
  )
}

function normalizeQuery(value: string) {
  return value.trim().toLowerCase()
}

async function copyToClipboard(value: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value)
    return
  }

  const temporaryField = document.createElement('textarea')
  temporaryField.value = value
  temporaryField.setAttribute('readonly', 'true')
  temporaryField.style.position = 'absolute'
  temporaryField.style.left = '-9999px'
  document.body.appendChild(temporaryField)
  temporaryField.select()
  document.execCommand('copy')
  document.body.removeChild(temporaryField)
}

function screenMatchesQuery(screen: StitchScreen, module: AppModule, query: string) {
  if (!query) {
    return true
  }

  const haystack = [
    screen.label,
    screen.slug,
    screen.category,
    module.name,
    module.eyebrow,
    module.description,
  ]
    .join(' ')
    .toLowerCase()

  return haystack.includes(query)
}

function ModuleInsightCard({
  module,
  onOpen,
}: {
  module: AppModule
  onOpen: (moduleId: Exclude<AppModuleId, 'overview'>, screenSlug?: string) => void
}) {
  return (
    <article className="relative overflow-hidden rounded-[26px] border border-white/8 bg-gradient-to-br from-[#111111] via-[#141414] to-[#090909] p-5 text-left transition hover:border-primary-container/30">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-on-surface-variant">
        {module.eyebrow}
      </p>
      <h3 className="mt-3 text-2xl font-bold tracking-[-0.05em] text-white">{module.name}</h3>
      <p className="mt-3 text-sm leading-6 text-zinc-300">{module.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {module.highlights.map((highlight) => (
          <span
            key={highlight}
            className="rounded-full border border-white/10 bg-black/15 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-100"
          >
            {highlight}
          </span>
        ))}
      </div>

      <button
        type="button"
        onClick={() => onOpen(module.id)}
        className="mt-5 inline-flex h-11 items-center justify-center rounded-2xl bg-primary-container px-4 text-sm font-semibold text-on-primary transition hover:brightness-110"
      >
        Abrir tela principal
      </button>
    </article>
  )
}

function RouteStrip({
  routes,
  copiedLabel,
  onCopy,
}: {
  routes: RouteDescriptor[]
  copiedLabel: string | null
  onCopy: (route: RouteDescriptor) => void
}) {
  return (
    <section className="space-y-3 rounded-[24px] border border-white/10 bg-white/4 p-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-on-surface-variant">
            Rotas da shell
          </p>
          <p className="mt-1 text-sm font-semibold text-white">
            Compartilhe ou reabra o modulo atual sem preview legado.
          </p>
        </div>
        {copiedLabel ? (
          <span className="rounded-full border border-primary-container/40 bg-primary-container/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-container">
            {copiedLabel} copiada
          </span>
        ) : null}
      </div>

      <div className="grid gap-2">
        {routes.map((route) => (
          <div
            key={route.label}
            className="rounded-2xl border border-white/8 bg-black/20 px-3 py-3"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-on-surface-variant">
                  {route.label}
                </p>
                <p className="mt-1 truncate text-sm text-zinc-200">{route.url}</p>
              </div>
              <button
                type="button"
                onClick={() => onCopy(route)}
                className="inline-flex h-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:border-primary-container/40"
              >
                Copiar
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function OverviewPage({
  onOpenModule,
}: {
  onOpenModule: (moduleId: Exclude<AppModuleId, 'overview'>, screenSlug?: string) => void
}) {
  const dashboardOverview = useDashboardOverview()
  const agendaOverview = useAgendaOverview()
  const servicesOverview = useServicesOverview()
  const customersOverview = useCustomersOverview()
  const financialOverview = useFinancialOverview()
  const integrationsOverview = useIntegrationsOverview()

  return (
    <div className="mx-auto max-w-[1600px] space-y-6 px-4 py-24 md:px-6 xl:pr-[420px]">
      <section className="glass-shell overflow-hidden rounded-[32px] p-6 md:p-8">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.3fr)_360px]">
          <div className="relative overflow-hidden rounded-[28px] border border-white/8 bg-gradient-to-br from-[#111111] via-[#141414] to-[#090909] p-6 md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,255,0,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.14),transparent_28%)]" />
            <div className="relative">
              <StatusBadge tone="positive">Cockpit operacional</StatusBadge>
              <h1 className="mt-5 max-w-3xl text-4xl font-black tracking-[-0.08em] text-white md:text-6xl">
                BarberPro com dados reais e telas Stitch como superfície principal.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300 md:text-lg">
                O sistema abre direto em telas operacionais. Este cockpit resume agenda, clientes, financeiro,
                servicos e integracoes sem criar um sistema dentro do outro.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => onOpenModule('agenda')}
                  className="inline-flex h-12 items-center justify-center rounded-2xl bg-primary-container px-5 text-sm font-semibold text-on-primary transition hover:brightness-110"
                >
                  Abrir agenda principal
                </button>
                <button
                  type="button"
                  onClick={() => onOpenModule('integracoes', 'integra-ogoogle-agenda-admin')}
                  className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Abrir integracoes
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <DashboardOverviewPanel overview={dashboardOverview} isFocused />
            <IntegrationsOverviewPanel overview={integrationsOverview} isFocused />
          </div>
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        <AgendaOverviewPanel overview={agendaOverview} isFocused />
        <FinancialOverviewPanel overview={financialOverview} isFocused />
        <ServicesOverviewPanel overview={servicesOverview} />
        <CustomersOverviewPanel overview={customersOverview} />
      </section>

      <section className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {appModules.map((module) => (
          <ModuleInsightCard key={module.id} module={module} onOpen={onOpenModule} />
        ))}
      </section>
    </div>
  )
}

function FloatingNavigator({
  selection,
  activeModule,
  activeScreen,
  onOpenOverview,
  onSelectEntry,
  onSelectScreen,
}: {
  selection: WorkspaceSelection
  activeModule: AppModule | null
  activeScreen: StitchScreen | null
  onOpenOverview: () => void
  onSelectEntry: (entry: SidebarEntry) => void
  onSelectScreen: (screenSlug: string) => void
}) {
  const [launcherOpen, setLauncherOpen] = useState(false)
  const [screenQuery, setScreenQuery] = useState('')
  const [copiedRoute, setCopiedRoute] = useState<string | null>(null)
  const normalizedQuery = normalizeQuery(screenQuery)
  const moduleUrl = activeModule
    ? buildMainUrl(activeModule.id, activeScreen?.slug ?? activeModule.defaultScreen.slug)
    : buildMainUrl('overview', null)
  const screenUrl = activeScreen ? buildMainUrl(selection.moduleId, activeScreen.slug) : moduleUrl

  const routeDescriptors = useMemo<RouteDescriptor[]>(
    () => [
      { label: 'Modulo ativo', url: moduleUrl },
      { label: 'Tela ativa', url: screenUrl },
    ],
    [moduleUrl, screenUrl],
  )

  const handleCopyRoute = useCallback(async (route: RouteDescriptor) => {
    await copyToClipboard(route.url)
    setCopiedRoute(route.label)
    window.setTimeout(() => setCopiedRoute(null), 1600)
  }, [])

  const browserSections = useMemo(() => {
    return appModules
      .map((module) => ({
        module,
        screens: module.screens.filter((screen) => screenMatchesQuery(screen, module, normalizedQuery)),
      }))
      .filter((section) => section.screens.length > 0)
  }, [normalizedQuery])

  return (
    <>
      <div className="fixed left-4 top-4 z-50 flex items-center gap-3">
        <button
          type="button"
          onClick={() => setLauncherOpen((current) => !current)}
          className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/10 bg-black/70 px-4 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur transition hover:border-primary-container/40"
        >
          BarberPro
        </button>

        {selection.moduleId !== 'overview' ? (
          <button
            type="button"
            onClick={onOpenOverview}
            className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/10 bg-black/60 px-4 text-sm font-semibold text-white backdrop-blur transition hover:border-primary-container/40"
          >
            Cockpit
          </button>
        ) : null}
      </div>

      {launcherOpen ? (
        <aside className="fixed right-4 top-16 z-50 flex max-h-[calc(100vh-5rem)] w-[min(388px,calc(100vw-2rem))] flex-col gap-5 overflow-auto rounded-[30px] border border-white/10 bg-black/82 p-4 shadow-[0_40px_120px_rgba(0,0,0,0.6)] backdrop-blur">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-on-surface-variant">
                Navegacao real
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-[-0.05em] text-white">
                Tessitura Stitch sem iframe
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                A tela Stitch continua sendo o centro da experiencia. Este painel apenas organiza a troca entre
                modulos e telas sem criar um segundo sistema por cima.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setLauncherOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              x
            </button>
          </div>

          <RouteStrip routes={routeDescriptors} onCopy={handleCopyRoute} copiedLabel={copiedRoute} />

          <SidebarSection
            title="Operacao diaria"
            entries={sidebarPrimaryEntries}
            selection={selection}
            onSelect={(entry) => {
              onSelectEntry(entry)
              setLauncherOpen(false)
            }}
          />

          <SidebarSection
            title="Gestao da unidade"
            entries={sidebarManagementEntries}
            selection={selection}
            onSelect={(entry) => {
              onSelectEntry(entry)
              setLauncherOpen(false)
            }}
          />

          <SidebarSection
            title="Integracoes e acesso"
            entries={sidebarIntegrationEntries}
            selection={selection}
            onSelect={(entry) => {
              onSelectEntry(entry)
              setLauncherOpen(false)
            }}
          />

          <section className="space-y-3">
            <div className="px-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-on-surface-variant">
                Atlas de telas Stitch
              </p>
            </div>

            <label className="block">
              <span className="sr-only">Buscar tela</span>
              <input
                value={screenQuery}
                onChange={(event) => setScreenQuery(event.target.value)}
                placeholder="Buscar tela, modulo ou categoria..."
                className="h-11 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-primary-container/40"
              />
            </label>

            <div className="grid gap-2">
              {browserSections.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-white/10 bg-white/3 px-4 py-5 text-sm text-on-surface-variant">
                  Nenhuma tela encontrada para esse filtro.
                </div>
              ) : null}

              {browserSections.map((section) => (
                <div key={section.module.id} className="rounded-[24px] border border-white/8 bg-white/3 p-3">
                  <button
                    type="button"
                    onClick={() => onSelectEntry({ key: section.module.id, label: section.module.name, hint: section.module.eyebrow, moduleId: section.module.id })}
                    className="flex w-full items-center justify-between gap-4 rounded-2xl px-1 py-1 text-left transition hover:text-primary-container"
                  >
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-on-surface-variant">
                        {section.module.eyebrow}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">{section.module.name}</p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-200">
                      {section.screens.length}
                    </span>
                  </button>

                  <div className="mt-3 grid gap-2">
                    {section.screens.slice(0, 6).map((screen) => {
                      const active = activeScreen?.slug === screen.slug

                      return (
                        <button
                          key={screen.slug}
                          type="button"
                          onClick={() => {
                            onSelectScreen(screen.slug)
                            setLauncherOpen(false)
                          }}
                          className={`rounded-2xl border px-3 py-3 text-left transition ${
                            active
                              ? 'border-primary-container bg-primary-container/10 text-primary-container'
                              : 'border-outline-variant/20 bg-surface-container-low text-on-surface hover:border-primary-container/40'
                          }`}
                        >
                          <span className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-on-surface-variant">
                            {screen.category}
                          </span>
                          <span className="mt-1 block text-sm font-semibold leading-5">{screen.label}</span>
                        </button>
                      )
                    })}

                    {section.screens.length > 6 ? (
                      <p className="px-1 text-[11px] font-medium text-on-surface-variant">
                        + {section.screens.length - 6} telas adicionais
                      </p>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {activeModule ? (
            <section className="space-y-3">
              <div className="px-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-on-surface-variant">
                  Telas deste modulo
                </p>
              </div>

              <div className="grid gap-2">
                {activeModule.screens.map((screen) => {
                  const active = selection.screenSlug === screen.slug

                  return (
                    <button
                      key={screen.slug}
                      type="button"
                      onClick={() => {
                        onSelectScreen(screen.slug)
                        setLauncherOpen(false)
                      }}
                      className={`rounded-2xl border px-4 py-3 text-left transition ${
                        active
                          ? 'border-primary-container bg-primary-container/10 text-primary-container'
                          : 'border-outline-variant/25 bg-surface-container-low text-on-surface hover:border-primary-container/40'
                      }`}
                    >
                      <span className="block text-[11px] font-semibold uppercase tracking-[0.24em] text-on-surface-variant">
                        {getScreenSurfaceLabel(screen)}
                      </span>
                      <span className="mt-1 block text-sm font-semibold">{screen.label}</span>
                    </button>
                  )
                })}
              </div>
            </section>
          ) : null}
        </aside>
      ) : null}
    </>
  )
}

function DirectScreenStage({
  activeModule,
  activeScreen,
  selection,
  onOpenOverview,
  onSelectEntry,
  onSelectScreen,
}: {
  activeModule: AppModule
  activeScreen: StitchScreen
  selection: WorkspaceSelection
  onOpenOverview: () => void
  onSelectEntry: (entry: SidebarEntry) => void
  onSelectScreen: (screenSlug: string) => void
}) {
  const ActiveScreen = stitchPreviewComponents[activeScreen.slug]

  return (
    <div className="min-h-screen bg-background text-on-background xl:pr-[420px]">
      <FloatingNavigator
        selection={selection}
        activeModule={activeModule}
        activeScreen={activeScreen}
        onOpenOverview={onOpenOverview}
        onSelectEntry={onSelectEntry}
        onSelectScreen={onSelectScreen}
      />

      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center text-sm uppercase tracking-[0.3em] text-on-surface-variant">
            Carregando tela
          </div>
        }
      >
        <ActiveScreen />
      </Suspense>
    </div>
  )
}

export function BarbershopApp() {
  return <WorkspaceApp initialSelection={normalizeWorkspaceSelection(readLocationSelection())} />
}

function WorkspaceApp({ initialSelection }: { initialSelection: WorkspaceSelection }) {
  const [selection, setSelection] = useState<WorkspaceSelection>(initialSelection)

  const activeModule = selection.moduleId === 'overview' ? null : appModulesById[selection.moduleId]

  const activeScreen = useMemo(() => {
    if (!activeModule) {
      return null
    }

    return activeModule.screens.find((screen) => screen.slug === selection.screenSlug) ?? activeModule.defaultScreen
  }, [activeModule, selection.screenSlug])

  useEffect(() => {
    const syncFromUrl = () => {
      const nextSelection = normalizeWorkspaceSelection(readLocationSelection())
      const url = buildMainUrl(nextSelection.moduleId, nextSelection.screenSlug)

      if (window.location.href !== url) {
        window.history.replaceState({}, '', url)
      }

      startTransition(() => {
        setSelection(nextSelection)
      })
    }

    syncFromUrl()
    window.addEventListener('popstate', syncFromUrl)

    return () => {
      window.removeEventListener('popstate', syncFromUrl)
    }
  }, [])

  useEffect(() => {
    document.title =
      selection.moduleId === 'overview'
        ? 'BarberPro | Cockpit'
        : `BarberPro | ${activeModule?.name ?? 'Operacao'}`
  }, [activeModule?.name, selection.moduleId])

  function applySelection(nextSelection: WorkspaceSelection) {
    const normalized = normalizeWorkspaceSelection(nextSelection)
    window.history.pushState({}, '', buildMainUrl(normalized.moduleId, normalized.screenSlug))
    startTransition(() => {
      setSelection(normalized)
    })
  }

  function openOverview() {
    applySelection({
      moduleId: 'overview',
      screenSlug: null,
    })
  }

  function openModule(moduleId: Exclude<AppModuleId, 'overview'>, screenSlug?: string) {
    const module = appModulesById[moduleId]
    const resolvedScreen =
      module.screens.find((screen) => screen.slug === screenSlug)?.slug ?? module.defaultScreen.slug

    applySelection({
      moduleId: module.id,
      screenSlug: resolvedScreen,
    })
  }

  function openSidebarEntry(entry: SidebarEntry) {
    if (entry.moduleId === 'overview') {
      openOverview()
      return
    }

    openModule(entry.moduleId, entry.screenSlug ?? undefined)
  }

  return activeModule && activeScreen ? (
    <DirectScreenStage
      activeModule={activeModule}
      activeScreen={activeScreen}
      selection={selection}
      onOpenOverview={openOverview}
      onSelectEntry={openSidebarEntry}
      onSelectScreen={(screenSlug) => openModule(activeModule.id, screenSlug)}
    />
  ) : (
    <div className="min-h-screen bg-background text-on-background">
      <FloatingNavigator
        selection={selection}
        activeModule={activeModule}
        activeScreen={activeScreen}
        onOpenOverview={openOverview}
        onSelectEntry={openSidebarEntry}
        onSelectScreen={(screenSlug) => {
          const owner = findModuleByScreenSlug(screenSlug)
          if (owner) {
            openModule(owner.id, screenSlug)
          }
        }}
      />
      <OverviewPage onOpenModule={openModule} />
    </div>
  )
}
