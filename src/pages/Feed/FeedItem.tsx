import React, { FC } from "react";
import styled from "styled-components";
import FeedTop from "./FeedTop";
import FeedSlider from "./FeedSlider";
import FeedHearts from "./FeedHearts";
import { Feed } from "../../types/feedType";

interface FeedItemProps {
  post: Feed;
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
          <FeedSlider imgs={post.imgs} />
          <FeedHearts heartCount={post.heartCount} postId={post.postId} />
          <FeedBottom>
            <div className="feed-text">
              <span>{post.text}</span>
              <div className="feed-tags">
                <span>
                  {post.tags.map((tag) => (
                    <a>{tag}</a>
                  ))}
                </span>
              </div>
            </div>
            <span>더보기</span>
          </FeedBottom>
        </FeedContent>
      </FeedContainer>
    </div>
  );
};

export default FeedItem;

const FeedContainer = styled.div`
  width: 530px;
  padding: 20px 15px;
  margin: 20px auto 0;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  background-color: #fff;
`;

const FeedContent = styled.div`
  width: 500px;
  margin: auto;
`;

const FeedBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  .feed-text {
    display: inline-block;
    width: 500px;
    height: 16px;
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;
