import { TypeEnvironment } from "pages/Main";
import React from "react";
import { useRecoilValue } from "recoil";
import {
  KoreaAverageSelector,
  RegionAverageState,
} from "recoil/airEnvironment";
import { regionState } from "recoil/region";
import {
  TextRegion,
  TextDust,
  TextParticle,
  LocalSectionConatiner,
} from "styledcomponents/localsection.style";

const LocalSection = () => {
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
      : "미세먼지 " + particleValue[regionValue]?.pm25Value;

  return (
    <LocalSectionConatiner regionValue={regionValue}>
      <TextRegion> {regionValue}</TextRegion>
      <TextDust>{textFineDust}㎍/㎥</TextDust>
      <TextParticle>{textMicroDust}㎍/㎥</TextParticle>
    </LocalSectionConatiner>
  );
};

export default LocalSection;
