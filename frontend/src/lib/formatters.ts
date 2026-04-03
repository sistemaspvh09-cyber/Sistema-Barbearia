const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

const numberFormatter = new Intl.NumberFormat('pt-BR')

const dateTimeFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: '2-digit',
  month: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
})

const timeFormatter = new Intl.DateTimeFormat('pt-BR', {
  hour: '2-digit',
  minute: '2-digit',
})

function toDate(value: Date | string | null | undefined) {
  if (!value) {
    return null
  }

  const parsed = value instanceof Date ? value : new Date(value)

  return Number.isNaN(parsed.getTime()) ? null : parsed
}

export function formatCurrency(valueInCents: number | null | undefined) {
  if (typeof valueInCents !== 'number') {
    return 'Valor indisponivel'
  }

  return currencyFormatter.format(valueInCents / 100)
}

export function formatCompactNumber(value: number | null | undefined) {
  if (typeof value !== 'number') {
    return '--'
  }

  return numberFormatter.format(value)
}

export function formatShortTime(value: Date | string | null | undefined) {
  const parsed = toDate(value)

  if (!parsed) {
    return 'Horario indisponivel'
  }

  return timeFormatter.format(parsed)
}

export function formatCompactDateTime(value: Date | string | null | undefined) {
  const parsed = toDate(value)

  if (!parsed) {
    return 'Data indisponivel'
  }

  return dateTimeFormatter.format(parsed)
}

export function formatDurationMinutes(minutes: number | null | undefined) {
  if (typeof minutes !== 'number') {
    return 'Duracao indisponivel'
  }

  return `${numberFormatter.format(minutes)} min`
}

export function formatSyncLabel(value: Date | string | null | undefined) {
  const parsed = toDate(value)

  if (!parsed) {
    return 'Sem sincronizacao recente'
  }

  return `Atualizado ${dateTimeFormatter.format(parsed)}`
}
