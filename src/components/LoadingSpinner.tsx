import React from "react";
import styled from "styled-components";

const LoadingSpinnerContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  top: 0;
  left: 0;

  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 64px;
  height: 64px;
  margin-top: -32px;
  margin-left: -32px;
  border-radius: 50%;
  border: 8px solid transparent;
  border-top-color: #505649;
  border-bottom-color: #505649;
  animation: spinner 0.8s ease infinite;
`;

const LoadingMessage = styled.h2`
  position: absolute;
  top: 60%;
  left: 44vw;
  color: #505649;
`;

const LoadingSpinner = () => {
  return (
    <LoadingSpinnerContainer>
      <Spinner></Spinner>
      <LoadingMessage>데이터를 불러오는 중...</LoadingMessage>
    </LoadingSpinnerContainer>
  );
};

export default LoadingSpinner;
