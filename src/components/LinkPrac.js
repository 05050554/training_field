import React from "react";
import { Link } from "react-router-dom";

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import { TextareaAutosize } from "@material-ui/core";
import Navbar from "./Navbar"

const theme = createMuiTheme({
  palette: {
    primary: {
   
      main: purple[500],
    },
    secondary: {

      main: '#11cb5f',
    },
  },
});

const useStyles = makeStyles({
  root: {
    backgroundColor: 'red',
  },
});

const LinkPrac = () => {
  const classes = useStyles();
  return (
    
    <div className={classes.root}>
      {/* <Navbar/> */}
    {/* <ThemeProvider theme={theme}>
      <Button color = "secondary"><Link to="/Api">Click To Api_Prectice</Link></Button>
    </ThemeProvider><br/> */}
    <Button className={classes.root}>btn</Button>
    </div>

  );
};

export default LinkPrac;
