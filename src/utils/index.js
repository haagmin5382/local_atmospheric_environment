import axios from "axios";

export const callEnvironmentData = async (region = "전국") => {
  try {
    return await axios
      .get(`/api/pageNo=1&sidoName=${encodeURI(region)}&ver=1.0`)
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.log("catch error");
      });
  } catch {
    console.log("에러발생");
  }
};
