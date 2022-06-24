import React from "react";
import styled from "styled-components";

interface ModalProps {
  mouseLocation: Array<number>;
}

const ModalContainer = styled.div<ModalProps>`
  position: absolute;
  top: ${(props) => props.mouseLocation[1]}px;
  left: ${(props) => props.mouseLocation[0]}px;
  background-color: #ffffff;
  color: #959794;
  width: 3vw;
  height: 5vh;
  border: 1px solid #505649;
  border-radius: 20px;
  text-align: center;
  line-height: 5vh;
  font-weight: bold;
  pointer-events: none;
  transition: 0.1s;
`;

const Modal = ({
  ModlaRegion,
  mouseLocation,
}: {
  ModlaRegion: string;
  mouseLocation: Array<number>;
}) => {
  return (
    <ModalContainer mouseLocation={mouseLocation}>{ModlaRegion}</ModalContainer>
  );
};

export default Modal;
