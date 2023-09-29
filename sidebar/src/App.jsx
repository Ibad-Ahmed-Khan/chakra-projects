import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/nav";
import { Data } from "./Data";

const Component = ({ item }) => (
  <div className="return">
    <p>{item.name} </p>
    <h2>{item.id} </h2>
  </div>
);

function App() {
  return (
    <>
      <Nav />
      <div className="parent">
        {Data.map((item) => {
          return <Component item={item} key={item.id} />;
        })}
      </div>
    </>
  );
}

export default App;
