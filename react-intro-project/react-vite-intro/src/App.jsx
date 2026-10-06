import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoFooter from "./components/TodoFooter";
import TodoList from "./components/TodoList";

function App() {
  const [filter, setFilter] = useState("all");
  const [item, setItem] = useState(
    JSON.parse(localStorage.getItem("todos")) || [],
  );

  let filteredItems = item;
  if (filter === "active") {
    filteredItems = item.filter((it) => it.completed === false);
  }
  if (filter === "completed") {
    filteredItems = item.filter((it) => it.completed === true);
  }
  const result = item.filter((it) => it.completed === false);

  function handleAddTodo(title) {
    const updated = [
      ...item,
      { id: Date.now(), title: title, completed: false },
    ];
    localStorage.setItem("todos", JSON.stringify(updated));
    setItem(updated);
  }
  function handleDelete(id) {
    const filtered = item.filter((it) => it.id !== id);
    setItem(filtered);
    localStorage.setItem("todos", JSON.stringify(filtered));
  }
  function handleToggle(id) {
    const map = item.map((it) =>
      it.id === id ? { ...it, completed: !it.completed } : it,
    );
    setItem(map);
    localStorage.setItem("todos", JSON.stringify(map));
  }
  function handleClearCompleted() {
    const clearFilter = item.filter((it) => it.completed === false);

    setItem(clearFilter);
    localStorage.setItem("todos", JSON.stringify(clearFilter));
  }
  return (
    <div className="todo-app">
      <TodoInput onAdd={handleAddTodo} />
      <TodoFooter
        setFilter={setFilter}
        count={result.length}
        onClear={handleClearCompleted}
      />
      <TodoList
        items={filteredItems}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
