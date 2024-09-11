import type { TypePendingGoals } from "../types/types"

export async function getPendingGoals(): Promise<TypePendingGoals> {
  const response = await fetch("http://localhost:3000/pending-goals")
  const data = await response.json()
  return data.pendingGoals
}
