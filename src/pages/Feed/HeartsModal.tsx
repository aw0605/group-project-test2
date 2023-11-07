import React, { FC } from "react";
import ModalPortal from "../../components/ModalPortal";
import { Hearts } from "../../types/feedType";

interface HeartsModalProps {
  hearts: Hearts;
  onClose: () => void;
}

const HeartsModal: FC<HeartsModalProps> = ({ hearts, onClose }) => {
  return (
    <ModalPortal onClose={onClose}>
      <div className="hearts-modal">
        <button onClick={onClose}>X</button>
        {hearts.lists.map((heart, index) => (
          <div key={index}>
            <img src={heart.userImg} alt={`${heart.userId}' 프로필 이미지`} />
            <span>{heart.userId}</span>
          </div>
        ))}
      </div>
    </ModalPortal>
  );
};

export default HeartsModal;
