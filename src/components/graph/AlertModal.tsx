import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const AlertModalContainer = styled.div`
  position: fixed;
  z-index: 9999;
  border: 1px solid black;
  border-radius: 20px;
  text-align: center;
  left: 35vw;
  top: 25vh;
  width: 30vw;
  height: 30vh;

  background-color: #ffffff;
`;

const AlertMessage = styled.div`
  font-weight: bold;
  margin-top: 3vh;
  font-size: 1rem;
  /* line-height: 5vh; */

  > button {
    padding: 20px;
    border: 1px solid #ffd67f;
    border-radius: 10px;
    width: 10vw;
    height: 10vh;
    background-color: #e14e23;
    color: #ffffff;
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
  }
`;

const AlertModal = () => {
  const navigate = useNavigate();

  return (
    <AlertModalContainer>
      <AlertMessage>데이터를 로드하는데 시간이 너무 오래걸립니다 </AlertMessage>
      <AlertMessage>다시 시도해주세요 </AlertMessage>
      <AlertMessage>
        <button onClick={() => navigate("/")}>돌아가기</button>
      </AlertMessage>
    </AlertModalContainer>
  );
};

export default AlertModal;
