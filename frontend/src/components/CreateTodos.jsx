import { useState } from "react";

export function CreateTodo({ setTodos }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="todo-form">
      <input
        type="text"
        placeholder="Title"
        id="title"
        onChange={(e) => setTitle(e.target.value)}
      /> <br />
      <input
        type="text"
        placeholder="Description"
        id="description"
        onChange={(e) => setDescription(e.target.value)}
      /> <br />
      <button onClick={() => {
        fetch("http://localhost:3000/todos", {
          method: "POST",
          body: JSON.stringify({
            title: title,
            description: description
          }),
          headers: {
            "Content-Type": "application/json"
          }
        }).then(res => res.json())
          .then((newTodo) => {
            setTodos((prevTodos) => [...prevTodos, newTodo]);
            alert("Todo added");
          });
      }}>Add a todo</button>
    </div>
  );
}
