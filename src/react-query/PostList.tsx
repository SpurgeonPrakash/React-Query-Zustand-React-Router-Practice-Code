import { useState } from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
  const pageSize = 10;
  const [page, setPage] = useState<number>(1);
  const { data: posts, isLoading, error } = usePosts({ page, pageSize });
  if (isLoading) {
    return <h1>Loading!!</h1>;
  }
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
      <button
        disabled={page === 1}
        className="btn btn-primary my-3"
        onClick={() => setPage((prev) => prev - 1)}
      >
        Previous
      </button>
      <button
        // disabled={page === lastpage}
        className="btn btn-primary ms-1"
        onClick={() => setPage((prev) => prev + 1)}
      >
        Next
      </button>
    </>
  );
};

export default PostList;
