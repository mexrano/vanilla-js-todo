import { useState } from "react";

function App() {
  const [name, setName] = useState("");
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

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <span>Осталось: {result.length}</span>
      <button
        onClick={() => {
          const clearFilter = item.filter((it) => it.completed === false);

          setItem(clearFilter);
          localStorage.setItem("todos", JSON.stringify(clearFilter));
        }}
      >
        Очистить завершённые
      </button>
      <button
        onClick={() => {
          if (name.trim() === "") return;

          setName("");
          const updated = [
            ...item,
            { id: Date.now(), title: name, completed: false },
          ];
          setItem(updated);
          localStorage.setItem("todos", JSON.stringify(updated));
        }}
      >
        Добавить
      </button>
      {filteredItems.length === 0 ? (
        <p>Список пуст, добавь тренировку</p>
      ) : (
        <ul>
          {filteredItems.map((elem) => (
            <li key={elem.id}>
              <input
                checked={elem.completed}
                type="checkbox"
                onChange={() => {
                  const map = item.map((it) =>
                    it.id === elem.id
                      ? { ...it, completed: !it.completed }
                      : it,
                  );
                  setItem(map);
                  localStorage.setItem("todos", JSON.stringify(map));
                }}
              />
              {elem.completed ? <s>{elem.title}</s> : elem.title}{" "}
              <button
                onClick={() => {
                  const filtered = item.filter((it) => it.id !== elem.id);
                  setItem(filtered);
                  localStorage.setItem("todos", JSON.stringify(filtered));
                }}
              >
                Удалить
              </button>{" "}
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => setFilter("all")}>Все</button>
      <button onClick={() => setFilter("active")}>Активные</button>
      <button onClick={() => setFilter("completed")}>Завершённые</button>
    </div>
  );
}

export default App;
