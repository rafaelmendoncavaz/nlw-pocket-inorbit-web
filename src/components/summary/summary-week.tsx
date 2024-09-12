import dayjs from "dayjs"
import { SummaryList } from "./summary-list"
import type { TypeSummary } from "../../types/types"

export function SummaryWeek({ completed, total, goalsPerDay }: TypeSummary) {
  return (
    <div className="flex flex-col gap-6 overflow-hidden scrollbar-hidden overflow-y-auto max-h-[500px]">
      <h2 className="text-xl font-medium">Sua semana</h2>
      {goalsPerDay ? (
        Object.entries(goalsPerDay).map(([date, goals]) => {
          const weekDay = dayjs(date).format("dddd")
          const parseDate = dayjs(date).format("D [de] MMMM")
          return (
            <div key={date} className="flex flex-col gap-4">
              <h3 className="font-medium capitalize">
                {weekDay}{" "}
                <span className="text-zinc-400 text-xs">({parseDate})</span>
              </h3>

              <SummaryList goals={goals} />
            </div>
          )
        })
      ) : (
        <span className="text-center text-sm text-zinc-400 leading-relaxed">
          Você ainda não concluiu nenhuma meta que se propôs a fazer! Que tal
          começar agora mesmo?
        </span>
      )}
      {}
    </div>
  )
}
