import React, { FC, ReactNode, MouseEvent } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

interface ModalPortalProps {
  children: ReactNode;
  onClose: () => void;
}

const ModalPortal: FC<ModalPortalProps> = ({ children, onClose }) => {
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <ModalBg onClick={onClose}>
      <ModalContent onClick={(e: MouseEvent) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalBg>,
    modalRoot
  );
};

export default ModalPortal;

const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  position: relative;
`;
