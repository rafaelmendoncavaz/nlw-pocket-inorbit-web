import type { SummaryContextProps } from "../../types/types"

export function SummaryContext({
  completed,
  total,
  percentage,
}: SummaryContextProps) {
  return (
    <div className="flex items-center justify-between text-xs text-zinc-400">
      <span>
        Você completou <span className="text-zinc-100">{completed}</span> de{" "}
        <span className="text-zinc-100">{total}</span> metas nessa semana.
      </span>
      <span>{percentage}%</span>
    </div>
  )
}
