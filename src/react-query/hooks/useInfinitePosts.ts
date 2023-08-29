import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  pageSize: number;
}

// Setting Stale time Per Request
const usePosts = (query: PostQuery) =>
  useInfiniteQuery<Post[], Error>({
    queryKey: ["posts", query],
    queryFn: ({ pageParam = 1 }) =>
      axios
        .get("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _start: (pageParam - 1) * query.pageSize,
            _limit: query.pageSize,
          },
        })
        .then((res) => res.data),
    staleTime: 1 * 60 * 1000, //1m
    keepPreviousData: true,
    // Params below
    // lastPage(lastPagePosts) -> [Post](Array of lastPage Posts) -> [{id: 1, ...}, {id: 2, ...}]
    // allPages(consists of PostArray of each page) -> [[Post][]] ->
    // [
    // [{id: 1, ...}, {id: 2, ...}] // Page 1,
    // [{id: 1, ...}, {id: 2, ...}] // Page2
    // ....
    // ]
    getNextPageParam: (lastPage, allPages) => {
      // return number of next page or undefined (if in last page)
      // return allPages.length + 1;
      // For Json Place Holder if we are in greater than all pages, we will get empty array
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
      // in realWorld we will get totalPages or totalNumOfRecords from backend
      // return allPages.length + 1 <= totalPosts ? allPages.length + 1: undefined
    },
  });

export default usePosts;
