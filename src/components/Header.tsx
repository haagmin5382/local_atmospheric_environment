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
import DustValue from "./dustvalue/DustValue";

function Header() {
  const regionValue = useRecoilValue(regionState);
  const particleValue = useRecoilValue(RegionAverageState) as TypeEnvironment;
  const koreaValue = useRecoilValue(KoreaAverageSelector);
  const koreaBgColor = getParticleColor(koreaValue) as string;
  const regionBgColor = getParticleColor(particleValue[regionValue]) as string;
  const bgColor = regionValue === "전국" ? koreaBgColor : regionBgColor;
  return (
    <HeaderContainer BgColor={bgColor}>
      <Logo>{regionValue}</Logo>
      <DustInfo>
        <DustValue dustKind={"미세먼지"} />
        <br />
        <br />
        <DustValue dustKind={"초미세먼지"} />
      </DustInfo>
    </HeaderContainer>
  );
}

export default Header;
