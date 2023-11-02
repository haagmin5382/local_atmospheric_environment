import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { callEnvironmentData } from "utils/api";
import { regions } from "resource/region";
import { getNationwideData, ItemsData } from "utils/getNationwideData";
import { useRecoilState } from "recoil";
import { RegionAverageState } from "recoil/airEnvironment";
import LocalSection from "components/LocalSection";
import KoreaSVG from "components/KoreaSVG";
import DustStatistics from "components/DustStatistics";
import { getRegionEnvironment } from "utils/getRegionData";
import { environmentState } from "recoil/environment";
import Graph from "components/Graph";
import { HomeContainer } from "styledcomponents/main.style";
import LoadingSpinner from "components/LoadingSpinner";
import { regionState } from "recoil/region";

export interface TypeEnvironment {
  [region: string]: {
    pm10Value: number;
    pm25Value: number;
  };
}

const KoreaMap = () => {
  const [regionAverageData, setRegionAveragetData] =
    useRecoilState<TypeEnvironment>(RegionAverageState);
  // 전역상태 관리를 이용해서 page를 이동하고 다시 이 페이지로 돌아와도 API호출을 하지 않고 이전에 호출한 데이터를 보여준다.

  const [, setRegionEnvironmentData] = useRecoilState(environmentState);

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
        const regionData = getRegionEnvironment(filteredData, regions[city]);
        setRegionEnvironmentData((prevState) => ({
          ...prevState,
          ...regionData,
        }));
      }
      for (const city in regions) {
        const regionData = getNationwideData(filteredData, regions[city]);
        setRegionAveragetData((prevState) => ({ ...prevState, ...regionData }));
      }
    });
    return () => {
      // console.log("clean up"); // unmount될 때 동작
    };
  }, []);
  if (Object.keys(regionAverageData).length === 0) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <HomeContainer>
      <div>
        <KoreaSVG />
        <DustStatistics />
      </div>
      <div>
        <LocalSection />
        <Graph />
      </div>
    </HomeContainer>
  );
};

export default React.memo(KoreaMap);
