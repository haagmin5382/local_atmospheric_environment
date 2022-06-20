import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "./LoadingSpinner";
const Graph = () => {
  const data = useSelector(
    (state: any) => state.info.value.data?.response.body.items
  );
  const dispatch = useDispatch();

  console.log("데아터", data);

  return (
    <div>
      <ol>
        {data?.map((obj: any, idx: number) => {
          return (
            <li key={idx}>
              {obj.sidoName} {obj.stationName}
              <br />
              미세먼지 : {obj.pm10Value}
              <br /> 초미세먼지 : {obj.pm25Value}
            </li>
          );
        }) ?? <LoadingSpinner />}
      </ol>
    </div>
  );
};

export default Graph;
