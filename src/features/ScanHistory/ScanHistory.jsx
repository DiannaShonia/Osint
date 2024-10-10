import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import ScanResultCard from "../../components/ScanResultCard/ScanResultCard";
import styles from "./ScanHistory.module.scss";
import { restrictToParentElement } from "@dnd-kit/modifiers";

const SortableItem = ({ id, index }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 1000 : 1,
    cursor: isDragging ? "grabbing" : "default",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <ScanResultCard isScanHistoryPage key={index} id={id} />
    </div>
  );
};

const ScanHistory = () => {
  const defaultArray = [1, 2, 3, 4];

  const [cardArray, setCardArray] = useState(() => {
    const saved = localStorage.getItem("sortedCardArray");
    return saved ? JSON.parse(saved) : defaultArray;
  });

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setCardArray((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);
        const newArray = arrayMove(items, oldIndex, newIndex);

        localStorage.setItem("sortedCardArray", JSON.stringify(newArray));
        return newArray;
      });
    }
  };

  return (
    <div className={styles.mainContainer}>
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        modifiers={[restrictToParentElement]}
      >
        <SortableContext items={cardArray}>
          <div className={styles.cardParent}>
            {cardArray.map((id, index) => (
              <SortableItem key={id} id={id} index={index} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default ScanHistory;
