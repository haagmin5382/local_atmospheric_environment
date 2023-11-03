import { TypeEnvironment } from "pages/Main";
import React from "react";
import { useRecoilValue } from "recoil";
import {
  KoreaAverageSelector,
  RegionAverageState,
} from "recoil/airEnvironment";
import { regionState } from "recoil/region";
import { TextDust, TextParticle } from "styledcomponents/localsection.style";

const DustValue = ({ dustKind }: { dustKind: string }) => {
  const koreaDustValue = useRecoilValue(KoreaAverageSelector);
  const regionDustValue = useRecoilValue(RegionAverageState) as TypeEnvironment;

  const regionValue = useRecoilValue(regionState);
  const textFineDust =
    regionValue === "전국"
      ? "전국 미세먼지 평균 " + koreaDustValue?.pm10Value
      : "미세먼지 " + regionDustValue[regionValue]?.pm10Value;

  const textMicroDust =
    regionValue === "전국"
      ? "전국 미세먼지 평균 " + koreaDustValue?.pm25Value
      : "초미세먼지 " + regionDustValue[regionValue]?.pm25Value;

  if (dustKind === "미세먼지") {
    return <>{textFineDust}㎍/㎥</>;
  }
  if (dustKind === "초미세먼지") {
    return <>{textMicroDust}㎍/㎥</>;
  }
  return <></>;
};

export default DustValue;
