import { DialogContent } from "../../ui/dialog"
import { ComponentDialogButtons } from "../../dialog/dialog-buttons"
import { ComponentDialogHeader } from "../../dialog/dialog-header"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { createGoalFormSchema } from "../../../schemas/schemas"
import type { TypeCreateGoal } from "../../../types/types"
import { Label } from "../../ui/label"
import { Input } from "../../ui/input"
import { RadioGroup } from "../../ui/radio-group"
import { createGoal } from "../../../requests/create-goal"
import { useQueryClient } from "@tanstack/react-query"
import { DialogRadioGroup } from "../dialog-radio-group"

export function CreateGoal() {
  const queryClient = useQueryClient()

  const { register, control, handleSubmit, formState, reset } =
    useForm<TypeCreateGoal>({
      resolver: zodResolver(createGoalFormSchema),
    })

  async function handleCreateGoal(data: TypeCreateGoal) {
    await createGoal({
      title: data.title,
      desiredWeeklyFrequency: data.desiredWeeklyFrequency,
    })

    queryClient.invalidateQueries({
      queryKey: ["summary"],
    })
    queryClient.invalidateQueries({
      queryKey: ["pending-goals"],
    })

    reset()
  }

  return (
    <DialogContent>
      <div className="flex flex-col gap-6 h-full">
        <ComponentDialogHeader />

        <form
          onSubmit={handleSubmit(handleCreateGoal)}
          className="flex-1 flex flex-col justify-between"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Qual a atividade?</Label>
              <Input
                id="title"
                placeholder="Praticar exercícios, meditar, etc..."
                autoFocus
                {...register("title")}
              />
              {formState.errors.title && (
                <span className="text-sm text-red-400">
                  {formState.errors.title.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label>Quantas vezes na semana?</Label>
              <Controller
                control={control}
                name="desiredWeeklyFrequency"
                defaultValue={1}
                render={({ field }) => {
                  return (
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={String(field.value)}
                    >
                      <DialogRadioGroup />
                    </RadioGroup>
                  )
                }}
              />
            </div>
          </div>

          <ComponentDialogButtons />
        </form>
      </div>
    </DialogContent>
  )
}
