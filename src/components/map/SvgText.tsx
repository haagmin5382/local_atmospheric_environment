import { TypeEnvironment } from "pages/Main";
import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { RegionAverageState } from "recoil/airEnvironment";
import { regionState } from "recoil/region";
import { mapText } from "resource/pathmap";
import {
  StyledRect,
  StyledText,
  StyledTspan,
} from "styledcomponents/koreamap.style";
import { putMouse } from "utils/mouseEvent";

const SvgText = ({ regionName }: { regionName: string }) => {
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
          {key !== "전국" ? (
            <StyledRect
              x={`${Number(value.x) - 16}`}
              y={`${Number(value.y) + 10}`}
              id={key}
              onClick={onMouseHandler}
              width="32"
              height="30"
              fill="#e5e5e584"
              stroke="black"
              stroke-width="1"
              rx="10"
              ry="10"
            />
          ) : (
            <></>
          )}
          <StyledText
            isSelected={regionName === key}
            id={key}
            x={value.x}
            y={value.y}
            onClick={onMouseHandler}
          >
            {key}
            <StyledTspan id={key} x={value.x} y={`${Number(value.y) + 31}`}>
              {regionDustValue[key]?.pm10Value}
            </StyledTspan>
          </StyledText>
        </React.Fragment>
      );
    }
    return textComponent;
  };
  return <>{renderingPath()}</>;
};

export default SvgText;
