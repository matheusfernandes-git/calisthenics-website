import "./post.css";

export default function Posts({ post }) {
  return (
    <div className="container-post">
      <img src={post.img} alt="exercícios" />
      <div className="container-content">
        <h2>{post.title}</h2>
        <p>{post.describe}</p>
      </div>
    </div>
  );
}
