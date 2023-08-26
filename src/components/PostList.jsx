import React from "react";
import PostItem from "./Post";
import { TransitionGroup } from "react-transition-group";
import { CSSTransition } from "react-transition-group";

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, number) => (
          <CSSTransition timeout={300} classNames="post" key={post.id}>
            <PostItem post={post} number={number + 1} remove={remove} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
