import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "./ToDoListSlice";
import "../CssModel.css"

const TodoItem = ({ id, title }) => {
  const dispatch = useDispatch();

  const removeTask = () => {
    dispatch(
      deleteTask({
        id: id,
      })
    );
  };
  return (
    <li>
      <span>{title}</span>
      <div>
        <button
          onClick={() => {
            removeTask();
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
