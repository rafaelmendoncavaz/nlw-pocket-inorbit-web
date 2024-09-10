import { Dialog, DialogContent } from "./components/ui/dialog"
import { ComponentRadio } from "./components/radio/radio"
import { ComponentDialogButtons } from "./components/dialog/dialog-buttons"
import { ComponentDialogInput } from "./components/dialog/dialog-input"
import { ComponentDialogHeader } from "./components/dialog/dialog-header"
import { Home } from "./pages/home/home"
import { Summary } from "./pages/summary/summary"

function App() {
  return (
    <Dialog>
      {/* <Home /> */}
      <Summary />

      <DialogContent>
        <div className="flex flex-col gap-6 h-full">
          <ComponentDialogHeader />

          <form className="flex-1 flex flex-col justify-between">
            <div className="flex flex-col gap-6">
              <ComponentDialogInput />
              <ComponentRadio />
            </div>

            <ComponentDialogButtons />
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default App
