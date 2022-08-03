import Login from "./components/Login";
import React, { Component } from "react";
import State_Test from "./components/State_Test";
import Register from "./components/Register";
import TodoListGary from "./components/TodoListGary";

import "./App.css";
import Api from "./components/Api_Prectice";
import Charts from "./components/Charts";
import Get_Data from "./components/Get_Data";
import LinkPrac from "./components/LinkPrac";
import ToDoListRedux from "../src/components/todolist/ToDoList";

// import Redux_Test from "./components/Redux_Test";
import { Provider } from "react-redux";
import store from "./components/model/store";
import Counter from "../src/components/counter/Counter";
import Home from "./components/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const pages = [
  { element: <Home />, path: "/" },
  { element: <Api />, path: "/api" },
  { element: <Login />, path: "/Login" },
  { element: <Register />, path: "/Register" },
  { element: <Charts />, path: "/Charts" },
  { element: <TodoListGary />, path: "/TodoListGary" },
  { element: <ToDoListRedux />, path: "/ToDoListRedux" },
  { element: <Counter />, path: "/Counter" },
  { element: <State_Test />, path: "/State_Test" },
];

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {pages.map((page) => (
            <Route path={page.path} element={page.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
