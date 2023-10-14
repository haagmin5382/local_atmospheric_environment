import { atom } from "recoil";

export const regionEnvironmentState = atom({
  key: "regionEnvironmentState",
  default: {
    seoul: { items: [] },
    busan: { items: [] },
    daegu: { items: [] },
    incheon: { items: [] },
    gwangju: { items: [] },
    daejeon: { items: [] },
    ulsan: { items: [] },
    gyeonggi: { items: [] },
    gangwon: { items: [] },
    northChungcheong: { items: [] },
    southChungcheong: { items: [] },
    northJeolla: { items: [] },
    southJeolla: { items: [] },
    northGyeongsang: { items: [] },
    southGyeongsang: { items: [] },
    jeju: { items: [] },
    sejong: { items: [] },
  },
});
