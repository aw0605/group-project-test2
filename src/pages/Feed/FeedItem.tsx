import React, { FC } from "react";
import styled from "styled-components";
import FeedTop from "./FeedTop";
import FeedSlider from "./FeedSlider";
import FeedHearts from "./FeedHearts";
import { Post } from "../../types/feedType";

interface FeedItemProps {
  post: Post;
}

const FeedItem: FC<FeedItemProps> = ({ post }) => {
  return (
    <div>
      <FeedContainer>
        <FeedContent>
          <FeedTop
            userId={post.userId}
            userImg={post.userImg}
            date={post.date}
            location={post.location}
            temperature={post.temperature}
          />
          <FeedSlider />
          <FeedHearts hearts={post.hearts} />
          <p>{post.userId}</p>
          <p>{post.text}</p>
          <span>
            {post.tags.map((tag) => (
              <a>{tag}</a>
            ))}
          </span>
        </FeedContent>
      </FeedContainer>
    </div>
  );
};

export default FeedItem;

const FeedContainer = styled.div`
  width: 530px;
  padding: 15px;
  margin: 20px auto 0;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  background-color: yellowgreen;
`;

const FeedContent = styled.div`
  width: 500px;
  margin: auto;
`;
