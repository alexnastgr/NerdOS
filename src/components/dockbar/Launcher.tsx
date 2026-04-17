import { type DockApp } from "@/types/dockApp"
import { useSettings } from "@/hooks/useSettings"
import { dockAppStyles,styles} from "@/styles"
import { useDockApps } from "@/hooks/useDockApps"

interface Props {
  app: DockApp,
}

export default function Launcher({ app }: Props) {

  const {openApp} = useDockApps()
  const { darkMode } = useSettings()

  const open = () => {
    openApp(app.name.en)
  }
  const stateClass = darkMode
    ? app.isOpen
      ? dockAppStyles.dark.open
      : dockAppStyles.dark.closed
    : app.isOpen
      ? dockAppStyles.light.open
      : dockAppStyles.light.closed


  const Icon = app.icon

  if (!Icon) {
    console.error('Invalid icon for app:', app)
    return null
  }

  return (
    <div className={`group launcher ${stateClass}`} onClick={open}>
      <Icon width={36} />
      <div className={`tooltip ${styles[darkMode ? 'dark' : 'light']}`}>
        {app.name.en}
      </div>
    </div>
  )
}