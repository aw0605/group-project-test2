// useInfiniteFeedQuery.ts
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchAllFeeds, fetchUserFeeds, fetchTagFeeds } from "../api/feed";

// TypeScript 인터페이스 또는 타입을 정의하여 pageParam의 타입을 명시합니다.
interface QueryFunctionContext {
  pageParam: number;
}

export const useInfiniteFeedQuery = (userId: string, tag: string) => {
  const queryFn = ({ pageParam = 0 }: QueryFunctionContext) => {
    if (userId) return fetchUserFeeds(userId, pageParam);
    if (tag) return fetchTagFeeds(tag, pageParam);
    return fetchAllFeeds(pageParam);
  };

  return useInfiniteQuery({
    queryKey: ["feed", { userId, tag }],
    queryFn,
    initialPageParam: 0, // 초기 페이지 매개변수 값을 명시적으로 제공합니다.
    getNextPageParam: (lastPage) => lastPage.nextPage ?? false,
  });
};
