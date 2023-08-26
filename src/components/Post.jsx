import React from "react";
import MyButton from "./UI/button/MyButton";
import { useNavigate } from "react-router-dom";

const PostItem = (props) => {
  const { title, body, id } = props.post;
  const navigate = useNavigate();

  return (
    <div className="post container">
      <div>
        <h1>
          {id} - {title}
        </h1>
        <p>{body}</p>
      </div>
      <MyButton onClick={() => navigate(`/detailPost/${id}`)}>открыть</MyButton>
      <MyButton onClick={() => props.remove(props.post)}>удалить</MyButton>
    </div>
  );
};

export default PostItem;
