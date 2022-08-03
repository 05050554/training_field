import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTask } from "./ToDoListSlice";


const ToDoListTextField = () => {
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
  return (
    <div className="fieldAdd">

      <Box sx={{ p: 2 }}>
        <TextField
          label="Add ToDo"
          variant="outlined"
          aria-label="Set increment amount"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Box>
      <Box sx={{ p: 2 }}>
        <Button className="addButton" onClick={onSubmit}>
          新增
        </Button>
      </Box>
    </div>
  );
};

export default ToDoListTextField;
