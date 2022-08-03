import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useState } from "react";
import { incrementByAmount, incrementAsync } from "./counterSlice";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
const CountTextField = () => {
  const [incrementAmount, setIncrementAmount] = useState("2");
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <Box className="BoxJistifyCenter" sx={{ p: 2 }}>
          <TextField
            label="Add Number"
            variant="outlined"
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
          />
        </Box>
      </div>
      <div className="BoxJistifyCenter">
        <Box className="BoxMultipleJistifyCenter" sx={{ width: 300, p: 2 }}>
          <Button
            variant="contained"
            onClick={() =>
              dispatch(incrementByAmount(Number(incrementAmount) || 0))
            }
          >
            Add Amount
          </Button>

          <Button
            variant="contained"
            onClick={() =>
              dispatch(incrementAsync(Number(incrementAmount) || 0))
            }
          >
            Add Async
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default CountTextField;
