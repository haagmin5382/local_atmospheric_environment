import styled from "styled-components";

export const MapContainer = styled.section`
  text-align: center;
  /* margin-left: 10vw; */
`;

export const SvgContainer = styled.svg`
  background-color: #add8e6;
  border-radius: 10px;
  padding: 2vw;
  margin-top: 15vh;
  width: 90vw;
  @media (min-width: 800px) {
    width: 35vw;
    height: 65vh;
  }
`;

export const PathContainer = styled.path`
  stroke: #ffffff;

  &:hover {
    fill: #eeebd4;
    cursor: pointer;
    transition: 0.8s;
  }
`;
export const StyledRect = styled.rect`
  border: 1px solid black;
`;

export const StyledText = styled.text`
  cursor: pointer;
  fill: black;
  font-family: JeonjuCraftGoR;
  font-size: 17px;
  stroke-width: 2;
  text-anchor: middle;
  &:hover {
    fill: #eeebd4;
    cursor: pointer;
    transition: 0.8s;
  }
`;

export const StyledTspan = styled.tspan`
  font-size: 21px;
`;
