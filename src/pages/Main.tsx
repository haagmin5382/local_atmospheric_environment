import React, { useEffect } from "react";
import { callEnvironmentData } from "utils/api";
import { getNationwideData } from "utils/getNationwideData";
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
import { MapContainer } from "styledcomponents/koreamap.style";
import { LocalContainer } from "styledcomponents/localsection.style";
import { filterErrorData } from "utils/filterData";
import { setAPIData } from "utils/setData";

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
      const filteredData = filterErrorData(dataObjArray);
      setAPIData(getRegionEnvironment, filteredData, setRegionEnvironmentData);
      setAPIData(getNationwideData, filteredData, setRegionAveragetData);
    });
  }, []);

  const isFetchingData = Object.keys(regionAverageData).length === 0;
  if (isFetchingData) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <HomeContainer>
      <MapContainer>
        <KoreaSVG />
        <DustStatistics />
      </MapContainer>
      <LocalContainer>
        <LocalSection />
        <Graph />
      </LocalContainer>
    </HomeContainer>
  );
};

export default React.memo(KoreaMap);
