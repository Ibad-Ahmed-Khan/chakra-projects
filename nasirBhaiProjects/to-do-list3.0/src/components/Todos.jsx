import { useState } from "react";
import { TodoItem } from "./TodoItem";
import { TodoInput } from "./TodoInput";

export const Todos = () => {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setNewItem("");

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
  };

  const input = (e) => {
    setNewItem(e.target.value);
  };

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  const del = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div className="parent">
      <form onSubmit={handleSubmit}>
        <TodoInput input={input} newItem={newItem} />
      </form>
      <h1 className="header">todo list</h1>
      <ul>
        {todos.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              toggleTodo={toggleTodo}
              del={del}
              key={todo.id}
            />
          );
        })}
      </ul>
    </div>
  );
};
