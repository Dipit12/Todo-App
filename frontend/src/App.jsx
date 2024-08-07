import { useState, useEffect } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodos";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(res => res.json())
      .then(json => {
        setTodos(json.todos);
      });
  }, []);

  return (
    <div className="container">
      <h1>Todo App</h1>
      <CreateTodo setTodos={setTodos} />
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
