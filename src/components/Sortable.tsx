import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Launcher from "./dockbar/Launcher";
import { type DockApp } from "@/types/dockApp";

export default function SortableItem({ app }: { app: DockApp }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: app.name.en });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Launcher app={app} key={app.name.en} />
    </div>
  );
}
