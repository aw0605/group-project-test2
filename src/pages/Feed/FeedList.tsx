import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import FeedItem from "./FeedItem";
import { Post } from "../../types/feedType";

const FeedList: FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    axios
      .get("/api/feed/posts")
      .then((response) => {
        setPosts(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      {posts.map((post, index) => (
        <FeedItem key={index} post={post} />
      ))}
    </div>
  );
};

export default FeedList;
