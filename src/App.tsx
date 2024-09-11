import { Dialog } from "./components/ui/dialog"
import { Home } from "./pages/home/home"
import { Summary } from "./pages/summary/summary"
import { useQuery } from "@tanstack/react-query"
import { getSummary } from "./requests/get-summary"
import { CreateGoal } from "./components/dialog/create-goal/create-goal"

function App() {
  const { data } = useQuery({
    queryKey: ["summary"],
    queryFn: getSummary,
    staleTime: 1000 * 60,
  })

  return (
    <Dialog>
      {data?.total && data.total > 0 ? <Summary /> : <Home />}
      <CreateGoal />
    </Dialog>
  )
}

export default App
