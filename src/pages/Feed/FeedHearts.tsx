import React, { FC, useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { Hearts } from "../../types/feedType";
import HeartsModal from "./HeartsModal";

interface FeedHeartsProps {
  hearts: Hearts;
}

const FeedHearts: FC<FeedHeartsProps> = ({ hearts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    if (hearts.number > 0) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button>
        <BsHeart />
        <BsHeartFill />
      </button>

      {hearts.number > 0 ? (
        <button onClick={openModal}>
          좋아요 <span>{hearts.number}</span>개
        </button>
      ) : (
        <p>좋아요</p>
      )}
      {isModalOpen && <HeartsModal hearts={hearts} onClose={closeModal} />}
    </div>
  );
};

export default FeedHearts;
