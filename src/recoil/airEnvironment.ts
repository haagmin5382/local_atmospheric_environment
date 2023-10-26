import { atom, selector } from "recoil";
import { ItemsData } from "utils/getNationwideData";

export const RegionAverageState = atom({
  key: "RegionAverageState",
  default: {},
});

export const KoreaAverageSelector = selector({
  key: "AverageValueSelector",
  get: ({ get }) => {
    const regionAverage = get(RegionAverageState) as {
      [Key: string]: {
        pm10Value: number;
        pm25Value: number;
      };
    };

    // RegionAverageState에 저장된 객체의 value 값을 추출하여 더합니다.
    const values = Object.values(regionAverage);

    // 배열의 합계 계산
    const pm10ValueSum = values.reduce(
      (acc, currentValue) => acc + currentValue.pm10Value,
      0
    );
    const pm25ValueSum = values.reduce(
      (acc, currentValue) => acc + currentValue.pm25Value,
      0
    );
    // 평균 계산
    const pm10ValueSumAverage = Math.round(pm10ValueSum / values.length);
    const pm25ValueSumAverage = Math.round(pm25ValueSum / values.length);

    return { pm10Value: pm10ValueSumAverage, pm25Value: pm25ValueSumAverage };
  },
});
