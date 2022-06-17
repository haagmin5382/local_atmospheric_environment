import React, { useEffect } from "react";
import { useState } from "react";
import { callEnvironmentData } from "../utils/index";
import { useDispatch, useSelector } from "react-redux";
import { setInfo } from "../redux/index";
const Graph = () => {
  const data = useSelector(
    (state: any) => state.info.value.data?.response.body.items
  );
  const dispatch = useDispatch();

  console.log("데아터", data);

  useEffect(() => {
    callEnvironmentData().then((data: any) => dispatch(setInfo(data)));
  }, []);
  return (
    <div>
      <span>시작</span>
      <ol>
        {data?.map((obj: any, idx: number) => {
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
