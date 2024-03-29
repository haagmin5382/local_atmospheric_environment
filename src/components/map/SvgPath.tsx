import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { RegionAverageState } from "recoil/airEnvironment";
import { regionState } from "recoil/region";
import { mapPath } from "resource/pathmap";
import { PathContainer } from "styledcomponents/koreamap.style";
import { getParticleColor } from "utils/getParticleColor";
import { getOutMouse, putMouse } from "utils/mouseEvent";

const SvgPath = ({
  setRegionName,
}: {
  setRegionName: (state: string) => void;
}) => {
  const [ModalRegion, setModalRegion] = useRecoilState(regionState);
  const [isModalOpened, setModalOpen] = useState(false);
  const environmentData = useRecoilValue(RegionAverageState) as any;

  const onMouseHandler = (
    e: React.MouseEvent<SVGPathElement> | React.MouseEvent<SVGElement>
  ) => {
    const target = (e.target as Element).id;
    if (target === "korea") {
      setModalRegion("전국");
    } else {
      putMouse(e, setModalOpen, setModalRegion);
    }
  };
  const offMouseHandler = () => {
    setRegionName("");
    // getOutMouse(setModalOpen);
  };
  // 마우스 움직임 이벤트
  const [throttle, setThrottle] = useState(false);
  const [mouseLocation, setMouseLocation] = useState([0, 0]);

  const moveMouse = (region: string) => {
    if (throttle) {
      return; // throttle이 true면 함수 종료
    } else {
      // throttle이 false면 밑에 코드들을 전부 실행
      setThrottle(true); // throttle을 true로 바꾼다.
      setTimeout(async () => {
        // 3초 뒤에

        setThrottle(false); // throttle을 false로 바꾼다.
      }, 200);
    }
  };

  const renderingPath = () => {
    const pathComponent = [];
    for (const [key, value] of Object.entries(environmentData)) {
      const ParticleAmount = value as any;

      pathComponent.push(
        <PathContainer
          key={mapPath[key]}
          onClick={onMouseHandler}
          onMouseOut={offMouseHandler}
          onMouseMove={() => setRegionName(key)}
          fill={getParticleColor(ParticleAmount)}
          id={key}
          name={key}
          d={mapPath[key]}
        />
      );
    }
    return pathComponent;
  };
  return <>{renderingPath()}</>;
};

export default SvgPath;
