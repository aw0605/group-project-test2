import React, { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import axios from "axios";
import { toggleLike } from "../../redux/slice/heartSlice";
import { AppDispatch, RootState } from "../../redux/store/store";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import ErrorModal from "./ErrorModal";
import HeartsModal from "./HeartsModal";

interface FeedHeartsProps {
  heartCount: number;
  postId: string;
}

const FeedHearts: FC<FeedHeartsProps> = ({
  heartCount: initialHeartCount,
  postId,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const heartCount =
    useSelector((state: RootState) => state.likes[postId]) || initialHeartCount;
  const [isHeart, setIsHeart] = useState(false);

  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn); // 로그인 상태 확인

  const [showErrorModal, setShowErrorModal] = useState(false); // 에러 모달 상태
  const [showHeartsModal, setShowHeartsModal] = useState(false);

  const [heartUsers, setHeartUsers] = useState([]);

  const fetchHeartUsers = async () => {
    try {
      const response = await axios.get(`/api/feed/posts/${postId}/hearts`);
      setHeartUsers(response.data.userList);
    } catch (error) {
      console.error("Error fetching hearts:", error);
    }
  };

  useEffect(() => {
    setIsHeart(heartCount > initialHeartCount);
  }, [heartCount, initialHeartCount]);

  // const handleLike = async () => {
  //   await dispatch(toggleLike({ postId, isLiked: isHeart }));
  //   setIsHeart(!isHeart); // 좋아요 상태 토글
  //   fetchHeartUsers(); // 모달에 표시될 유저 목록 다시 불러오기
  //   console.log(heartCount);
  // };

  const handleLike = async () => {
    if (!isLoggedIn) {
      document.body.style.overflowY = "hidden";
      setShowErrorModal(true); // 로그인되지 않은 경우 에러 모달 표시
      return; // 함수 실행 중단
    }

    await dispatch(toggleLike({ postId, isLiked: isHeart }));
    setIsHeart(!isHeart); // 좋아요 상태 토글
    fetchHeartUsers(); // 모달에 표시될 유저 목록 다시 불러오기
    console.log(heartCount);
  };

  const openModal = () => {
    if (heartCount > 0) {
      document.body.style.overflowY = "hidden";
      fetchHeartUsers();
      setShowHeartsModal(true);
    }
  };

  const closeModal = (modalType: string) => {
    document.body.style.overflowY = "auto";
    if (modalType === "error") {
      setShowErrorModal(false);
    } else if (modalType === "hearts") {
      setShowHeartsModal(false);
    }
  };

  return (
    <HeartContainer>
      <HeartButton onClick={handleLike}>
        {isHeart ? <StyledHeartFill /> : <BsHeart />}
      </HeartButton>

      {heartCount > 0 ? (
        <HeartsModalButton onClick={openModal}>
          좋아요 <span>{heartCount}</span>개
        </HeartsModalButton>
      ) : (
        <p>좋아요</p>
      )}

      {showErrorModal && <ErrorModal onClose={() => closeModal("error")} />}
      {showHeartsModal && (
        <HeartsModal
          heartUsers={heartUsers}
          onClose={() => closeModal("hearts")}
        />
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
  :hover {
    opacity: 0.6;
    transition: all 0.1s ease-in-out;
  }
`;

const StyledHeartFill = styled(BsHeartFill)`
  color: #5d6dbe;
`;

const HeartsModalButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 14px;
  line-height: 20px;
  color: #4d4343;
  padding: 0;
`;
