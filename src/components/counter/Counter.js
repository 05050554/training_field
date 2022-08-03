import React from "react";
import "./CounterCss.css";
import CounterButton from "./CounterButton";
import CountTextField from "./CountTextField";
import NumberView from "./NumberView";
import ZeroButton from "./ZeroButton";
import Navbar from "../Navbar";
import Box from "@mui/material/Box";

const Counter = () => {
  return (
    <div>
      <Navbar />
      <Box sx={{ p: 2 }}>
        <NumberView />
        <CounterButton />
        <CountTextField />
        <ZeroButton />
      </Box>
    </div>
  );
};

export default Counter;
