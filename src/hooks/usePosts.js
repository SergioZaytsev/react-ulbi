import React from "react";

export const useSortedPosts = (posts, sorted) => {
  const sortedPosts = React.useMemo(() => {
    if (sorted) {
      return [...posts].sort((a, b) => a[sorted].localeCompare(b[sorted]));
    }
    return posts;
  }, [sorted, posts]);

  return sortedPosts;
};

export const useSortedQuery = (posts, sorted, query) => {
  const sortedPosts = useSortedPosts(posts, sorted);

  const searchAndSort = React.useMemo(() => {
    return sortedPosts.filter((post) => post.title.toLowerCase().includes(query.toLowerCase()));
  }, [sortedPosts, query]);

  return searchAndSort;
};
