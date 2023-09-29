import logo from "./logo.svg";
import Collapse from "./components/collapse";

function App() {
  const items = [
    { title: "First Title", content: "Any contnt" },
    { title: "Seoncd Title", content: "Any contnt" },
    { title: "Third Title", content: "Any contnt" },
    { title: "Fourth Title", content: "Any contnt" },
    { title: "Fifth Title", content: "Any contnt" },
    { title: "Sixth Title", content: "Any contnt" },
  ];
  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {items.map((item, i) => {
        return <Collapse title={item.title} content={item.content} />;
      })}
    </div>
  );
}
export default App;
