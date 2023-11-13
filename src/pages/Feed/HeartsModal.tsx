import React, { FC } from "react";
import styled from "styled-components";
import ModalPortal from "../../components/ModalPortal";
import { User } from "../../types/feedType";
import { BsArrowRightSquareFill } from "react-icons/bs";

interface HeartsModalProps {
  heartUsers: Array<User>;
  onClose: () => void;
}

const HeartsModal: FC<HeartsModalProps> = ({ heartUsers, onClose }) => {
  return (
    <ModalPortal onClose={onClose}>
      <ModalContent>
        <ModalHeader>
          <p>좋아요♡</p>
          <button onClick={onClose}>X</button>
        </ModalHeader>
        <UserList>
          {heartUsers.map((user, index) => (
            <UserItem key={index}>
              <a href="">
                <UserInfo>
                  <img
                    src={user.userImg}
                    alt={`${user.userId}' 프로필 이미지`}
                  />
                  <p>{user.userId}</p>
                </UserInfo>
                <StyledBsArrowRightSquareFill />
              </a>
            </UserItem>
          ))}
        </UserList>
      </ModalContent>
    </ModalPortal>
  );
};

export default HeartsModal;

const ModalContent = styled.div`
  width: 250px;
  height: 310px;
  border-radius: 10px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  background-color: #5d6dbe;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px 5px 0 0;
  p {
    font-size: 20px;
    color: #fff;
  }
  button {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    color: #fff;
    border: none;
    background-color: transparent;
  }
`;

const UserList = styled.div`
  width: 100%;
  overflow-y: auto;
`;

const UserItem = styled.div`
  width: 100%;
  height: 60px;
  padding: 10px 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  a {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    object-fit: cover;
    margin-right: 10px;
  }
`;

const StyledBsArrowRightSquareFill = styled(BsArrowRightSquareFill)`
  color: #5d6dbe;
  font-size: 20px;
`;
