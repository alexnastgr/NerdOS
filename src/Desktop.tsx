import Wallpaper from "@/components/Wallpaper";
import StatusBar from "@/components/statusbar";
import Windows from "@/components/Windows";
import DockBar from "@/components/dockbar";

export default function Desktop() {
  return (
    <div className="desktop">
      <Wallpaper />
      <Windows />
      <StatusBar />
      <DockBar />
    </div>
  );
}
