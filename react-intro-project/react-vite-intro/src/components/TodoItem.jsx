function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li key={todo.id}>
      <input
        checked={todo.completed}
        type="checkbox"
        onChange={() => onToggle(todo.id)}
      />
      {todo.completed ? <s>{todo.title}</s> : todo.title}{" "}
      <button onClick={() => onDelete(todo.id)}>Удалить</button>{" "}
    </li>
  );
}
export default TodoItem;
