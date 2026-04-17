import React from "react";
import { styles } from "@/styles";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useSettings } from "@/hooks/useSettings";
import { useDockApps } from "@/hooks/useDockApps";
import DragElement from "@components/DragElement";
import { CloseBtn } from "@/assets/icons/Huge";


export default function Notepad() {
  const { darkMode, language } = useSettings();

  const { isOpen, closeApp } = useDockApps();

  const [notes, setNotes] = useLocalStorage("saved_notes", "");
  const [letters, setLetters] = React.useState(0);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setNotes(text);
    setLetters(text.length);
  };

  React.useEffect(() => {
    setLetters(notes.length);
  }, [notes]);

  const close = () => {
    closeApp("Notepad");
  };
  
  if (!isOpen("Notepad")) return null;
  return (
    <DragElement>
      <div className={`notepad ${darkMode ? styles.dark : styles.light}`}>
        <div className="titlebar cursor-move text-lg font-extrabold relative">
          {language === "en" ? "Notepad" : "Σημειωματάριο"}

          <div className="btnclose hover:text-red-500" onClick={close}>
            <CloseBtn />
          </div>
        </div>

        <textarea
          onChange={onChange}
          value={notes ?? ""}
          placeholder={
            language === "en" ? "Write something..." : "Γράψε κάτι..."
          }
          className="notepad-textarea"
        />

        <div className="text-xs mt-2">
          {letters} {language === "en" ? "characters" : "χαρακτήρες"}
        </div>
      </div>
    </DragElement>
  );
}
