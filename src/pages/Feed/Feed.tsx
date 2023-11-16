import React, { FC, useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Nav from "../../components/nav/Nav";
import FeedList from "./FeedList";
import { useInfinite } from "../../hooks/useInfinite";
import useIntersect from "../../hooks/useIntersect";

const Feed: FC = () => {
  const { userId, tag } = useParams<{ userId?: string; tag?: string }>();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfinite({
    userId,
    tag,
  });

  const ref = useIntersect((entry, observer) => {
    if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  });

  // const posts = useMemo(
  //   () => (data ? data.pages.flatMap((page) => page).flat() : []),
  //   [data]
  // );

  const posts = data?.pages.flatMap((page) => page).flat() || [];
  const userImg = data?.pages?.[0]?.[0]?.userImg ?? "";

  console.log(data?.pages);

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
          <FeedList posts={posts} />
          {isFetchingNextPage ? (
            <p>로딩중...</p>
          ) : !hasNextPage ? (
            <p>게시물이 더 이상 존재하지 않습니다.</p>
          ) : null}
          <div ref={ref} />
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
