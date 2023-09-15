import React from "react";
import { Todo } from "../types/todo.type";

type TodoItemProps = {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className="flex items-center mb-2">
      <span className={`flex-grow ${todo.completed ? "line-through" : ""}`}>
        {todo.text}
      </span>
      <button
        onClick={() => toggleTodo(todo.id)}
        className="text-blue-500 hover:text-blue-600 mr-2"
      >
        {todo.completed ? "Не выполнено" : "Выполнено"}
      </button>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 hover:text-red-800"
      >
        Удалить
      </button>
    </li>
  );
};

export default TodoItem;
