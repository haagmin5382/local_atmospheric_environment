import styled from "styled-components";

interface HeaderContainerProps {
  BgColor: string;
}
export const HeaderContainer = styled.header<HeaderContainerProps>`
  background: linear-gradient(
    to bottom,
    ${(props) => props.BgColor},
    rgba(52, 152, 219, 0)
  );

  position: fixed;
  width: 100%;
  height: 8vh;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export const Logo = styled.h1`
  font-size: 24px;
  transition: transform 0.3s;
  cursor: pointer;
`;
export const DustInfo = styled.div`
  align-items: center;
  font-size: 16px;
  margin-right: 5vw;
  color: black;
`;
