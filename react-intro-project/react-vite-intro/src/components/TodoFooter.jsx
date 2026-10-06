function TodoFooter({ setFilter, count, onClear }) {
  return (
    <div>
      <span>Осталось: {count}</span>
      <button
        onClick={() => {
          onClear();
        }}
      >
        Очистить завершённые
      </button>
      <button onClick={() => setFilter("all")}>Все</button>
      <button onClick={() => setFilter("active")}>Активные</button>
      <button onClick={() => setFilter("completed")}>Завершённые</button>
    </div>
  );
}
export default TodoFooter;
