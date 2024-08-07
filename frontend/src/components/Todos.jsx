export function Todos({ todos }) {
    return (
      <div className="todos-list">
        {todos.map((todo, index) => (
          <div key={index} className="todo-item">
            <div>
              <h1>{todo.title}</h1>
              <h2>{todo.description}</h2>
            </div>
            <button>
              {todo.completed ? "Completed" : "Mark as completed"}
            </button>
          </div>
        ))}
      </div>
    );
  }
  