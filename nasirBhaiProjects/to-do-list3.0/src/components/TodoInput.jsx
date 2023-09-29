export const TodoInput = ({ input, newItem }) => {
  return (
    <div className="form-row">
      <label htmlFor="item"> newItem</label>
      <input onChange={input} value={newItem} type="text" id="item" />
      <button>add</button>
    </div>
  );
};
