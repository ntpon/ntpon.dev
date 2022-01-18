export default function Hero({ title, text = '' }) {
  return (
    <header className="hero">
      <h1>{title}</h1>
      {text && <p>{text}</p>}
    </header>
  );
}
