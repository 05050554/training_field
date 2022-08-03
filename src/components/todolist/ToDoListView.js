import React from "react";
import { useSelector } from "react-redux";
import { deleteTask } from "./ToDoListSlice";

import { useDispatch } from "react-redux";

import Box from "@mui/material/Box";

import Button from "@mui/material/Button";

const ToDoListView = () => {
  const todos = useSelector((state) => {
    return state.task;
  });
  const dispatch = useDispatch();

  const removeTask = (id) => {
    dispatch(
      deleteTask({
        id: id,
      })
    );
  };
  return (
    <div>
      {todos.map((todo, index) => (
        <div className="listContain">
          <Box sx={{ p: 2 }} className="listContainIndex">
            <span>{index}</span>
          </Box>
          <Box sx={{ p: 2 }} className="listContainName">
            <span>{todo.name}</span>
          </Box>
          <Box sx={{ p: 2 }} className="listContainDelete">
            <Button
              onClick={() => {
                removeTask(todo.id);
              }}
            >
              delete
            </Button>
          </Box>
        </div>
      ))}
    </div>
  );
};

export default ToDoListView;
