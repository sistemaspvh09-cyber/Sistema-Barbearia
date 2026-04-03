type MetricTileProps = {
  label: string
  value: string
  detail: string
}

export function MetricTile({ label, value, detail }: MetricTileProps) {
  return (
    <div className="rounded-2xl border border-outline-variant/20 bg-black/10 p-3">
      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-on-surface-variant">
        {label}
      </p>
      <p className="mt-3 text-2xl font-bold tracking-[-0.04em] text-on-surface">{value}</p>
      <p className="mt-2 text-xs leading-5 text-on-surface-variant">{detail}</p>
    </div>
  )
}
