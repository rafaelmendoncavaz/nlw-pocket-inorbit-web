export async function deleteGoal(id: string) {
  await fetch("http://localhost:3000/delete-goal", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
    }),
  })
}
