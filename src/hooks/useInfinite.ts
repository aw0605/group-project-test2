// // useInfiniteFeedQuery.ts
// import { useInfiniteQuery } from "@tanstack/react-query";
// import { fetchAllFeeds, fetchUserFeeds, fetchTagFeeds } from "../api/feed";

// // TypeScript 인터페이스 또는 타입을 정의하여 pageParam의 타입을 명시합니다.
// interface QueryFunctionContext {
//   pageParam: number;
// }

// export const useInfiniteFeedQuery = (userId: string, tag: string) => {
// const queryFn = ({ pageParam = 0 }: QueryFunctionContext) => {
//   if (userId) return fetchUserFeeds(userId, pageParam);
//   if (tag) return fetchTagFeeds(tag, pageParam);
//   return fetchAllFeeds(pageParam);
// };

//   return useInfiniteQuery({
//     queryKey: ["feed", { userId, tag }],
//     queryFn,
//     initialPageParam: 0, // 초기 페이지 매개변수 값을 명시적으로 제공합니다.
//     getNextPageParam: (lastPage) => lastPage.nextPage ?? false,
//   });
// };
//===================================================================================================
// useInfinite.ts
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchAllFeeds, fetchUserFeeds, fetchTagFeeds } from "../api/feed";

const PAGE_SIZE = 10;

export const useInfinite = ({
  userId,
  tag,
}: {
  userId?: string;
  tag?: string;
}) => {
  const fetchPage = (pageParam: number) => {
    if (userId) return fetchUserFeeds(userId, pageParam, PAGE_SIZE);
    if (tag) return fetchTagFeeds(tag, pageParam, PAGE_SIZE);
    return fetchAllFeeds(pageParam, PAGE_SIZE);
  };

  return useInfiniteQuery({
    queryKey: ["feeds", { userId, tag }],
    queryFn: ({ pageParam = 0 }) => fetchPage(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage && lastPage.length === 0) {
        return undefined;
      }
      return allPages.length;
    },
  });
};
