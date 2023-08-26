import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import Mymodal from "../components/UI/Mymodal/Mymodal";
import MyButton from "../components/UI/button/MyButton";
import { useCallback, useEffect, useRef } from "react";

import React from "react";
import PostFilter from "../components/PostFilter";
import { useSortedQuery } from "../hooks/usePosts";
import PostServise from "../API/PostService";
import { useFetching } from "../hooks/useFetching.js";
import { usePagination } from "../hooks/usePagination";
import Paginations from "../components/UI/Paginations/Paginations";

function PostsPage() {
  const lastElement = useRef();
  const observer = useRef();

  const [fetchPosts, loaded, postERR] = useFetching(async () => {
    const response = await PostServise.getAll(currentPage);
    setPosts([...posts, ...response.data]);
    setTotalCount(response.headers["x-total-count"]);
  });
  const [currentPage, setCurrentPage] = React.useState(1);
  const [posts, setPosts] = React.useState([]);

  const [filter, setFilter] = React.useState({
    query: "",
    sort: "",
  });
  const [ShowModal, setShowModal] = React.useState(false);

  //Pagination
  const [totalCount, setTotalCount] = React.useState(0); //количество записей
  const totalPages = usePagination(totalCount); // массив страниц
  //-----------

  const searchAndSort = useSortedQuery(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts((prev) => [...prev, newPost]);
    setShowModal(false);
  };
  const removePost = (post) => {
    setPosts((prev) => prev.filter((p) => p.id !== post.id));
  };

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (!lastElement.current) return;
    if (observer.current) {
      observer.current.disconnect();
    }

    //опции для observer
    let options = {
      rootMargin: "0px",
      threshold: 0.5,
    };

    // функция обратного вызова
    let callback = function (entries, observer) {
      if (entries[0].isIntersecting && currentPage < totalPages.length) {
        console.log(`Вижу currentPage=${currentPage} totalCount=${totalPages}`);
        setCurrentPage(currentPage + 1);
      }
    };

    // наблюдатель
    observer.current = new IntersectionObserver(callback, options);
    observer.current.observe(lastElement.current);
    console.log(lastElement.current);
  }, [posts]);

  return (
    <div className="App">
      {loaded && <div className="loading"></div>}
      <MyButton onClick={() => setShowModal((prev) => !prev)}>+ новый пост</MyButton>

      <Mymodal visible={ShowModal} setVisible={setShowModal}>
        <PostForm create={createPost} />
      </Mymodal>
      <PostFilter filter={filter} setFilter={setFilter} />
      {postERR && <h2>{postERR}</h2>}
      <PostList posts={searchAndSort} remove={removePost} title="Посты про JS" />
      {posts.length > 0 && <div ref={lastElement} style={{ height: 100, backgroundColor: "red" }}></div>}
      <Paginations totalPages={totalPages} currentPage={currentPage} onChange={setCurrentPage} />
    </div>
  );
}

export default PostsPage;

// {loaded ? (
//   <div className="loading"></div>
// ) : (
//   <PostList posts={searchAndSort} remove={removePost} title="Посты про JS" />
// )}
