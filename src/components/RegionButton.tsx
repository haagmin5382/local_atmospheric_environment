import React from "react";
import { useDispatch } from "react-redux";
import { setInfo } from "../redux/index";
import { callEnvironmentData } from "utils";

const regions = [
  "전국",
  "서울",
  "부산",
  "대구",
  "인천",
  "광주",
  "대전",
  "울산",
  "경기",
  "강원",
  "충북",
  "충남",
  "전북",
  "전남",
  "경북",
  "경남",
  "제주",
  "세종",
];

const RegionButton = () => {
  const dispatch = useDispatch();

  const changeRegion = (e: React.MouseEvent<HTMLButtonElement>) => {
    const eventTarget = e.target as HTMLElement;
    console.log(eventTarget.innerText);
    dispatch(setInfo("")); // loading indicator 띄우기
    callEnvironmentData(eventTarget.innerText).then((data: any) =>
      dispatch(setInfo(data))
    );
  };

  return (
    <div>
      {regions.map((region, idx) => {
        return (
          <button key={idx} onClick={changeRegion}>
            {region}
          </button>
        );
      })}
    </div>
  );
};

export default RegionButton;
