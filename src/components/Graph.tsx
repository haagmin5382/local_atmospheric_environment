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
  width: 36vw;
  height: 25vh;
`;

const Graph = ({ ModalRegion }: { ModalRegion: string }) => {
  // redux api데이터
  const environmentValue = useRecoilValue(environmentState) as any;
  const RegionValue = useRecoilValue(RegionAverageState);

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
            ? environmentValue[ModalRegion][0]?.sidoName
            : "전국"
        } 미세먼지 수치`,
      },
    },
  };

  const regions = environmentValue[ModalRegion]?.map((obj: ItemsData) => {
    return obj?.stationName;
  });

  const korea = Object.keys(RegionValue);

  const regionFineDust = environmentValue[ModalRegion]?.map(
    (obj: ItemsData) => {
      return obj.pm10Value;
    }
  );

  const koreaFineDust = Object.values(RegionValue).map((obj: any) => {
    return obj.pm10Value;
  });

  const regionUltraFineDust = environmentValue[ModalRegion]?.map(
    (obj: ItemsData) => {
      return obj.pm25Value;
    }
  );

  const koreaUltaFineDust = Object.values(RegionValue).map((obj: any) => {
    return obj.pm25Value;
  });

  const data = {
    labels: ModalRegion === "전국" ? korea : regions,
    datasets: [
      {
        label: "미세먼지",
        data: ModalRegion === "전국" ? koreaFineDust : regionFineDust,
        borderColor: "#F4C44E",
        backgroundColor: "#F4C44E",
      },
      {
        label: "초미세먼지",
        data: ModalRegion === "전국" ? koreaUltaFineDust : regionUltraFineDust,
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
      {/* {environmentValue[ModalRegion] ? (
        <Bar options={options} data={data} />
      ) : (
        <LoadingSpinner />
      )} */}
      {korea.length ? <Bar options={options} data={data} /> : <></>}
    </GraphContainer>
  );
};

export default Graph;
