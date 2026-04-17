import Notepad from "./apps/notepad/Notepad"

export default function Windows() {
  return (
    <div className="apps absolute w-full h-full top-8 z-30">
      <Notepad/>
    </div>
  )
}
