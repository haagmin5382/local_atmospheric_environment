import React from "react";
import styled from "styled-components";

const LineContainer = styled.div`
  display: flex;
  margin-left: 5vw;
`;
const HorizontalLine = styled.div`
  @media (min-width: 800px) {
    width: 7.5vw;
  }

  width: 20vw;
  height: 2px;
  background-color: ${(props: { bgColor: string }) => props.bgColor};
  color: ${(props: { bgColor: string }) => props.bgColor};
  text-align: center;
  margin: 5px;
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
