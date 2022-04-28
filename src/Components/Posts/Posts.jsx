import React from "react";
import Post from "../Post/Post";
import PostHome from "../post_home/PostHome";
import "./Posts.css";

function Posts({ posts }) {
  console.log(posts);
  return (
    <div className="posts">
      <PostHome />
      {posts.map((p) => (
        <Post key={p._id} post={p} />
      ))}
    </div>
  );
}

export default Posts;
