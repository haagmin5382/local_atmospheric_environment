import React from "react";
import { useRecoilValue } from "recoil";
import { regionState } from "recoil/region";
import {
  TextRegion,
  LocalSectionConatiner,
  TextDust,
  TextParticle,
} from "styledcomponents/localsection.style";
import DustValue from "./dustvalue/DustValue";

const LocalSection = () => {
  const regionValue = useRecoilValue(regionState);

  return (
    <LocalSectionConatiner regionValue={regionValue}>
      <TextRegion> {regionValue}</TextRegion>
      <TextDust>
        <DustValue dustKind={"미세먼지"} />
      </TextDust>
      <TextParticle>
        <DustValue dustKind={"초미세먼지"} />
      </TextParticle>
    </LocalSectionConatiner>
  );
};

export default LocalSection;
