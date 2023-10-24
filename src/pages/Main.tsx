import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { callEnvironmentData } from "utils/api";
import { regions } from "resource/region";

import { ItemsData } from "utils/getAverage";
import { getNationwideData } from "utils/getNationwideData";

import { useRecoilState } from "recoil";
import { airEnvironmentState } from "recoil/airEnvironment";
import LocalSection from "components/LocalSection";
import KoreaSVG from "components/KoreaSVG";
import DustStatistics from "components/\bDustStatistics";

interface TypeEnvironment {
  [region: string]: {
    pm10Value: number;
    pm25Value: number;
  };
}
const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 0.1fr);
  /* gap: 16px; // 그리드 아이템 간의 간격 설정 */
  /* align-items: center; */
`;
const KoreaMap = () => {
  const [environmentData, setEnvironmentData] =
    useRecoilState<TypeEnvironment>(airEnvironmentState);
  // 전역상태 관리를 이용해서 page를 이동하고 다시 이 페이지로 돌아와도 API호출을 하지 않고 이전에 호출한 데이터를 보여준다.
  const [ModalRegion, setModalRegion] = useState("");

  useEffect(() => {
    callEnvironmentData().then((res) => {
      const dataObjArray = res?.data?.response?.body?.items;
      const filteredData = dataObjArray?.filter((obj: ItemsData) => {
        return (
          obj.pm10Value !== "-" &&
          obj.pm25Value !== "-" &&
          obj.pm10Value !== null &&
          obj.pm25Value !== null
        );
      });
      for (const city in regions) {
        const regionData = getNationwideData(filteredData, regions[city]);
        setEnvironmentData((prevState) => ({ ...prevState, ...regionData })); //
      }
    });
  }, []);
  // console.log(Object.keys(environmentData).length);
  // console.log(environmentData);

  return (
    <HomeContainer>
      <KoreaSVG
        ModalRegion={ModalRegion}
        setModalRegion={setModalRegion}
        environmentData={environmentData}
      />
      <LocalSection ModalRegion={ModalRegion} />
      <DustStatistics />
    </HomeContainer>
  );
};

export default React.memo(KoreaMap);
