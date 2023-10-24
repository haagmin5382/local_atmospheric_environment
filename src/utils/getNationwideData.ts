import { ItemsData, getAverageParticle } from "./getAverage";

// 전국의 대기 데이터를 가공하는 함수
export const getNationwideData = (array: Array<ItemsData>, region: string) => {
  const regionEnvironmentData = array?.filter(
    (obj: ItemsData) => obj.sidoName === region
  );
  const average10value = getAverageParticle(regionEnvironmentData, "pm10Value"); // 미세먼지
  const average25value = getAverageParticle(regionEnvironmentData, "pm25Value"); // 초미세먼지
  return {
    [region]: {
      pm10Value: average10value,
      pm25Value: average25value,
    },
  };
};
