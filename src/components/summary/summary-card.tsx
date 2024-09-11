import dayjs from "dayjs"
import { CheckCircle2 } from "lucide-react"
import type { TypeGoal } from "../../types/types"

export function SummaryCard({ title, completedAt }: TypeGoal) {
  const time = dayjs(completedAt).format("HH:mm")

  return (
    <li className="flex items-center gap-2">
      <CheckCircle2 className="size-4 text-pink-500" />
      <span className="text-sm text-zinc-400">
        Você completou "<span className="text-zinc-100">{title}</span>" às{" "}
        <span className="text-zinc-100">{time}h</span>
      </span>
    </li>
  )
}
