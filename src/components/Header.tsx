import { TypeEnvironment } from "pages/Main";
import React from "react";
import { useRecoilValue } from "recoil";
import {
  KoreaAverageSelector,
  RegionAverageState,
} from "recoil/airEnvironment";
import { regionState } from "recoil/region";
import { DustInfo, HeaderContainer, Logo } from "styledcomponents/header.style";
import { getParticleColor } from "utils/getParticleColor";

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
  const koreaBgColor = getParticleColor(koreaValue) as string;
  const regionBgColor = getParticleColor(particleValue[regionValue]) as string;
  const bgColor = regionValue === "전국" ? koreaBgColor : regionBgColor;
  return (
    <HeaderContainer BgColor={bgColor}>
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
