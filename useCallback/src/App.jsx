import React from "react";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <TodoList />
    </div>
  );
};

export default App;