import React from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  position: absolute;
  top: 20vh;
  left: 10vw;
  width: 20vw;
  height: 20vh;
  border: 1px solid red;
  border-radius: 20px;
  text-align: center;
  line-height: 20vh;
  font-weight: bold;
`;
const Modal = ({ ModlaRegion }: any) => {
  return <ModalContainer>{ModlaRegion}</ModalContainer>;
};

export default Modal;
