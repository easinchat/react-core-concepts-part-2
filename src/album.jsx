export default function Album({ album }) {
  console.log(album.title);
  return (
    <div className="card">
      <h2>Title: {album.title}</h2>
    </div>
  );
}
