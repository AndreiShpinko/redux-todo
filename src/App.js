import React from "react";
import { useSelector } from "react-redux";

import "./App.scss";

import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Todo</h1>
        <div className="wrapper">
          <Dashboard />
          <TodoList />
          <Form />
        </div>
      </div>
    </div>
  );
};

export default App;
