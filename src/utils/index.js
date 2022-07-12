import axios from "axios";

export const callEnvironmentData = async (region = "전국") => {
  try {
    return await axios
      .get(
        `/api/getCtprvnRltmMesureDnsty?serviceKey=${
          process.env.REACT_APP_ACCESS_TOKEN
        }&returnType=json&numOfRows=100&pageNo=1&sidoName=${encodeURI(
          region
        )}&ver=1.0`,
        { withCredentials: true },
        {
          headers: { Accept: "*/*", "Content-Type": `application/json` },
        }
      )
      .then((res) => {
        return res;
      })
      .catch((error) => {
        // console.log(error);
        console.error(error);
        console.log("catch error");
      });
  } catch {
    console.log("에러발생");
  }
};
