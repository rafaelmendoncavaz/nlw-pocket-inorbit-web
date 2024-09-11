import type { GoalsPerDay } from "../../types/types"
import { SummaryCard } from "./summary-card"

export function SummaryList({ goals }: GoalsPerDay) {
  return (
    <ul className="flex flex-col gap-3">
      {goals.map(goal => {
        return (
          <SummaryCard
            key={goal.id}
            title={goal.title}
            completedAt={goal.completedAt}
          />
        )
      })}
    </ul>
  )
}
