export default function UserCard({ name, city = "Не указан", age }) {
  return (
    <div>
      <p>{name}</p>
      <p>{city}</p>
      <p>{age}</p>
    </div>
  );
}
