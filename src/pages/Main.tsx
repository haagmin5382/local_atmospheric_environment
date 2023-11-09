import React from "react";
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
import { useQuery } from "react-query";

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
  const { isLoading, isError, data, error } = useQuery(
    "environmentData",
    (region) => callEnvironmentData(),
    {
      refetchOnWindowFocus: false, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
      retry: 0, // 실패시 재호출 몇번 할지
      onSuccess: (res) => {
        // 성공시 호출

        const dataObjArray = res?.data?.response?.body?.items;
        const filteredData = filterErrorData(dataObjArray);
        setAPIData(
          getRegionEnvironment,
          filteredData,
          setRegionEnvironmentData
        );
        setAPIData(getNationwideData, filteredData, setRegionAveragetData);
      },
    }
  );

  const fetchedEnvrionmentDataNumber = Object.keys(regionAverageData).length;
  if (fetchedEnvrionmentDataNumber === 0) {
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
