import React, { useEffect } from "react";
import { useState } from "react";
import { callEnvironmentData } from "../utils/index";

const Graph = () => {
  const [regionInfo, setRegionInfo] = useState<any>([]);

  useEffect(() => {
    callEnvironmentData()?.then((data: any) => {
      console.log(data);
      setRegionInfo(data?.data.response.body.items);
    });
  }, []);
  console.log(regionInfo);
  return (
    <div>
      <span>시작</span>
      <ol>
        {regionInfo.map((obj: any, idx: number) => {
          return (
            <li key={idx}>
              {obj.sidoName} {obj.stationName}
              <br />
              미세먼지 : {obj.pm10Value}
              <br /> 초미세먼지 : {obj.pm25Value}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Graph;
