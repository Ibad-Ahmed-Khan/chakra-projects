import React, { useState } from "react";

const Todoform = (props) => {
  const [input, setInput] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setInput(e.target.value);
  }

  function handleButton(e) {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  }

  return (
    <form className="todo_form" onSubmit={handleButton}>
      <input
        className="todo_input"
        onChange={handleChange}
        value={input}
        type="text"
        placeholder="Add a todo"
      />
      <input type="submit" value="Add todo" />
    </form>
  );
};

export default Todoform;
