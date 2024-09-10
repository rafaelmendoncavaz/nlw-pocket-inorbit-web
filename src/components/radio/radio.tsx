import { Label } from "../ui/label"
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from "../ui/radio-group"

export function ComponentRadio() {
  return (
    <div className="flex flex-col gap-2">
      <Label>Quantas vezes na semana?</Label>
      <RadioGroup>
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
      </RadioGroup>
    </div>
  )
}
