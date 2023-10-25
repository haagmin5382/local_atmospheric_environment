import LoadingSpinner from "../LoadingSpinner";
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
import { useRecoilValue } from "recoil";
import { environmentState } from "recoil/environment";
import { ItemsData } from "utils/getNationwideData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Graph = ({ ModalRegion }: { ModalRegion: string }) => {
  // redux api데이터
  const environmentValue = useRecoilValue(environmentState) as any;

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
          ModalRegion && environmentValue[ModalRegion]
            ? environmentValue[ModalRegion][0].sidoName
            : ""
        } 지역 미세먼지 수치`,
      },
    },
  };

  const labels = environmentValue[ModalRegion]?.map((obj: ItemsData) => {
    return obj?.stationName;
  });

  const fineDust = environmentValue[ModalRegion]?.map((obj: ItemsData) => {
    return obj.pm10Value;
  });

  const ultraFineDust = environmentValue[ModalRegion]?.map((obj: ItemsData) => {
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
        {/* 시각 :{" "}
        {environmentValue
          ? environmentValue[0]?.dataTime
          : "데이터를 불러오는 중..."} */}
      </h2>
      {ModalRegion ? (
        environmentValue[ModalRegion] ? (
          <Bar options={options} data={data} />
        ) : (
          <LoadingSpinner />
        )
      ) : (
        <></>
      )}
    </div>
  );
};

export default Graph;
