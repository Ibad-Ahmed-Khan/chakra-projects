import React from "react";

function Todo({ todos, completeTodo, del, done }) {
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div className="flex-row">
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
        <div className="btns">
          <button onClick={() => done(todo.id)}>done</button>
          <button onClick={() => del(todo.id)}>del</button>
        </div>
      </div>
    </div>
  ));
}

export default Todo;
