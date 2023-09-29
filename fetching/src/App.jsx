import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("https://dummyjson.com/users/5/todos").then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);

  return (
    <div className="App">
      <div className="fetching">
        <h1>Fetching</h1>
        {data && data.todos && (
          <pre>
            {JSON.stringify(
              data.todos.map((item) => item.id),
              null,
              2
            )}
          </pre>
        )}
      </div>
    </div>
  );
}

export default App;
