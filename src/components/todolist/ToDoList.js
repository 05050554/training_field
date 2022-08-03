import React, { useState } from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import style_to from "./ToDoList_Model.css";
import { deleteTask } from "./ToDoListSlice";
import { useDispatch } from "react-redux";
import ToDoListTextField from "./ToDoListTextField";
import ToDoListView from "./ToDoListView";
import ToDoListTitle from "./ToDoListTitle";
import Box from "@mui/material/Box";
import "./ToDoList_Model.css"

import { addTask } from "./ToDoListSlice";

import Navbar from "../Navbar";
const ToDoList = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    if (value.trim().length === 0) {
      alert("Enter someting !!");
      setValue("");
      return;
    }
    dispatch(
      addTask({
        task: value,
      })
    );
    setValue("");
  };

  const todos = useSelector((state) => {
    return state.task;
  });

  const removeTask = (id) => {
    dispatch(
      deleteTask({
        id: id,
      })
    );
  };

  return (
    <div >
      <Navbar />
      {/* <span>This is TodoList Page.</span>
      <br />
      <input
        type="text"
        className="text-input"
        placeholder="Add task"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>
      <button className="task-button" onClick={onSubmit}>
        Add
      </button>
      <br />
      <ul>
        {todos.map((todo) => (
          //傳值的寫法，如果不用這個就不用寫TodoItem.js

          //   <TodoItem
          //     id={todo.id}
          //     title={todo.name}
          //     completed={todo.status}
          //   ></TodoItem>

          <div>
            <li>{todo.name}</li>

            <button
              onClick={() => {
                removeTask(todo.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </ul> */}
      <Box className="contain">
        <ToDoListTitle/>
      <ToDoListTextField />
    

      <ToDoListView />
      
      </Box>
    </div>
  );
};

export default ToDoList;
