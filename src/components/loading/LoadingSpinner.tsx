import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AlertModal from "./AlertModal";

const LoadingSpinnerContainer = styled.div`
  width: 100%;
  height: 52vh;
  top: 0;
  left: 0;

  @keyframes Loadingspinner {
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
  animation: Loadingspinner 0.8s ease infinite;
`;

const LoadingMessage = styled.h2`
  position: absolute;
  top: 60%; // 화면 상단에서 50% 위치로 이동
  left: 50%; // 화면 왼쪽에서 50% 위치로 이동
  transform: translate(-50%, -50%); // 수평 및 수직 정중앙으로 이동
  color: #505649;
`;

const LoadingTime = styled.h4`
  position: absolute;
  top: 70%; // 화면 상단에서 50% 위치로 이동
  left: 50%; // 화면 왼쪽에서 50% 위치로 이동
  transform: translate(-50%, -50%); // 수평 및 수직 정중앙으로 이동
  color: #505649;
`;

const LoadingSpinner = () => {
  const [waitingTime, setWaitingTime] = useState(0);
  const [modalOpened, setModalOpened] = useState(false);

  useEffect(() => {
    const countdown = setInterval(() => {
      setWaitingTime(waitingTime + 1);
    }, 1000);

    if (waitingTime > 120) {
      setModalOpened(true);
      clearInterval(countdown);
    }

    return () => {
      clearInterval(countdown);
    };
  }, [waitingTime]);

  return (
    <LoadingSpinnerContainer>
      {modalOpened ? <AlertModal /> : null}
      <Spinner></Spinner>
      <LoadingMessage>데이터 불러오는 중</LoadingMessage>
      <LoadingTime> 대기 시간 : {waitingTime}초</LoadingTime>
    </LoadingSpinnerContainer>
  );
};

export default LoadingSpinner;
