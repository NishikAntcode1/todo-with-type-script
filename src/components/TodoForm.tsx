import { useState } from "react";

type TodoFormProps = {
  addTodo: Function;
};

export const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      setValue("");
    }
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="TodoForm">
      <input
        name="task"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="What is the task today?"
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
