import { type CSSProperties } from "react";

export default function Wallpaper() {
  const style: CSSProperties = {
    width: "100dvw",
    height: "100dvh",
    backgroundSize: "cover",
    backgroundImage: "url('bg/2.jpg')",
  };
  return <div style={style} className="brightness-100 bg-center"></div>;
}
