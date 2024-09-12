import dayjs from "dayjs"
import { CheckCircle2, Undo2 } from "lucide-react"
import type { TypeGoal } from "../../types/types"
import { deleteCompletion } from "../../requests/delete-completion"
import { useQueryClient } from "@tanstack/react-query"

export function SummaryCard({ id, title, completedAt }: TypeGoal) {
  const queryClient = useQueryClient()
  const time = dayjs(completedAt).format("HH:mm")

  async function handleDeleteCompletion(goalId: string) {
    await deleteCompletion(goalId)

    queryClient.invalidateQueries({
      queryKey: ["summary"],
    })
    queryClient.invalidateQueries({
      queryKey: ["pending-goals"],
    })
  }

  return (
    <li className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <CheckCircle2 className="size-4 text-pink-500" />
        <span className="text-sm text-zinc-400">
          Você completou "<span className="text-zinc-100">{title}</span>" às{" "}
          <span className="text-zinc-100">{time}h</span>
        </span>
      </div>
      <button
        type="button"
        className="flex items-center gap-2 text-xs text-zinc-400"
        onClick={() => handleDeleteCompletion(id)}
      >
        <Undo2 className="size-4" />
        Desfazer
      </button>
    </li>
  )
}
