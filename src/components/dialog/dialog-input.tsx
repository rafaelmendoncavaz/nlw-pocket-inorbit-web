import { Input } from "../ui/input"
import { Label } from "../ui/label"

export function ComponentDialogInput() {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="title">Qual a atividade?</Label>
      <Input
        id="title"
        placeholder="Praticar exercícios, meditar, etc..."
        autoFocus
      />
    </div>
  )
}
