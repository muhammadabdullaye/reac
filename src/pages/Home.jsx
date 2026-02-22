import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() === "") return;

    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="home-react">
        <h1>Mening Loyihalarim</h1>
      </div>

      <header className="home-header">
        <div className="Todo">
          <h1>Todo App</h1>
        </div>

        <div className="input-class1">
          <div className="homme">
            <input
              className="input-class"
              type="text"
              placeholder="Vazifa yozing..."
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button className="button" onClick={addTodo}>
              add
            </button>
          </div>
        </div>

        <div className="todo-list">
          {todos.map((item, index) => (
            <div key={index} className="todo-item">
              <span>
                {index + 1}. {item}
              </span>
              <button
                className="delete-btn"
                onClick={() => deleteTodo(index)}
              >
                🗑
              </button>
            </div>
          ))}
        </div>
      </header>

      <div className="home-container">
        <div className="count-container">
          <button
            onClick={() => setCount(count - 1)}
            className="decrement"
          >
            -
          </button>

          <div className="count">{count}</div>

          <button
            onClick={() => setCount(count + 1)}
            className="increment"
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;