import TodoItem from "./TodoItem";

function TodoList({ items, onToggle, onDelete }) {
  return items.length === 0 ? (
    <p>Список пуст, добавь тренировку</p>
  ) : (
    <ul>
      {items.map((elem) => (
        <TodoItem
          key={elem.id}
          onDelete={onDelete}
          onToggle={onToggle}
          todo={elem}
        />
      ))}
    </ul>
  );
}
export default TodoList;
