import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";
// import styles from "./CounterCSS.css";
import "./CounterCss.css";
const CounterButton = () => {
  const dispatch = useDispatch();
  return (
    <div className="BoxJistifyCenter">
      <Box className="BoxMultipleJistifyCenter" sx={{ width: 300, p: 2 }}>
        <Button
          variant="contained"
          aria-label="Add value"
          onClick={() => dispatch(increment())}
        >
          Increase
        </Button>

        <Button
          variant="contained"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrease
        </Button>
      </Box>
    </div>
  );
};

export default CounterButton;
