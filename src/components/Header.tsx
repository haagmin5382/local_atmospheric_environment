import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
`;

const Header = () => {
  return (
    <div>
      <Title>지역별 미세먼치 수치</Title>
    </div>
  );
};

export default Header;
