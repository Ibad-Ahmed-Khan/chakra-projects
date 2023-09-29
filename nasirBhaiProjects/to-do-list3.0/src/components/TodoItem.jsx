export const TodoItem = ({ todo, toggleTodo, del }) => {
  return (
    <li>
      <label>
        <input
          onChange={(e) => toggleTodo(todo.id, e.target.checked)}
          type="checkbox"
          className="checkbox"
          checked={todo.completed}
        />
        {todo.title}
        <button onClick={() => del(todo.id)} className="del">
          delete
        </button>
      </label>
    </li>
  );
};
