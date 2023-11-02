import styled from "styled-components";

export const MapContainer = styled.section`
  text-align: center;
  margin-left: 10vw;
`;

export const SvgContainer = styled.svg`
  background-color: #add8e6;
  border-radius: 10px;
  padding: 1vw;
  margin-top: 15vh;
  height: 65vh;
  width: 35vw;
`;

export const PathContainer = styled.path`
  stroke: #ffffff;

  &:hover {
    fill: #eeebd4;
    cursor: pointer;
    transition: 0.8s;
  }
`;
export const StyledText = styled.text`
  cursor: pointer;
  font-family: JeonjuCraftGoR;
  font-size: 20px;
  stroke-width: 2;
  text-anchor: middle;
`;
