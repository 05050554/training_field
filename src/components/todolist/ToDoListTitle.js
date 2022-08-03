import React from "react";
import Box from "@mui/material/Box";

import styled from "styled-components";

const TitleContain = styled.div`
  display: grid;
`;

const Title = styled.h1`
  font-size: 50px;
  color:rgba(0, 0, 255, 0.493);
  ${props => props.size ==='SecondTitle' && `
      font-size:30px;
      color:rgba(51, 211, 64, 0.493);
  `}
`

const ToDoListTitle = () => {
  return (
    <TitleContain >
      <Box sx={{ p: 2 }}>
        <Title>This is ToDoList Page.</Title>
        <Title size="SecondTitle">Please type something in the textfield.</Title>
      </Box>
    </TitleContain>
  );
};

export default ToDoListTitle;
