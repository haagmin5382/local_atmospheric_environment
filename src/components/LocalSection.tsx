import React from "react";
import styled, { keyframes } from "styled-components";
const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;
const LocalSectionConatiner = styled.div`
  background-image: ${(props: { ModalRegion: string }) =>
    `url(/img/regionImg/${props.ModalRegion}.jpg)`}; // 동적 이미지 경로

  background-repeat: no-repeat;
  background-size: cover; // 이미지를 꽉 채우도록 설정 => 크기에 이미지를 맞춤
  /* background-size: 100%; */
  /* background-size: contain; // 배경 이미지가 전부 나오게 (이미지가 크기만큼 채워지지는 않음) => 이미지에 크기를 맞춤 */
  background-position: 0% 30%;
  border-radius: 10px;
  padding: 3vw;
  margin-top: 15vh;
  height: 25vh;
  width: 30vw;
  margin-left: 10vw;
  animation: ${fadeIn} 1s; // 애니메이션을 스타일에 적용
`;
const TextOverlay = styled.div`
  position: absolute; //절대 위치
  transform: translate(-50%, -50%); /* 수평 및 수직 중앙 정렬 */
  color: white; /* 텍스트 색상 */
  font-size: 24px; /* 원하는 글꼴 크기 및 스타일 */
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 텍스트 그림자 효과 */
`;
const LocalSection = ({ ModalRegion }: { ModalRegion: string }) => {
  return (
    <LocalSectionConatiner ModalRegion={ModalRegion}>
      <TextOverlay> {ModalRegion}</TextOverlay>
    </LocalSectionConatiner>
  );
};

export default LocalSection;
