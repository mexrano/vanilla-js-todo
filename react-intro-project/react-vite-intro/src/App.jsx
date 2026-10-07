import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoFooter from "./components/TodoFooter";
import TodoList from "./components/TodoList";

function App() {
  const [filter, setFilter] = useState("all");
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || [],
  );

  let filteredItems = items;
  if (filter === "active") {
    filteredItems = items.filter((it) => it.completed === false);
  }
  if (filter === "completed") {
    filteredItems = items.filter((it) => it.completed === true);
  }
  const result = items.filter((it) => it.completed === false);

  function handleAddTodo(title) {
    const updated = [
      ...items,
      { id: Date.now(), title: title, completed: false },
    ];
    localStorage.setItem("todos", JSON.stringify(updated));
    setItems(updated);
  }
  function handleDelete(id) {
    const filtered = items.filter((it) => it.id !== id);
    setItems(filtered);
    localStorage.setItem("todos", JSON.stringify(filtered));
  }
  function handleToggle(id) {
    const map = items.map((it) =>
      it.id === id ? { ...it, completed: !it.completed } : it,
    );
    setItems(map);
    localStorage.setItem("todos", JSON.stringify(map));
  }
  function handleClearCompleted() {
    const clearFilter = items.filter((it) => it.completed === false);

    setItems(clearFilter);
    localStorage.setItem("todos", JSON.stringify(clearFilter));
  }
  return (
    <div className="todo-app">
      <TodoInput onAdd={handleAddTodo} />
      <TodoList
        items={filteredItems}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
      <TodoFooter
        filter={filter}
        setFilter={setFilter}
        count={result.length}
        onClear={handleClearCompleted}
      />
    </div>
  );
}

export default App;
