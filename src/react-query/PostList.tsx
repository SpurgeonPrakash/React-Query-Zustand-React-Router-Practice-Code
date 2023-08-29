import React, { useState } from "react";
import usePosts from "./hooks/useInfinitePosts";

const PostList = () => {
  const pageSize = 10;
  const { data, isLoading, error, fetchNextPage, isFetchingNextPage } =
    usePosts({ pageSize });
  if (isLoading) {
    return <h1>Loading!!</h1>;
  }
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {data.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
      <button
        disabled={isFetchingNextPage}
        className="btn btn-primary ms-1"
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage ? "Loading" : "Load More"}
      </button>
    </>
  );
};

export default PostList;
