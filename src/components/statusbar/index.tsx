import { useSettings } from "@/hooks/useSettings";
import { styles } from "@/styles";

import MenuButton from "./MenuButton";
import TimeView from "./TimeView";
import ThemeSwitch from "./ThemeSwitch";

export default function StatusBar() {
  const { darkMode } = useSettings();
  const darkStyle = styles.dark;
  const lightStyle = styles.light;

  return (
    <div className={`statusbar ${darkMode ? darkStyle : lightStyle}`}>
      <MenuButton />

      <div className="flex flex-row gap-2 justify-center items-center absolute right-4">
        <TimeView />
        <ThemeSwitch />
      </div>
    </div>
  );
}
