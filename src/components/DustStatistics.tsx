import React from "react";
import styled from "styled-components";

const LineContainer = styled.div`
  display: flex;
  margin-left: 10vw;
`;
const HorizontalLine = styled.div`
  width: 7.5vw;
  height: 2px;

  background-color: ${(props: { bgColor: string }) => props.bgColor};
  color: ${(props: { bgColor: string }) => props.bgColor};
  text-align: center;
  margin: 5px;
  display: inline-block; // 가로로 나란히 표시
`;

const DustStatistics = () => {
  return (
    <LineContainer>
      <HorizontalLine bgColor={"#3A7AF2"}>
        <br />
        좋음 0 ~ 30
      </HorizontalLine>
      <HorizontalLine bgColor={"#47c73b"}>
        <br />
        보통 ~ 80
      </HorizontalLine>
      <HorizontalLine bgColor={"#F6A626"}>
        <br />
        나쁨 ~ 150
      </HorizontalLine>
      <HorizontalLine bgColor={"#FA0D05"}>
        <br />
        매우나쁨 151 ~
      </HorizontalLine>
    </LineContainer>
  );
};

export default DustStatistics;
