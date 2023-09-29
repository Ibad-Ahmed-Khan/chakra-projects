import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

const DataRow = ({ item }) => {
  return (
    <tr>
      <td>{item.name.english}</td>
      <td>{item.type} </td>
    </tr>
  );
};

function App() {
  const [data, setData] = useState([]);
  React.useEffect(() => {
    fetch("http://localhost:3000/data.json")
      .then((resp) => resp.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <h1>jake series</h1>
      <table width={"100%"}>
        <thead>
          <tr>
            <th>english</th>
            <th>type</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return <DataRow item={item} key={item.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
