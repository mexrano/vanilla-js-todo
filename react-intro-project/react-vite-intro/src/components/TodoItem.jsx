function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="todo-item">
      <div className="todo-content">
        <input
          className="input-checkbox"
          checked={todo.completed}
          type="checkbox"
          onChange={() => onToggle(todo.id)}
        />
        <span className={todo.completed ? "todo-text completed" : "todo-text"}>
          {todo.title}
        </span>
      </div>
      <button className="todo-delete-btn" onClick={() => onDelete(todo.id)}>
        Удалить
      </button>{" "}
    </li>
  );
}
export default TodoItem;
