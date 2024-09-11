import type { z } from "zod"
import type { createGoalFormSchema } from "../schemas/schemas"

export interface TypeSummary {
  completed: number
  total: number
  goalsPerDay: GoalsPerDay
}

export type TypePendingGoals = {
  id: string
  title: string
  desiredWeeklyFrequency: number
  completionCount: number
}[]

export type GoalsPerDay = Record<
  string,
  {
    id: string
    title: string
    completedAt: string
  }[]
>

export type TypeCreateGoal = z.infer<typeof createGoalFormSchema>
