function TodoFooter({ setFilter, count, onClear, filter }) {
  return (
    <footer className="todo-footer">
      <span className="todo-count">Осталось: {count}</span>
      <div className="todo-filters">
        <button
          className={
            filter === "all" ? "todo-filter-btn active" : "todo-filter-btn"
          }
          onClick={() => setFilter("all")}
        >
          Все
        </button>
        <button
          className={
            filter === "active" ? "todo-filter-btn active" : "todo-filter-btn"
          }
          onClick={() => setFilter("active")}
        >
          Активные
        </button>
        <button
          className={
            filter === "completed"
              ? "todo-filter-btn active"
              : "todo-filter-btn"
          }
          onClick={() => setFilter("completed")}
        >
          Завершённые
        </button>
      </div>
      <button
        className="todo-clear-btn"
        onClick={() => {
          onClear();
        }}
      >
        Очистить завершённые
      </button>
    </footer>
  );
}
export default TodoFooter;
