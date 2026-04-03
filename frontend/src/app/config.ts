import { stitchScreens, type StitchScreen } from '@/lib/screenRegistry'

export type AppModuleId =
  | 'overview'
  | 'agenda'
  | 'operacao'
  | 'clientes'
  | 'financeiro'
  | 'integracoes'
  | 'marketing'
  | 'acesso'

type ModuleSeed = {
  id: Exclude<AppModuleId, 'overview'>
  eyebrow: string
  name: string
  description: string
  highlights: string[]
  screenSlugs: string[]
}

export type AppModule = Omit<ModuleSeed, 'screenSlugs'> & {
  defaultScreen: StitchScreen
  screens: StitchScreen[]
}

const screenLookup = new Map(stitchScreens.map((screen) => [screen.slug, screen]))

function requireScreen(slug: string) {
  const screen = screenLookup.get(slug)

  if (!screen) {
    throw new Error(`Screen "${slug}" was not found in the Stitch registry.`)
  }

  return screen
}

const moduleSeeds: ModuleSeed[] = [
  {
    id: 'agenda',
    eyebrow: 'Agenda',
    name: 'Agenda e atendimento',
    description:
      'Controle os encaixes do dia, acompanhe a agenda premium e navegue entre a visao do admin e do barbeiro.',
    highlights: ['24 agendamentos confirmados', '3 barbeiros em operacao', 'Fila do dia organizada'],
    screenSlugs: [
      'agenda-premium',
      'agenda-multi-barbeiro-admin',
      'agendamento-sele-ode-servi-o',
      'agendamento-profissional-ehor-rio',
      'painel-do-barbeiro',
      'painel-barbeiro-mobile',
    ],
  },
  {
    id: 'operacao',
    eyebrow: 'Operacao',
    name: 'Operacao da unidade',
    description:
      'Centralize painel administrativo, servicos, estoque e equipe sem voltar para um catalogo tecnico.',
    highlights: ['Visao executiva da unidade', 'Servicos e produtos padronizados', 'Fluxos mobile e desktop'],
    screenSlugs: [
      'painel-administrativo',
      'gest-ode-equipe-admin',
      'configura-ode-servi-os-desktop',
      'configura-ode-servi-os-mobile',
      'gest-ode-estoque-desktop',
      'entrada-de-estoque-mobile',
    ],
  },
  {
    id: 'clientes',
    eyebrow: 'Clientes',
    name: 'CRM e fidelizacao',
    description:
      'Acompanhe historico, pontos, fidelidade e perfis detalhados para aumentar recorrencia no salao.',
    highlights: ['Base ativa acompanhada', 'Programas de fidelidade prontos', 'Historico detalhado por cliente'],
    screenSlugs: [
      'perfil-detalhado-do-cliente-crm',
      'dashboard-de-fidelidade-admin',
      'rea-do-cliente-in-cio',
      'hist-rico-de-agendamentos-cliente',
      'meus-benef-cios-epontos',
      'resgate-de-pontos-sele-o',
    ],
  },
  {
    id: 'financeiro',
    eyebrow: 'Financeiro',
    name: 'Pagamentos e faturamento',
    description:
      'Va do checkout a configuracao financeira com telas de PIX, relatorios e conciliacao prontas.',
    highlights: ['Checkout e PIX no mesmo fluxo', 'Indicadores de faturamento', 'Controle de repasses e taxas'],
    screenSlugs: [
      'configura-ofinanceira-admin',
      'checkout-de-venda-mobile',
      'relat-rios-de-faturamento-desktop',
      'gerar-pix-valor',
      'gerar-pix-qr-code',
      'pagamentos-infinitepay',
    ],
  },
  {
    id: 'integracoes',
    eyebrow: 'Integracoes',
    name: 'Google Agenda e pagamentos',
    description:
      'Concentre conectores de calendario, InfinitePay e webhooks tecnicos num modulo dedicado e acessivel.',
    highlights: ['Google Agenda pronto para conectar', 'InfinitePay mapeado', 'Webhooks e logs centralizados'],
    screenSlugs: [
      'integra-ogoogle-agenda-admin',
      'pagamentos-infinitepay',
      'configura-ode-webhooks-admin',
      'monitoramento-infinitepay-logs',
      'aproximar-cart-oinfinitetap',
      'configura-ode-checkout-erecibos',
    ],
  },
  {
    id: 'marketing',
    eyebrow: 'Marketing',
    name: 'Marketing e crescimento',
    description:
      'Ative campanhas, cupons e jornadas de aniversario sem sair da experiencia principal da landing.',
    highlights: ['Campanhas recorrentes configuradas', 'Growth dashboard visivel', 'Perfil publico pronto para divulgacao'],
    screenSlugs: [
      'dashboard-de-marketing-egrowth',
      'gest-ode-cupons-ecampanhas',
      'marketing-de-aniversariantes',
      'central-de-aniversariantes-marketing',
      'perfil-pblico-da-barbearia',
    ],
  },
  {
    id: 'acesso',
    eyebrow: 'Acesso',
    name: 'Acesso, suporte e onboarding',
    description:
      'Agrupe login, recuperacao de senha, ajuda e onboarding para um fluxo de entrada mais crivel.',
    highlights: ['Login principal pronto', 'Recuperacao de senha integrada', 'Central de ajuda e suporte acessiveis'],
    screenSlugs: [
      'tela-de-login',
      'entrar-ou-criar-conta',
      'solicitar-recupera-ode-senha',
      'redefinir-senha-desktop',
      'central-de-ajuda-tutoriais',
      'suporte-echamados',
    ],
  },
]

export const appModules: AppModule[] = moduleSeeds.map((seed) => {
  const screens = seed.screenSlugs.map(requireScreen)

  return {
    ...seed,
    defaultScreen: screens[0],
    screens,
  }
})

export const appModulesById = Object.fromEntries(
  appModules.map((module) => [module.id, module]),
) as Record<Exclude<AppModuleId, 'overview'>, AppModule>

export function findModuleByScreenSlug(screenSlug: string | null) {
  if (!screenSlug) {
    return null
  }

  return appModules.find((module) => module.screens.some((screen) => screen.slug === screenSlug)) ?? null
}
