export interface DockApp {
  name: {
    en: string;
    gr: string;
  };
  isOpen: boolean;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
