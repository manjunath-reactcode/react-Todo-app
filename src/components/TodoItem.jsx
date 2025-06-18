import React from "react";
import { Trash2 } from "lucide-react";

export default function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <li className="flex items-center justify-between bg-gray-700 px-4 py-2 rounded-lg">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="form-checkbox h-5 w-5 text-cyan-500"
        />
        <span
          className={`text-sm ${
            todo.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-gray-400 hover:text-red-500"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </li>
  );
}
