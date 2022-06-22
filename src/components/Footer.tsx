import React from "react";
import styled from "styled-components";

const Source = styled.div`
  position: absolute;
  top: 90vh;
  width: 100vw;
  height: 10vh;
  text-align: center;
  color: #ffffff;
  background-color: #7a726f;
`;
const Footer = () => {
  return (
    <footer>
      <Source>
        <h2>출처 : 에어코리아 대기오염정보</h2>
      </Source>
    </footer>
  );
};

export default Footer;
