export interface ItemsData {
  dataTime: string;
  sidoName: string;
  stationName: string;
  pm10Value: string;
  pm25Value: string;
}
// 평균 값 내는 함수
export const getAverageParticle = (
  filteredData: Array<ItemsData>,
  value: string
) => {
  return Math.floor(
    filteredData?.reduce((acc: number, cur: ItemsData) => {
      if (value === "pm10Value" || value === "pm25Value") {
        acc = acc + Number(cur?.[value]);
      }
      return acc;
    }, 0) / filteredData?.length
  );
};

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
