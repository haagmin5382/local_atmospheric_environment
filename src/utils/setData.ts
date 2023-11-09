import { regions } from "resource/region";

export const setAPIData = (
  getDataFunc: (data: any, cityName: string) => any,
  filteredData: any,
  setData: any
) => {
  for (const city of regions) {
    const regionData = getDataFunc(filteredData, city);
    setData((prevState: any) => ({
      ...prevState,
      ...regionData,
    }));
  }
};
