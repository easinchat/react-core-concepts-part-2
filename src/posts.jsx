import { use } from "react";
import Post from "./post";

export default function Posts({ postsPromise }) {
  const posts = use(postsPromise);
  //   console.log(posts.length);
  return (
    <div>
      <h2>All Posts from here:</h2>
      <p>
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </p>
    </div>
  );
}
