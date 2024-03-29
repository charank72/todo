import React, { useState } from "react";
import { useTodos } from "./Context";

function TodoForm() {
  const { todos, addTodos, toggleComplete, deleteTodo } = useTodos();
  const [input, setInputValue] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTodos(setInputValue);
    setInputValue("");
  };
  return (
    <div>
      <h2>Todo List</h2>
      <form onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInputValue(e.target.value)}
          />{" "}
          <span>
            <button type="submit">Add</button>
          </span>
        </div>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            <span>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoForm;
