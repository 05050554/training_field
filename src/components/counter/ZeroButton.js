import React from "react";
import { returnToZero } from "./counterSlice";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
const ZeroButton = () => {
  const dispatch = useDispatch();
  return (
    <Box className="BoxJistifyCenter" sx={{ p: 2, border: "1px " }}>
      <Button variant="contained" onClick={() => dispatch(returnToZero())}>
        Return to Zero!
      </Button>
    </Box>
  );
};

export default ZeroButton;
