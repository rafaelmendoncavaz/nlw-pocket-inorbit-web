import type { TypeCreateGoal } from "../types/types"

export async function createGoal({
  title,
  desiredWeeklyFrequency,
}: TypeCreateGoal) {
  await fetch("http://localhost:3000/goals", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      desiredWeeklyFrequency,
    }),
  })
}
