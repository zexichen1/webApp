import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import "./TodoListStyles.css"; // 导入样式

export default function TodoForm() {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();

  return (
    <li className="list-group-item d-flex align-items-center">
      <input
        type="text"
        className="form-control me-2"
        defaultValue={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
      />
      <div className="ms-auto">
        <button onClick={() => dispatch(updateTodo(todo))} className="btn-update me-2">
          Update
        </button>
        <button onClick={() => dispatch(addTodo(todo))} className="btn-add">
          Add
        </button>
      </div>
    </li>
  );
}
