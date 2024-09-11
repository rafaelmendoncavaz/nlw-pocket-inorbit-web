import type { z } from "zod"
import type { createGoalFormSchema } from "../schemas/schemas"

export interface TypeSummary {
  completed: number
  total: number
  goalsPerDay: GoalsPerDay
}

export interface SummaryHeaderProps {
  firstDayOfWeek: string
  lastDayOfWeek: string
}

export interface SummaryContextProps {
  completed: number
  total: number
  percentage: number
}

export type TypePendingGoals = {
  id: string
  title: string
  desiredWeeklyFrequency: number
  completionCount: number
}[]

export type TypeGoal = {
  id?: string
  title: string
  completedAt: string
}

export type GoalsPerDay = Record<
  string,
  {
    id: string
    title: string
    completedAt: string
  }[]
>

export type TypeCreateGoal = z.infer<typeof createGoalFormSchema>
