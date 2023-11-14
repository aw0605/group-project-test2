import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FeedTop from "./FeedTop";
import FeedSlider from "./FeedSlider";
import FeedHearts from "./FeedHearts";
import { Feed } from "../../types/feedType";

interface FeedItemProps {
  post: Feed;
}

const FeedItem: FC<FeedItemProps> = ({ post }) => {
  const navigate = useNavigate();

  const [isExpanded, setIsExpanded] = useState(false);

  const combinedTextLength =
    post.text.length + post.tags.reduce((acc, tag) => acc + tag.length + 1, 0);
  const showMoreButton = combinedTextLength > 20 || post.text.includes("\n");
  const displayText =
    isExpanded || !showMoreButton
      ? post.text
      : `${post.text.substring(0, 20)}...`;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleTagClick = (tag: string) => {
    const formattedTag = tag.replace("#", "");
    navigate(`/feed/hashtags/${encodeURIComponent(formattedTag)}`);
  };

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
              <p>{displayText}</p>
              {isExpanded && (
                <div className="feed-tags">
                  {post.tags.map((tag, index) => (
                    <Tag key={index} onClick={() => handleTagClick(tag)}>
                      {tag}
                    </Tag>
                  ))}
                </div>
              )}
            </div>
            {showMoreButton && (
              <MoreButton onClick={toggleExpand}>
                {isExpanded ? "접기" : "더보기"}
              </MoreButton>
            )}
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
    text-align: left;
    margin-bottom: 10px;
  }
  .feed-tags {
    margin-top: 10px;
  }
`;

const Tag = styled.a`
  color: #5d6dbe;
  margin-right: 7px;
  cursor: pointer;
`;

const MoreButton = styled.span`
  color: #7e7e7e;
  cursor: pointer;
`;
