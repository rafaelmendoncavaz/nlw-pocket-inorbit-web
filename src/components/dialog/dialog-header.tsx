import { X } from "lucide-react"
import { DialogClose, DialogDescription, DialogTitle } from "../ui/dialog"

export function ComponentDialogHeader() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <DialogTitle>Cadastrar Meta</DialogTitle>
        <DialogClose>
          <X className="size-5 text-zinc-600" />
        </DialogClose>
      </div>
      <DialogDescription>
        Adicione atividades que te fazem bem e que você quer continuar
        praticando toda semana.
      </DialogDescription>
    </div>
  )
}
