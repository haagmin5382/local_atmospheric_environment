import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { callEnvironmentData } from "utils/api";
import { regions } from "resource/region";

import { ItemsData } from "utils/getAverage";
import { getNationwideData } from "utils/getNationwideData";

import KoreaSVG from "./KoreaSVG";
import LocalSection from "./LocalSection";

interface TypeEnvironment {
  [region: string]: {
    pm10Value: number;
    pm25Value: number;
  };
}
const HomeContainer = styled.div`
  display: flex;
  /* align-items: center; */
`;
const KoreaMap = () => {
  const [environmentData, setEnvironmentData] = useState<TypeEnvironment>({});
  const [ModalRegion, setModalRegion] = useState("");

  // const fetchData = useMemo(() => {
  //    callEnvironmentData().then((res) => {
  //     const dataObjArray = res?.data?.response?.body?.items;
  //     const filteredData = dataObjArray?.filter((obj: ItemsData) => {
  //       return (
  //         obj.pm10Value !== "-" &&
  //         obj.pm25Value !== "-" &&
  //         obj.pm10Value !== null &&
  //         obj.pm25Value !== null
  //       );
  //     });
  //     for (const city in regions) {
  //       const regionData = getNationwideData(filteredData, regions[city]);
  //       setEnvironmentData((prevState) => ({ ...prevState, ...regionData })); //
  //     }
  //   });
  // }, []);
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
    </HomeContainer>
  );
};

export default React.memo(KoreaMap);
