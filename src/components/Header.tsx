import { TypeEnvironment } from "pages/Main";
import React from "react";
import { useRecoilValue } from "recoil";
import {
  KoreaAverageSelector,
  RegionAverageState,
} from "recoil/airEnvironment";
import { regionState } from "recoil/region";
import styled from "styled-components";
import { getParticleColor } from "utils/getParticleColor";
interface HeaderContainerProps {
  BgColor: string;
}
const HeaderContainer = styled.header<HeaderContainerProps>`
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

const Logo = styled.h1`
  font-size: 24px;
  transition: transform 0.3s;
  cursor: pointer;
`;
const DustInfo = styled.div`
  align-items: center;
  font-size: 16px;
  margin-right: 5vw;
  color: black;
`;

function Header() {
  const regionValue = useRecoilValue(regionState);
  const particleValue = useRecoilValue(RegionAverageState) as TypeEnvironment;

  const koreaValue = useRecoilValue(KoreaAverageSelector);
  const textFineDust =
    regionValue === "전국"
      ? "전국 미세먼지 평균 " + koreaValue?.pm10Value
      : "미세먼지 " + particleValue[regionValue]?.pm10Value;

  const textMicroDust =
    regionValue === "전국"
      ? "전국 미세먼지 평균 " + koreaValue?.pm25Value
      : "초미세먼지 " + particleValue[regionValue]?.pm25Value;
  const BgColor = getParticleColor(particleValue[regionValue]) as string;
  return (
    <HeaderContainer BgColor={BgColor}>
      <Logo>{regionValue}</Logo>
      <DustInfo>
        {textFineDust} µg/m³
        <br />
        <br />
        {textMicroDust}µg/m³
      </DustInfo>
    </HeaderContainer>
  );
}

export default Header;
