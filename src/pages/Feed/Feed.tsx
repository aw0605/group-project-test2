import React, { FC } from "react";
import styled from "styled-components";
import Nav from "../../components/nav/Nav";
import FeedList from "./FeedList";

const Feed: FC = () => {
  return (
    <Container>
      <Nav />
      <RightWrap>
        <div>
          <FeedList />
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
  padding-top: 20px;
  /* padding-left: 15%; */
  background-color: #ededed;
`;
