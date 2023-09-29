const del = (id) => {
  //   setTodos((currentTodos) => {
  //     return currentTodos.filter((todo) => todo.id !== id);
  //   });
};

export const Main = ({ todo, toggle }) => (
  <label>
    <input
      onChange={(e) => toggle(todo.id, e.target.checked)}
      type="checkbox"
      className="checkbox"
      checked={todo.completed}
    />
    <p>{todo.title}</p>
    <button onClick={() => del(todo.id)} className="del">
      delete
    </button>
  </label>
);
