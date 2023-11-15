import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Nav from "../../components/nav/Nav";
import FeedList from "./FeedList";
import { useInfiniteFeedQuery } from "../../hooks/useInfiniteQuery";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

const Feed: FC = () => {
  const { userId, tag } = useParams<{ userId?: string; tag?: string }>();
  // const [posts, setPosts] = useState([]);
  // const [userImg, setUserImg] = useState("");

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     let endpoint = "/api/feed/posts";
  //     if (userId) {
  //       endpoint = `/api/feed/posts/${userId}`;
  //     } else if (tag) {
  //       endpoint = `/api/feed/posts/hashtags/${tag}`;
  //     }
  //     const response = await axios.get(endpoint);

  //     if (userId) {
  //       setUserImg(response.data.userImg);
  //       setPosts(response.data.userFeeds);
  //     } else {
  //       setPosts(response.data);
  //     }
  //   };

  //   fetchPosts();
  // }, [userId, tag]);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    error,
  } = useInfiniteFeedQuery(userId ?? "", tag ?? "");

  const loadMoreRef = useIntersectionObserver(
    () => {
      if (hasNextPage) fetchNextPage();
    },
    {
      threshold: 0.1, // 10%가 보이면 다음 페이지 로드
    }
  );

  const userImg = data?.pages[0]?.userFeeds[0]?.userImg ?? "";

  // 에러 처리
  if (isError) {
    return <div>An error has occurred: {error?.message}</div>;
  }

  return (
    <Container>
      <Nav />
      <RightWrap>
        {userId && (
          <UserContainer>
            <img src={userImg} alt={`${userId} 프로필 이미지`} />
            <p>{userId}</p>
          </UserContainer>
        )}
        {tag && <Tag>#{tag}</Tag>}
        <div>
          {/* <FeedList posts={posts} /> */}
          <FeedList
            posts={data?.pages.map((page) => page.feeds).flat() ?? []}
          />
          <div ref={loadMoreRef}>
            {isFetchingNextPage
              ? "Loading more..."
              : hasNextPage
              ? "Load More"
              : "Nothing more to load"}
          </div>
        </div>
      </RightWrap>
    </Container>
  );
};

export default Feed;

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
`;

const RightWrap = styled.div`
  width: 100%;
  /* width: 85%;
  position: absolute;
  left: 15%; */
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px 0 30px;
  /* padding-left: 15%; */
  background-color: #ededed;
`;

const UserContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
    margin-right: 10px;
  }
  p {
    font-size: 30px;
    color: #5d6dbe;
  }
`;

const Tag = styled.p`
  color: #5d6dbe;
  font-size: 30px;
  margin: 10px 0;
`;
