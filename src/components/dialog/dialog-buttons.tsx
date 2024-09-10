import { Button } from "../ui/button"
import { DialogClose } from "../ui/dialog"

export function ComponentDialogButtons() {
  return (
    <div className="flex items-center gap-3">
      <DialogClose asChild>
        <Button className="flex-1" variant="secondary">
          Fechar
        </Button>
      </DialogClose>
      <Button className="flex-1">Salvar</Button>
    </div>
  )
}
