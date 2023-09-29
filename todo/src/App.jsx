import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [checkBox, setCheckBox] = useState(false);

  const form = (e) => {
    e.preventDefault();
    if (todo) {
      const newTodoItem = {
        id: Date.now(),
        text: todo,
      };
      setTodoList([...todoList, newTodoItem]);
      setTodo("");
    }
  };

  const del = (id) => {
    console.log(id);
    setTodoList(todoList.filter((dlt) => dlt.id !== id));
  };

  const checkbox = (e) => {
    setCheckBox(e.target.checked);
  };

  const select = (e) => {
    const selected = e.target.value;
    if (selected == "completed") {
      setTodoList(todoList.filter((item) => item.completed));
    } else if (selected == "unCompleted") {
      setTodoList(todoList.filter((item) => item == !item.completed));
    }
  };

  return (
    <div className="App">
      <form onSubmit={form} typeof="submit">
        <h2>todo list</h2>
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
        />
      </form>
      <ul>
        <select onChange={select}>
          <option>all</option>
          <option value={"completed"}>completed</option>
          <option value={"unCompleted"}>unCompleted</option>
        </select>
        {todoList.map((item) => {
          return (
            <li key={item.id}>
              <input
                onChange={checkbox}
                value={checkBox}
                className="checkbox"
                type="checkbox"
              />
              {item.text}
              <button onClick={() => del(item.id)} className="del">
                del
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
