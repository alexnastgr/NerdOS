import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { loadDockApps, saveDockApps } from "@/utils/dockStorage";
import { type DockApp } from "@/types/dockApp";

type DockState = {
  apps: DockApp[];
};

const initialState: DockState = {
  apps: loadDockApps(),
};

const dockSlice = createSlice({
  name: "dock",
  initialState,
  reducers: {
    reorderApps: (
      state,
      action: PayloadAction<{ oldIndex: number; newIndex: number }>,
    ) => {
      const { oldIndex, newIndex } = action.payload;

      const moved = state.apps.splice(oldIndex, 1)[0];
      state.apps.splice(newIndex, 0, moved);
      saveDockApps(state.apps);
    },

    setAppOpen: (state, action) => {
      const app = state.apps.find((a) => a.name.en === action.payload.id);
      if (app) {
        app.isOpen = action.payload.isOpen;
      }
    },
  },
});

export const { reorderApps, setAppOpen } = dockSlice.actions;
export default dockSlice.reducer;
