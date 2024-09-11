import type { TypeSummary } from "../types/types"

export async function getSummary(): Promise<TypeSummary> {
  const response = await fetch("http://localhost:3000/summary")
  const data = await response.json()
  return data.summary
}
