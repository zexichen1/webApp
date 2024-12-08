import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
import "./TodoListStyles.css"; // 导入样式

interface Todo {
  id: string;
  title: string;
}

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useDispatch();
  
  return (
    <li className="list-group-item">
      {todo.title}
      <div>
        <button onClick={() => dispatch(setTodo(todo))} className="btn-edit">
          Edit
        </button>
        <button onClick={() => dispatch(deleteTodo(todo.id))} className="btn-delete">
          Delete
        </button>
      </div>
    </li>
  );
}
