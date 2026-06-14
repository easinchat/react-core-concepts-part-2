export default function Post({ post }) {
  console.log(post);
  return (
    <div className="card">
      <h5>{post.title}</h5>
      <p>Name: {post.body}</p>
    </div>
  );
}
