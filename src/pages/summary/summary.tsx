import { Progress, ProgressIndicator } from "../../components/ui/progress-bar"
import { Separator } from "../../components/ui/separator"
import { useQuery } from "@tanstack/react-query"
import { getSummary } from "../../requests/get-summary"
import { PendingGoals } from "../../components/summary/pending-goals/pending-goals"
import { SummaryHeader } from "../../components/summary/summary-header"
import { SummaryContext } from "../../components/summary/summary-context"
import { SummaryWeek } from "../../components/summary/summary-week"
import dayjs from "dayjs"
import ptBR from "dayjs/locale/pt-BR"

dayjs.locale(ptBR)

export function Summary() {
  const { data } = useQuery({
    queryKey: ["summary"],
    queryFn: getSummary,
    staleTime: 1000 * 60,
  })

  if (!data) return

  const firstDayOfWeek = dayjs().startOf("week").format("D MMM")
  const lastDayOfWeek = dayjs().endOf("week").format("D MMM")
  const completedPercentage = Math.round((data.completed * 100) / data.total)

  const style = {
    width: `${completedPercentage}%`,
  }

  return (
    <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
      <SummaryHeader
        firstDayOfWeek={firstDayOfWeek}
        lastDayOfWeek={lastDayOfWeek}
      />

      <div className="flex flex-col gap-3">
        <Progress max={15} value={8}>
          <ProgressIndicator style={style} />
        </Progress>

        <SummaryContext
          completed={data.completed}
          total={data.total}
          percentage={completedPercentage}
        />
      </div>

      <Separator />

      <PendingGoals />

      <SummaryWeek
        goalsPerDay={data.goalsPerDay}
        completed={data.completed}
        total={data.total}
      />
    </div>
  )
}
