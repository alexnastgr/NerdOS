import { dockApps } from "@/data/dockapps";
import { type DockApp } from "@/types/dockApp";

const STORAGE_KEY = "apps_order";

export const saveDockApps = (apps: DockApp[]) => {
  const ids = apps.map((app) => app.name.en);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
};

export const loadDockApps = (): DockApp[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return dockApps;

    const ids: string[] = JSON.parse(saved);

    const mapped = ids
      .map((id) => dockApps.find((app) => app.name.en === id))
      .filter((app): app is DockApp => Boolean(app));

    if (mapped.length !== ids.length) {
      return dockApps;
    }

    return mapped;
  } catch {
    return dockApps;
  }
};
