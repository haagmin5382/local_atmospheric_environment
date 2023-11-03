// 온마우스 이벤트
export const putMouse = (
  e: React.MouseEvent<SVGPathElement> | React.MouseEvent<SVGElement>,
  setModalOpen: (state: boolean) => void,
  setModalRegion: (state: string) => void
) => {
  const target = (e.target as Element).id;
  setModalOpen(true); // 지역 위치 알려 주는 모달 오픈
  setModalRegion(target);
};

// 마우스 아웃 이벤트
export const getOutMouse = (setModalOpen: (state: boolean) => void) => {
  setModalOpen(false); // 지역 위치 알려 주는 모달 클로즈
};
