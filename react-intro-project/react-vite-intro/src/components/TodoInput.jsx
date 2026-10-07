import { useState } from "react";

function TodoInput({ onAdd }) {
  const [name, setName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (name.trim() === "") {
      return;
    }
    onAdd(name.trim());
    setName("");
  }
  return (
    <form onSubmit={handleSubmit} className="todo-input-form">
      <input
        placeholder="Что нужно сделать?"
        className="todo-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" className="todo-add-btn">
        Добавить
      </button>
    </form>
  );
}
export default TodoInput;
