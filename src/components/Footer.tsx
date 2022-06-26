import React from "react";
import styled from "styled-components";

const Source = styled.div`
  width: 100vw;
  height: 8vh;
  line-height: 8vh;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  background-color: #7a726f;
`;
const Footer = () => {
  return (
    <footer>
      <Source>출처 : 한국환경공단 에어코리아 대기오염정보</Source>
    </footer>
  );
};

export default Footer;
