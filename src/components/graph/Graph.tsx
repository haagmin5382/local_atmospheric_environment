import { useSelector } from "react-redux";
import LoadingSpinner from "./LoadingSpinner";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useEffect } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type EnvironmentData = {
  info: {
    value: {
      data: {
        response: {
          body: {
            items: Array<ItemsData>;
          };
        };
      };
    };
  };
};

interface ItemsData {
  dataTime: string;
  sidoName: string;
  stationName: string;
  pm10Value: string;
  pm25Value: string;
}

const Graph = () => {
  // redux api데이터

  const environment = useSelector((state: EnvironmentData) => {
    return state.info.value?.data?.response?.body.items;
  });

  // 값이 측정되지 않은 것들을 filter
  const filteredData = environment?.filter((obj: ItemsData) => {
    return (
      obj.pm10Value !== "-" &&
      obj.pm25Value !== "-" &&
      obj.pm10Value !== null &&
      obj.pm25Value !== null
    );
  });

  // 평균값 내는 함수
  const getAverageParticle = (value: string) => {
    return Math.floor(
      filteredData?.reduce((acc: number, cur: ItemsData) => {
        if (value === "pm10Value" || value === "pm25Value") {
          acc = acc + Number(cur?.[value]);
        }
        return acc;
      }, 0) / filteredData?.length
    );
  };

  // 그래프 그리기
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: `${
          filteredData ? filteredData[0]?.sidoName : ""
        } 지역 미세먼지 수치`,
      },
    },
  };

  const labels = filteredData?.map((obj: ItemsData) => {
    return obj?.stationName;
  });

  const fineDust = filteredData?.map((obj: ItemsData) => {
    return obj.pm10Value;
  });

  const ultraFineDust = filteredData?.map((obj: ItemsData) => {
    return obj.pm25Value;
  });

  const data = {
    labels,
    datasets: [
      {
        label: "미세먼지",
        data: fineDust,
        borderColor: "#F4C44E",
        backgroundColor: "#F4C44E",
      },
      {
        label: "초미세먼지",
        data: ultraFineDust,
        borderColor: "#E15E29",
        backgroundColor: "#E15E29",
      },
    ],
  };
  useEffect(() => {
    window.onbeforeunload = (e) => {
      e.preventDefault();
      e.returnValue = "";
    };
  }, []);
  return (
    <div>
      <h2>
        시각 :{" "}
        {filteredData ? filteredData[0]?.dataTime : "데이터를 불러오는 중..."}
      </h2>
      <h2>
        {filteredData ? filteredData[0]?.sidoName : null} 지역 평균 미세먼지 :{" "}
        {filteredData
          ? getAverageParticle("pm10Value")
          : " 데이터를 불러오는 중..."}
      </h2>
      <h2>
        {filteredData ? filteredData[0]?.sidoName : null} 지역 평균 초미세먼지 :
        {filteredData
          ? getAverageParticle("pm25Value")
          : " 데이터를 불러오는 중..."}{" "}
      </h2>

      {filteredData ? (
        <Bar options={options} data={data} />
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default Graph;
