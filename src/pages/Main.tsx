import React, { useEffect } from "react";
import { callEnvironmentData } from "utils/api";
import { regions } from "resource/region";
import { getNationwideData, ItemsData } from "utils/getNationwideData";
import { useRecoilState } from "recoil";
import { RegionAverageState } from "recoil/airEnvironment";
import LocalSection from "components/LocalSection";
import KoreaSVG from "components/map/KoreaSVG";
import DustStatistics from "components/map/DustStatistics";
import { getRegionEnvironment } from "utils/getRegionData";
import { environmentState } from "recoil/environment";
import Graph from "components/graph/Graph";
import { HomeContainer } from "styledcomponents/main.style";
import LoadingSpinner from "components/loading/LoadingSpinner";

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
      for (const city of regions) {
        const regionData = getRegionEnvironment(filteredData, city);
        setRegionEnvironmentData((prevState) => ({
          ...prevState,
          ...regionData,
        }));
      }
      for (const city of regions) {
        const regionData = getNationwideData(filteredData, city);
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
