import React, { useState } from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background: linear-gradient(
    to bottom,
    rgba(52, 152, 219, 1),
    rgba(52, 152, 219, 0)
  );
  color: #fff;
  /* box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 12vh;
  z-index: 1;
  transition: background 0.3s;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  transition: transform 0.3s;
`;

function Header() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <HeaderContainer>
      <HeaderContent
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></HeaderContent>
    </HeaderContainer>
  );
}

export default Header;
