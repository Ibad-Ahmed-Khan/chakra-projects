import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  function saveItems(e) {
    e.preventDefault();
    if (input == "") return;
    setItems((prev) => [...prev, input]);
    setInput("");
  }

  function del(a) {
    const newItems = [...items];
    newItems.splice(a, 1);
    setItems(newItems);
  }

  const handleChange = (e) => {
    if (e.target.checked) {
      console.log("yes");
    } else {
      console.log("no");
    }
  };
  function completed(e) {
    if (e.target.checked) {
    }
  }
  function incompleted() {}

  function all() {}

  return (
    <div className="parent">
      <div className="to-do-list">
        <h1>to-do-list</h1>
        <form>
          <input
            className="input"
            placeholder="write and add"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="btn" onClick={saveItems}></button>
        </form>
        <select>
          {" "}
          <option onChange={all}>all</option>
          <option onChange={completed}>completed</option>
          <option onChange={incompleted}>incompleted</option>
        </select>
        <ol className="items">
          {items.map((it, index) => (
            <li key={index}>
              {it}
              <button className="del" onClick={() => del(index)}>
                ×
              </button>
              <input type="checkbox" onChange={handleChange} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
