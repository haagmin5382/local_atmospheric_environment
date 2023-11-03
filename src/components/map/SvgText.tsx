import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { regionState } from "recoil/region";
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
  return (
    <>
      <StyledText id="gangwon" onClick={onMouseHandler} x="280" y="100">
        강원
      </StyledText>
      <StyledText id="busan" onClick={onMouseHandler} x="350" y="430">
        부산
      </StyledText>
      <StyledText id="gyeonggi" onClick={onMouseHandler} x="190" y="150">
        경기
      </StyledText>
      <StyledText id="seoul" onClick={onMouseHandler} x="150" y="110">
        서울
      </StyledText>
      <StyledText id="incheon" onClick={onMouseHandler} x="80" y="140">
        인천
      </StyledText>
      <StyledText
        id="northChungcheong"
        onClick={onMouseHandler}
        x="220"
        y="210"
      >
        충북
      </StyledText>
      <StyledText id="northGyeongsang" onClick={onMouseHandler} x="320" y="270">
        경북
      </StyledText>
      <StyledText id="northJeolla" onClick={onMouseHandler} x="170" y="350">
        전북
      </StyledText>
      <StyledText id="southGyeongsang" onClick={onMouseHandler} x="260" y="390">
        경남
      </StyledText>
      <StyledText id="southJeolla" onClick={onMouseHandler} x="190" y="430">
        전남
      </StyledText>
      <StyledText
        id="southChungcheong"
        onClick={onMouseHandler}
        x="120"
        y="230"
      >
        충남
      </StyledText>
      <StyledText id="ulsan" onClick={onMouseHandler} x="400" y="370">
        울산
      </StyledText>
      <StyledText id="daegu" onClick={onMouseHandler} x="330" y="340">
        대구
      </StyledText>
      <StyledText id="gwangju" onClick={onMouseHandler} x="100" y="410">
        광주
      </StyledText>
      <StyledText id="daejeon" onClick={onMouseHandler} x="170" y="290">
        대전
      </StyledText>
      <StyledText id="sejong" onClick={onMouseHandler} x="160" y="255">
        세종
      </StyledText>
      <StyledText id="jeju" onClick={onMouseHandler} x="110" y="610">
        제주
      </StyledText>
      <StyledText id="korea" onClick={onMouseHandler} x="30" y="30">
        전국
      </StyledText>
    </>
  );
};

export default SvgText;
