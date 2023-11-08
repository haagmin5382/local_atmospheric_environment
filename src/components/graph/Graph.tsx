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
import styled from "styled-components";
import { RegionAverageState } from "recoil/airEnvironment";
import { regionState } from "recoil/region";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const GraphContainer = styled.div`
  @media (max-width: 800px) {
    margin-top: 5vh;
    margin-left: 3vw;
    width: 90vw;
    height: 60vh;
  }

  width: 36vw;

  /* height: 25vh; */
`;

const Graph = () => {
  // redux api데이터
  const regionValue = useRecoilValue(regionState);
  const environmentValue = useRecoilValue(environmentState) as any;
  const regionAverageValue = useRecoilValue(RegionAverageState);
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
          regionValue && environmentValue[regionValue]
            ? environmentValue[regionValue][0]?.sidoName
            : "전국"
        } 미세먼지 수치`,
      },
    },
  };

  const regions = environmentValue[regionValue]?.map((obj: ItemsData) => {
    return obj?.stationName;
  });
  const regionFineDust = environmentValue[regionValue]?.map(
    (obj: ItemsData) => {
      return obj.pm10Value;
    }
  );
  const regionUltraFineDust = environmentValue[regionValue]?.map(
    (obj: ItemsData) => {
      return obj.pm25Value;
    }
  );
  const korea = Object.keys(regionAverageValue);
  const koreaFineDust = Object.values(regionAverageValue).map((obj: any) => {
    return obj.pm10Value;
  });
  const koreaUltaFineDust = Object.values(regionAverageValue).map(
    (obj: any) => {
      return obj.pm25Value;
    }
  );

  const data = {
    labels: regionValue === "전국" ? korea : regions,
    datasets: [
      {
        label: "미세먼지",
        data: regionValue === "전국" ? koreaFineDust : regionFineDust,
        borderColor: "#F4C44E",
        backgroundColor: "#F4C44E",
      },
      {
        label: "초미세먼지",
        data: regionValue === "전국" ? koreaUltaFineDust : regionUltraFineDust,
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
    <GraphContainer>
      {korea.length ? <Bar options={options} data={data} /> : <></>}
    </GraphContainer>
  );
};

export default Graph;
