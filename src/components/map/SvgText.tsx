import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { regionState } from "recoil/region";
import { mapText } from "resource/pathmap";
import { StyledText } from "styledcomponents/koreamap.style";
import { putMouse } from "utils/mouseEvent";

const SvgText = () => {
  const [ModalRegion, setModalRegion] = useRecoilState(regionState);
  const [isModalOpened, setModalOpen] = useState(false);

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
        <StyledText
          key={key}
          id={key}
          x={value.x}
          y={value.y}
          onClick={onMouseHandler}
        >
          {key}
        </StyledText>
      );
    }
    return textComponent;
  };
  return <>{renderingPath()}</>;
};

export default SvgText;
