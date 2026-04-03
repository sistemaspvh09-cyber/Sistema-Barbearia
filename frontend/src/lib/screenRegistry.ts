import { lazy, type ComponentType, type LazyExoticComponent } from 'react'

type ScreenModule = {
  default: ComponentType
}

type ScreenCategory =
  | 'Painel'
  | 'Agenda'
  | 'Financeiro'
  | 'Clientes'
  | 'Operacao'
  | 'Configuracao'
  | 'Marketing'
  | 'Autenticacao'
  | 'Site'
  | 'Outros'

export type StitchScreen = {
  category: ScreenCategory
  fileName: string
  label: string
  loader: () => Promise<ScreenModule>
  slug: string
}

export type StitchPreviewComponent = LazyExoticComponent<ComponentType>

const screenModules = import.meta.glob<ScreenModule>('../screens/*.tsx')

function inferCategory(fileName: string): ScreenCategory {
  if (/Painel|Dashboard|Performance/i.test(fileName)) return 'Painel'
  if (/Agenda|Agendamento|HorRios/i.test(fileName)) return 'Agenda'
  if (/Pagamento|Pix|Infinite|Faturamento|Checkout|Financeiro|Relat|Comiss|Despesas|Repasses/i.test(fileName)) {
    return 'Financeiro'
  }
  if (/Cliente|Crm|Fidelidade|Pontos|Aniversariantes|Churn|Nps|Avalia/i.test(fileName)) {
    return 'Clientes'
  }
  if (/Estoque|Produto|Fornecedores|Pdv/i.test(fileName)) return 'Operacao'
  if (/Configura|Webhook|Seguran|Suporte|Ajuda|Notifica|Auditoria|GoogleAgenda/i.test(fileName)) {
    return 'Configuracao'
  }
  if (/Marketing|Cupom|Campanha/i.test(fileName)) return 'Marketing'
  if (/Login|Conta|Senha|Onboarding|Entrar|Recupera|Redefinir/i.test(fileName)) return 'Autenticacao'
  if (/PerfilPBlico|BemVindo|PreOs|Erro404/i.test(fileName)) return 'Site'
  return 'Outros'
}

function normalizeLabel(fileName: string) {
  return fileName
    .replace(/([a-z])([A-Z0-9])/g, '$1 $2')
    .replace(/([0-9])([A-Za-z])/g, '$1 $2')
    .replace(/\bPGina\b/g, 'Pagina')
    .replace(/\bConfigura O\b/g, 'Configuracao')
    .replace(/\bServi O\b/g, 'Servico')
    .replace(/\bServi Os\b/g, 'Servicos')
    .replace(/\bGest O\b/g, 'Gestao')
    .replace(/\bNotifica Es\b/g, 'Notificacoes')
    .replace(/\bComiss Es\b/g, 'Comissoes')
    .replace(/\bBenef Cios\b/g, 'Beneficios')
    .replace(/\bHor Rios\b/g, 'Horarios')
    .replace(/\bP Blico\b/g, 'Publico')
    .replace(/\bPre Os\b/g, 'Precos')
    .replace(/\bAvalia Es\b/g, 'Avaliacoes')
    .replace(/\bRelat Rio\b/g, 'Relatorio')
    .replace(/\bRelat Rios\b/g, 'Relatorios')
    .replace(/\bIntegra O\b/g, 'Integracao')
    .replace(/\bRecupera O\b/g, 'Recuperacao')
    .replace(/\bSele O\b/g, 'Selecao')
    .replace(/\bRea Do\b/g, 'Area Do')
    .replace(/\bIn Cio\b/g, 'Inicio')
    .trim()
}

function toSlug(fileName: string) {
  return fileName
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/([0-9])([A-Za-z])/g, '$1-$2')
    .replace(/([A-Za-z])([0-9])/g, '$1-$2')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase()
}

export const stitchScreens: StitchScreen[] = Object.entries(screenModules)
  .map(([path, loader]) => {
    const fileName = path.split('/').pop()?.replace('.tsx', '') ?? path

    return {
      category: inferCategory(fileName),
      fileName,
      label: normalizeLabel(fileName),
      loader,
      slug: toSlug(fileName),
    }
  })
  .sort((left, right) => left.label.localeCompare(right.label, 'pt-BR'))

export const stitchPreviewComponents = Object.fromEntries(
  stitchScreens.map((screen) => [screen.slug, lazy(screen.loader)]),
) as Record<string, StitchPreviewComponent>

export function findScreenBySlug(slug: string | null) {
  if (!slug) {
    return stitchScreens[0] ?? null
  }

  return stitchScreens.find((screen) => screen.slug === slug) ?? stitchScreens[0] ?? null
}
