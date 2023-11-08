import styled, { keyframes } from "styled-components";

export const LocalContainer = styled.div`
  text-align: center;
`;

const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

export const LocalSectionConatiner = styled.div`
  background-image: ${(props: { regionValue: string }) =>
    `url(/img/regionImg/${props.regionValue}.jpg)`};
  position: relative;
  background-repeat: no-repeat;
  background-size: cover; // 이미지를 꽉 채우도록 설정 => 크기에 이미지를 맞춤
  background-position: 0% 30%;
  border-radius: 10px;
  padding: 3vw;
  margin-top: 15vh;

  height: 25vh;
  width: 30vw;
  @media (max-width: 800px) {
    width: 90vw;
    margin-left: 2vw;
  }
  animation: ${fadeIn} 1s;
  transition: background-image 1s;
`;
export const TextRegion = styled.div`
  position: absolute; //절대 위치
  @media (max-width: 800px) {
    left: 10vw;
    top: 4vh;
  }

  transform: translate(-50%, -50%); // 수평 및 수직 중앙 정렬
  color: white; /* 텍스트 색상 */
  font-size: 24px; /* 원하는 글꼴 크기 및 스타일 */
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 텍스트 그림자 효과 */
`;
export const TextDust = styled.div`
  position: absolute; //절대 위치
  bottom: 4vh;
  left: 2vw;
  color: white; //텍스트 색상
  font-size: 15px; /* 원하는 글꼴 크기 및 스타일 */
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 텍스트 그림자 효과 */
`;
export const TextParticle = styled.div`
  position: absolute; //절대 위치
  bottom: 1vh;
  left: 2vw;
  color: white; /* 텍스트 색상 */
  font-size: 15px; /* 원하는 글꼴 크기 및 스타일 */
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 텍스트 그림자 효과 */
`;
