import { ItemsData } from "./getNationwideData";

export const filterErrorData = (apiDataArray: Array<ItemsData>) => {
  return apiDataArray?.filter((obj: ItemsData) => {
    return (
      obj.pm10Value !== "-" &&
      obj.pm25Value !== "-" &&
      obj.pm10Value !== null &&
      obj.pm25Value !== null
    );
  });
};
