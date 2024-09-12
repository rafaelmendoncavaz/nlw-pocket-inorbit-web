import { CircleX, Plus } from "lucide-react"
import { OutlineButton } from "../../ui/outline-button"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getPendingGoals } from "../../../requests/get-pending-goals"
import { createGoalCompletion } from "../../../requests/create-goal-completion"
import { deleteGoal } from "../../../requests/delete-goal"

export function PendingGoals() {
  const queryClient = useQueryClient()

  const { data } = useQuery({
    queryKey: ["pending-goals"],
    queryFn: getPendingGoals,
    staleTime: 1000 * 60,
  })

  if (!data) return

  async function handleCompleteGoal(goalId: string) {
    await createGoalCompletion(goalId)

    queryClient.invalidateQueries({
      queryKey: ["summary"],
    })
    queryClient.invalidateQueries({
      queryKey: ["pending-goals"],
    })
  }

  async function handleDeleteGoal(id: string) {
    await deleteGoal(id)

    queryClient.invalidateQueries({
      queryKey: ["summary"],
    })
    queryClient.invalidateQueries({
      queryKey: ["pending-goals"],
    })
  }

  return (
    <div className="flex flex-wrap gap-3">
      {data.map(goal => {
        return (
          <div className="flex items-center gap-2" key={goal.id}>
            <button type="button" onClick={() => handleDeleteGoal(goal.id)}>
              <CircleX className="size-4 text-zinc-400 hover:text-red-400" />
            </button>
            <OutlineButton
              disabled={goal.completionCount >= goal.desiredWeeklyFrequency}
              onClick={() => handleCompleteGoal(goal.id)}
            >
              <Plus className="size-4 text-zinc-600" />
              {goal.title}
            </OutlineButton>
          </div>
        )
      })}
    </div>
  )
}
