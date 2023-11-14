import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { formatDate } from "../../utils/dateUtil";

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
  const navigate = useNavigate();

  const handleUserClick = () => {
    navigate(`/feed/${userId}`);
  };

  return (
    <div>
      <FirstTop>
        <UserContainer>
          <img
            src={userImg}
            alt={`${userId} 프로필 이미지`}
            onClick={handleUserClick}
          />
          <p onClick={handleUserClick}>{userId}</p>
        </UserContainer>
        <p>{formatDate(date)}</p>
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
    cursor: pointer;
  }
  p {
    color: #000;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
  }
  ::after {
    content: "•";
    color: #6d6d6d;
    margin: 0 7px;
  }
`;

const SecondTop = styled.div`
  display: flex;
  align-items: center;
  margin: 7px 0 10px;
  span {
    font-size: 14px;
  }
  span:first-child::after {
    content: "•";
    margin: 0 5px;
  }
`;
