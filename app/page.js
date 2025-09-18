import LikeButton from "./like-button";

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

export default function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];
  return (
    <div style={{ padding: "2rem" }}>
      <Header title="Develop. Preview. Ship." />
      <ul>{names.map(n => <li key={n}>{n}</li>)}</ul>
      <LikeButton />
    </div>
  );
}
