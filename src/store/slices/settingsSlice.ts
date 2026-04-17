import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type SettingsState = {
  darkMode: boolean;
  language: "en" | "gr";
};

const loadSettings = (): SettingsState => {
  try {
    const stored = localStorage.getItem("settings");
    return stored ? JSON.parse(stored) : { darkMode: false, language: "en" };
  } catch {
    return { darkMode: false, language: "en" };
  }
};

const initialState: SettingsState = loadSettings();

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
    },
    setLanguage: (state, action: PayloadAction<"en" | "gr">) => {
      state.language = action.payload;
    },
  },
});

export const { setDarkMode, setLanguage } = settingsSlice.actions;
export default settingsSlice.reducer;
