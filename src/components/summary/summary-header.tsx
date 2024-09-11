import { DialogTrigger } from "../ui/dialog"
import { Plus } from "lucide-react"
import { Button } from "../ui/button"
import { InOrbitIcon } from "../ui/in-orbit-icon"
import type { SummaryHeaderProps } from "../../types/types"

export function SummaryHeader({
  firstDayOfWeek,
  lastDayOfWeek,
}: SummaryHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <InOrbitIcon />
        <span className="text-lg font-semibold capitalize">
          {firstDayOfWeek} - {lastDayOfWeek}
        </span>
      </div>
      <DialogTrigger asChild>
        <Button size="sm">
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  )
}
