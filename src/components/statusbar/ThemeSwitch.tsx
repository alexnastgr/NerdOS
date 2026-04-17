import { useSettings } from "@/hooks/useSettings";
import { ThemeToggle } from "@/assets/icons/Huge";

export default function ThemeSwitch() {
  const { toggleDarkMode } = useSettings();

  return (
    <div onClick={toggleDarkMode}>
      <ThemeToggle width={27} />
    </div>
  );
}
