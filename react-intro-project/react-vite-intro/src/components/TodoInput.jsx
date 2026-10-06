import { useState } from "react";

function TodoInput({ onAdd }) {
  const [name, setName] = useState("");
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          if (name.trim() === "") return;

          setName("");
          onAdd(name);
        }}
      >
        Добавить
      </button>
    </div>
  );
}
export default TodoInput;
