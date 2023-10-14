import { atom } from "recoil";

export const environmentState = atom({
  key: "environmentState",
  default: {
    data: {
      response: {
        body: {
          items: [
            {
              dataTime: "",
              sidoName: "",
              stationName: "",
              pm10Value: "",
              pm25Value: "",
            },
          ],
        },
      },
    },
  },
});
