import React, { FC } from "react";
import styled from "styled-components";

interface FeedTopProps {
  userId: string;
  userImg: string;
  date: string;
  location: string;
  temperature: number;
}

const FeedTop: FC<FeedTopProps> = ({
  userId,
  userImg,
  date,
  location,
  temperature,
}) => {
  return (
    <div>
      <FirstTop>
        <UserContainer>
          <img src={userImg} alt={`${userId} 프로필 이미지`} />
          <p>{userId}</p>
        </UserContainer>
        <p>{date}</p>
      </FirstTop>
      <SecondTop>
        <span>{location}</span>
        <span>{temperature}℃</span>
      </SecondTop>
    </div>
  );
};

export default FeedTop;

const FirstTop = styled.div`
  display: flex;
  align-items: center;
  p {
    color: #6d6d6d;
  }
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    object-fit: cover;
    margin-right: 10px;
  }
  p {
    color: #000;
    font-size: 1rem;
    font-weight: bold;
  }
  ::after {
    content: "•";
    color: #6d6d6d;
    margin: 0 5px;
  }
`;

const SecondTop = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 5px;
  span {
    font-size: 14px;
  }
  span:first-child::after {
    content: "•";
    margin: 0 5px;
  }
`;
