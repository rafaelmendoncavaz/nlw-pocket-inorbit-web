import { DialogContent } from "../ui/dialog"
import { ComponentDialogButtons } from "../dialog/dialog-buttons"
import { ComponentDialogHeader } from "../dialog/dialog-header"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { createGoalFormSchema } from "../../schemas/schemas"
import type { TypeCreateGoal } from "../../types/types"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from "../ui/radio-group"
import { createGoal } from "../../requests/create-goal"
import { useQueryClient } from "@tanstack/react-query"

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
                      <RadioGroupItem value="1">
                        <RadioGroupIndicator />
                        <span className="text-zinc-300 text-sm font-medium leading-none">
                          1x na semana
                        </span>
                        <span className="text-lg leading-none">🥱</span>
                      </RadioGroupItem>
                      <RadioGroupItem value="2">
                        <RadioGroupIndicator />
                        <span className="text-zinc-300 text-sm font-medium leading-none">
                          2x na semana
                        </span>
                        <span className="text-lg leading-none">🙂</span>
                      </RadioGroupItem>
                      <RadioGroupItem value="3">
                        <RadioGroupIndicator />
                        <span className="text-zinc-300 text-sm font-medium leading-none">
                          3x na semana
                        </span>
                        <span className="text-lg leading-none">😎</span>
                      </RadioGroupItem>
                      <RadioGroupItem value="3">
                        <RadioGroupIndicator />
                        <span className="text-zinc-300 text-sm font-medium leading-none">
                          4x na semana
                        </span>
                        <span className="text-lg leading-none">😜</span>
                      </RadioGroupItem>
                      <RadioGroupItem value="3">
                        <RadioGroupIndicator />
                        <span className="text-zinc-300 text-sm font-medium leading-none">
                          5x na semana
                        </span>
                        <span className="text-lg leading-none">🤨</span>
                      </RadioGroupItem>
                      <RadioGroupItem value="3">
                        <RadioGroupIndicator />
                        <span className="text-zinc-300 text-sm font-medium leading-none">
                          6x na semana
                        </span>
                        <span className="text-lg leading-none">🤯</span>
                      </RadioGroupItem>
                      <RadioGroupItem value="3">
                        <RadioGroupIndicator />
                        <span className="text-zinc-300 text-sm font-medium leading-none">
                          Todos os dias da semana
                        </span>
                        <span className="text-lg leading-none">🔥</span>
                      </RadioGroupItem>
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
