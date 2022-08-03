import React from "react";
import Typography from "@mui/material/Typography";
import { selectCount } from "./counterSlice";
import { useSelector } from "react-redux";

const NumberView = () => {
  const count = useSelector(selectCount);
  return (
    <Typography className="BoxTitle" variant="h3" gutterBottom component="div">
      {count}
    </Typography>
  );
};

export default NumberView;
