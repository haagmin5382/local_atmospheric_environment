import { ItemsData } from "./getNationwideData";

export const getRegionEnvironment = (
  array: Array<ItemsData>,
  region: string
) => {
  const regionEnvironmentData = array?.filter(
    (obj: ItemsData) => obj.sidoName === region
  );
  return {
    [region]: regionEnvironmentData,
  };
};
