export async function deleteCompletion(goalId: string) {
  await fetch("http://localhost:3000/delete-completion", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      goalId,
    }),
  })
}
