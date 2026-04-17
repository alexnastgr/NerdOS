import { type BtnProps } from "@/types/buttons";

const stylesMap = {
  primary: "bg-primary text-white",
  secondary: "bg-secondary text-white",
  danger: "bg-red-500 text-white",
};

export default function Button({
  type = "button",
  style = "primary",
  text,
  onClick,
}: BtnProps) {
  const clsname = `w-full h-8 rounded-md ${stylesMap[style]}`;

  return (
    <button type={type} onClick={onClick} className={clsname}>
      {text}
    </button>
  );
}
