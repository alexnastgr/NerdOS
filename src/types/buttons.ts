export type BtnStyle = "primary" | "secondary" | "danger";
export type BtnType = "button" | "submit" | "reset";

export interface BtnProps {
  style?: BtnStyle;
  type?: BtnType;
  text: string;
  onClick?: () => void;
}
