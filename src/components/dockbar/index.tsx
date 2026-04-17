import { useSettings } from "@/hooks/useSettings";
import { styles } from "@/styles";

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";

import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";

import {
  restrictToParentElement,
  restrictToHorizontalAxis,
} from "@dnd-kit/modifiers";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { reorderApps } from "@/store/slices/dockSlice";

import Sortable from "../Sortable";

export default function DockBar() {
  const apps = useAppSelector((state) => state.dockbar.apps);
  const dispatch = useAppDispatch();
  const { darkMode } = useSettings();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 6,
      },
    }),
  );

  const style = darkMode ? styles.dark : styles.light;

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = apps.findIndex((a) => a.name.en === active.id);
    const newIndex = apps.findIndex((a) => a.name.en === over.id);

    if (oldIndex === -1 || newIndex === -1) return;

    dispatch(reorderApps({ oldIndex, newIndex }));
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToParentElement, restrictToHorizontalAxis]}
    >
      <SortableContext
        items={apps.map((app) => app.name.en)}
        strategy={horizontalListSortingStrategy}
      >
        <div
          className={`
           dockbar
            touch-none
            ${style}
          `}
        >
          {apps.map((app) => (
            <Sortable key={app.name.en} app={app} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}
