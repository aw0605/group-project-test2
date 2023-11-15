import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import FeedItem from "./FeedItem";
import { Feed } from "../../types/feedType";

const FeedList: FC<{ posts: Feed[] }> = ({ posts }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <FeedItem key={index} post={post} />
      ))}
    </div>
  );
};

export default FeedList;
