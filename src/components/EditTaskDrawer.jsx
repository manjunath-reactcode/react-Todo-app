import { useEffect, useState } from "react";
import AddTaskDrawer from "./AddTaskDrawer";

export default function EditTaskDrawer({ open, onClose, editingTask, onSaveEdit }) {
  const [description, setDescription] = useState(editingTask?.title || "");

  
  useEffect(() => {
    setDescription(editingTask?.title || "");
  }, [editingTask]);

  const handleSave = () => {
    if (editingTask && description.trim()) {
      onSaveEdit(editingTask.id, description);
      onClose();
    }
  };

  return (
    <AddTaskDrawer
      open={open}
      onClose={onClose}
      description={description}
      setDescription={setDescription}
      onSave={handleSave}
    />
  );
}
