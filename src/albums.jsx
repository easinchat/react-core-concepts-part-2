import { use } from "react";
import Album from "./album";

export default function Albums({ fetchAlbums }) {
  const albums = use(fetchAlbums);

  console.log(albums);
  return (
    <div>
      <h2>
        {albums.map((album) => (
          <Album album={album}></Album>
        ))}
      </h2>
    </div>
  );
}
