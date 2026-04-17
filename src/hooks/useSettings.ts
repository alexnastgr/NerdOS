import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import type { RootState, AppDispatch } from "@/store/store"
import { setDarkMode, setLanguage } from "@/store/slices/settingsSlice"

export function useSettings() {
  const dispatch = useDispatch<AppDispatch>()
  const settings = useSelector((state: RootState) => state.settings)

  // 🔥 persist στο localStorage
  useEffect(() => {
    localStorage.setItem("settings", JSON.stringify(settings))
  }, [settings])

  const toggleDarkMode = () => {
    dispatch(setDarkMode(!settings.darkMode))
  }

  const changeLanguage = (language: "en" | "gr") => {
    dispatch(setLanguage(language))
  }

  return {
    darkMode: settings.darkMode,
    language: settings.language,
    toggleDarkMode,
    changeLanguage,
  }
}