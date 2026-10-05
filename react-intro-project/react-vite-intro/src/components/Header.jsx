import logo from "../assets/react.svg";

export default function Header() {
  const now = new Date();

  return (
    <header>
      <img src={logo} alt="React logo" width="30" />
      <span> Тут будет время: {now.toLocaleTimeString()}</span>
    </header>
  );
}
