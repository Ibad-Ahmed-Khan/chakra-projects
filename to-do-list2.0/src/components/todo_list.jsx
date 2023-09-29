import React, { useState } from "react";
import Todoform from "./todo_form";
import Todo from "./todo";

const Todolist = () => {
  const [todos, setTodos] = useState([]);
  const [isStriked, setIsStriked] = useState(false);

  function addTodo(todo) {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    // i think the upper code is not compulsary ^
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(todo, ...todos);
  }

  const del = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id != id);

    setTodos(removeArr);
  };

  const done = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isComplete: !todo.isComplete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isComplete: !todo.isComplete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>Whats Your Plan Today?</h1>
      <Todoform onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} del={del} done={done} />
    </>
  );
};

export default Todolist;
