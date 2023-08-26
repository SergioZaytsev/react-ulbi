import React from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({ create }) => {
  const [post, setPost] = React.useState({
    title: "",
    body: "",
  });

  function addPost(event) {
    event.preventDefault();
    create({
      id: Date.now(),
      ...post,
    });

    setPost({ title: "", body: "" });
  }

  return (
    <div>
      <form action="">
        <MyInput
          type="text"
          placeholder="Введите название поста"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <MyInput
          type="text"
          placeholder="Введите описание поста"
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
        />
        <MyButton onClick={addPost}>Добавить пост</MyButton>
      </form>
    </div>
  );
};

export default PostForm;
