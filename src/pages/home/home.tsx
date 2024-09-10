import logo from "../../assets/logo-in-orbit.svg"
import letsStart from "../../assets/lets-start.svg"
import { DialogTrigger } from "../../components/ui/dialog"
import { Plus } from "lucide-react"
import { Button } from "../../components/ui/button"

export function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="In.Orbit" />
      <img src={letsStart} alt="In.Orbit" />
      <p className="text-znc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta. Que tal cadastrar uma agora
        mesmo?
      </p>

      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  )
}
