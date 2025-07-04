import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import type  { TodoType } from "./TodoType";
import { Todo } from "./Todo";
import EditTodoForm from "./EditTodoForm";


export const TodoWrapper = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const addTodo = (todo: string) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const deleteTodo = (id: string): void => setTodos(todos.filter((todo) => todo.id !== id));

  const editTodo = (id: string): void => setTodos(todos.map((todo) => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo));

  const editTask = (task: string, id: string) => setTodos(todos.map((todo) => todo.id == id ? {...todo, task, isEditing: !todo.isEditing} : todo));

  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done !</h1>
      <TodoForm addTodo={addTodo} />
      {
        todos.map((todo) => todo.isEditing ? (<EditTodoForm key={todo.id} editTodo={editTask} task={todo} />) : (
          <Todo key={todo.id} task={todo} deleteTodo={deleteTodo} editTodo={editTodo} toggleComplete={toggleComplete} />
        ) )
      }
    </div>
  );
};
