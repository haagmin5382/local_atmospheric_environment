import React from "react";
import styled from "styled-components";

const Source = styled.h2`
  text-align: center;
  color: #7a726f;
`;
const Footer = () => {
  return (
    <footer>
      <Source>출처 : 에어코리아 대기오염정보</Source>
    </footer>
  );
};

export default Footer;
