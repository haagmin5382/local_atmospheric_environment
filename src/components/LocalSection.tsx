import { TypeEnvironment } from "pages/Main";
import React from "react";
import { useRecoilValue } from "recoil";
import {
  KoreaAverageSelector,
  RegionAverageState,
} from "recoil/airEnvironment";
import {
  TextRegion,
  TextDust,
  TextParticle,
  LocalSectionConatiner,
} from "styledcomponents/style_localsection";

const LocalSection = ({ ModalRegion }: { ModalRegion: string }) => {
  const particleValue = useRecoilValue(RegionAverageState) as TypeEnvironment;
  const koreaValue = useRecoilValue(KoreaAverageSelector);
  const textFineDust =
    ModalRegion === "전국"
      ? "전국 미세먼지 평균 " + koreaValue?.pm10Value
      : "미세먼지 " + particleValue[ModalRegion]?.pm10Value;

  const textMicroDust =
    ModalRegion === "전국"
      ? "전국 미세먼지 평균 " + koreaValue?.pm25Value
      : "미세먼지 " + particleValue[ModalRegion]?.pm25Value;

  return (
    <LocalSectionConatiner ModalRegion={ModalRegion}>
      <TextRegion> {ModalRegion}</TextRegion>
      <TextDust>{textFineDust}㎍/㎥</TextDust>
      <TextParticle>{textMicroDust}㎍/㎥</TextParticle>
    </LocalSectionConatiner>
  );
};

export default LocalSection;
