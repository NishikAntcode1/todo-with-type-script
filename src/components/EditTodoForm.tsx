import { useState } from "react";
import type { TodoType } from "./TodoType";
type EditTodoFormProps = {
  editTodo: (value: string, id: string) => void;
  task: TodoType;
};
export default function EditTodoForm({ editTodo, task }: EditTodoFormProps) {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editTodo(value, task.id);
  };
  return (
    <form id="editForm" onSubmit={handleSubmit} className="TodoForm">
      <input
        name="task"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Update task"
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
}
