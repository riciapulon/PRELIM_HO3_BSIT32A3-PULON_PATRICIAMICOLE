import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState(["Task 1", "Task 2", "Task 3"]);

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => removeTodo(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
