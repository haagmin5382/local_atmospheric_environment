import { TypeEnvironment } from "pages/Main";
import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { RegionAverageState } from "recoil/airEnvironment";
import { regionState } from "recoil/region";
import { mapText } from "resource/pathmap";
import { StyledText } from "styledcomponents/koreamap.style";
import { putMouse } from "utils/mouseEvent";

const SvgText = () => {
  const [ModalRegion, setModalRegion] = useRecoilState(regionState);
  const [isModalOpened, setModalOpen] = useState(false);
  const regionDustValue = useRecoilValue(RegionAverageState) as TypeEnvironment;

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

  const renderingPath = () => {
    const textComponent = [];
    for (const [key, value] of Object.entries(mapText)) {
      textComponent.push(
        <React.Fragment key={key}>
          <StyledText id={key} x={value.x} y={value.y} onClick={onMouseHandler}>
            {key}
            <tspan id={key} x={value.x} y={`${Number(value.y) + 21}`}>
              {" "}
              {regionDustValue[key]?.pm10Value}
            </tspan>
          </StyledText>
        </React.Fragment>
      );
    }
    return textComponent;
  };
  return <>{renderingPath()}</>;
};

export default SvgText;
