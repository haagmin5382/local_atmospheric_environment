import React from "react";
import styled, { keyframes } from "styled-components";

const LocalSection = ({ ModalRegion }: { ModalRegion: string }) => {
  const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
  const LocalSectionConatiner = styled.div`
    /* background-color: black; */
    /* background-image: url("/img/regionImg/전북.jpg"); */
    background-image: ${(props: { ModalRegion: string }) =>
      `url(/img/regionImg/${props.ModalRegion}.jpg)`}; // 동적 이미지 경로

    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
    padding: 3vw;
    margin-top: 15vh;
    height: 25vh;
    width: 30vw;
    margin-left: 10vw;
    animation: ${fadeIn} 1s; // 애니메이션을 스타일에 적용
  `;

  return (
    <LocalSectionConatiner ModalRegion={ModalRegion}></LocalSectionConatiner>
  );
};

export default LocalSection;
