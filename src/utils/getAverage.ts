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
