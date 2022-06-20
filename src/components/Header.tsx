import React from "react";
import styled from "styled-components";

const Source = styled.h1`
  text-align: center;
`;

const Header = () => {
  return (
    <div>
      <Source>출처 : 에어코리아 대기오염정보</Source>
    </div>
  );
};

export default Header;
