import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100vw;
  height: 15vh;
  line-height: 15vh;
  background-color: black;
  color: white;
  text-align: center;
  font-size: 3rem;
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
`;

const Header = () => {
  return <HeaderContainer>지역별 미세먼지 그래프</HeaderContainer>;
};

export default Header;
