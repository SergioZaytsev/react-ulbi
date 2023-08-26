import React from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostServise from "../API/PostService";

const DetailPost = () => {
  const params = useParams();
  const [post, setPost] = React.useState({});

  const [getPostId, postLoading, postError] = useFetching(async (id) => {
    const response = await PostServise.getPostId(id);
    setPost(response);
  });

  const [comments, setComments] = React.useState([]);
  const [getComments, commentsLoading, commentsError] = useFetching(async (id) => {
    const response = await PostServise.getComments(id);
    setComments(response);
  });

  React.useEffect(() => {
    getPostId(params.id);
    getComments(params.id);
  }, []);

  console.log(comments);

  return (
    <>
      {postLoading ? (
        <div className="loading"></div>
      ) : (
        <div>
          <div style={{ marginBottom: 5 }}>
            <strong>
              <i style={{ fontSize: 20 }}>DetailPost # {post.id}</i>
            </strong>
          </div>
          <h4>{post.title}</h4>
          <i style={{ marginBottom: 15 }}>{post.body}</i>
        </div>
      )}

      <hr />
      {commentsLoading ? (
        <div className="loading"></div>
      ) : (
        comments.map((comment) => {
          return (
            <div key={comment.id} style={{ marginTop: 20 }}>
              <i>{comment.email}</i>
              <p>{comment.body}</p>
            </div>
          );
        })
      )}
    </>
  );
};

export default DetailPost;
