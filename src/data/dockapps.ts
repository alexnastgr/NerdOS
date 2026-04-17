import { type DockApp } from "@/types/dockApp";
import { Menu, Terminal, Notepad, Settings, Games } from "@/assets/icons/Huge";

export const dockApps: DockApp[] = [
  {
    name: {
      en: "Menu",
      gr: "Μενού",
    },
    isOpen: false,
    icon: Menu,
  },

  {
    name: {
      en: "Settings",
      gr: "Ρυθμίσεις",
    },
    isOpen: false,
    icon: Settings,
  },

  {
    name: {
      en: "Terminal",
      gr: "Τερματικό",
    },
    isOpen: false,
    icon: Terminal,
  },

  {
    name: {
      en: "Notepad",
      gr: "Σημειώσεις",
    },
    isOpen: false,
    icon: Notepad,
  },

  {
    name: {
      en: "Games",
      gr: "Παιχνίδια",
    },
    isOpen: false,
    icon: Games,
  },
];
