import axios from "axios";
import { useNavigate } from "react-router-dom";

export const callEnvironmentData = async (region = "전국") => {
  try {
    return await axios
      .get(`/api/pageNo=1&sidoName=${encodeURI(region)}&ver=1.0`)
      .then((res) => {
        return res;
      })
      .catch((error) => {
        // console.log("catch error", error);
      });
  } catch {
    console.log("에러발생");
  }
};
