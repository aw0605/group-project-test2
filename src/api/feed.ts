// feedAPI.ts
import axios from "axios";

export const fetchAllFeeds = async (pageParam = 0) => {
  const { data } = await axios.get(`/api/feed/posts?page=${pageParam}`);
  return data;
};

export const fetchUserFeeds = async (userId: string, pageParam = 0) => {
  const { data } = await axios.get(
    `/api/feed/posts/${userId}?page=${pageParam}`
  );
  return data;
};

export const fetchTagFeeds = async (tag: string, pageParam = 0) => {
  const { data } = await axios.get(
    `/api/feed/posts/hashtags/${tag}?page=${pageParam}`
  );
  return data;
};
