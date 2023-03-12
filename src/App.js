import React from "react";
import "./App.css";
import TodoApp from "./components/toDoApp/TodoApp";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <>
      <Wrapper>
        <h1>My List</h1> <br />
        <TodoApp />
      </Wrapper>
    </>
  );
}

export default App;
