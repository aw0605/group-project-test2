import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { Heart } from "../../types/feedType";
import HeartsModal from "./HeartsModal";

interface FeedHeartsProps {
  heartCount: number;
  postId: string;
}

const FeedHearts: FC<FeedHeartsProps> = ({ heartCount, postId }) => {
  const [isHeart, setIsHeart] = useState(false);
  const [heartUsers, setHeartUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchHeartUsers = async () => {
    try {
      const response = await axios.get(`/api/feed/posts/${postId}/hearts`);
      setHeartUsers(response.data.userList);
    } catch (error) {
      console.error("Error fetching hearts:", error);
    }
  };

  const openModal = () => {
    if (heartCount > 0) {
      document.body.style.overflowY = "hidden";
      fetchHeartUsers();
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    document.body.style.overflowY = "auto";
    setIsModalOpen(false);
  };

  return (
    <HeartContainer>
      <HeartButton>
        <BsHeart />
        {/* <BsHeartFill /> */}
      </HeartButton>

      {heartCount > 0 ? (
        <HeartsModalButton onClick={openModal}>
          좋아요 <span>{heartCount}</span>개
        </HeartsModalButton>
      ) : (
        <p>좋아요</p>
      )}
      {isModalOpen && (
        <HeartsModal heartUsers={heartUsers} onClose={closeModal} />
      )}
    </HeartContainer>
  );
};

export default FeedHearts;

const HeartContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 10px 0;
`;

const HeartButton = styled.button`
  border: none;
  background-color: transparent;
  margin-right: 8px;
  padding: 0;
  font-size: 20px;
  display: flex;
`;

const HeartsModalButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 14px;
  line-height: 20px;
  color: #4d4343;
  padding: 0;
`;
