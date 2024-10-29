import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm(
) {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();
    return (
        <li className="list-group-item d-flex align-items-center">
        <input
          className="form-control me-5"
          value={todo.title}
          onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
          placeholder="Enter todo"
        />
        <button onClick={() => dispatch(updateTodo(todo))} className="btn btn-warning me-2">
          Update
        </button>
        <button onClick={() => dispatch(addTodo(todo))} className="btn btn-success">
          Add
        </button>
      </li>
  );}
  