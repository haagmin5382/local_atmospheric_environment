import axios from "axios";

export const callEnvironmentData = async (region = "%EC%84%9C%EC%9A%B8") => {
  try {
    return await axios

      .get(`/api/pageNo=1&sidoName=${region}&ver=1.0`)
      .then((res) => {
        return res;
      })
      .catch((error) => console.log("catch error", error));
  } catch {
    console.log("에러발생");
  }
};
