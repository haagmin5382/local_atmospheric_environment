import React, { useState } from "react";
import { SvgContainer } from "styledcomponents/koreamap.style";
import SvgPath from "./SvgPath";
import SvgText from "./SvgText";

const KoreaSVG = () => {
  const [regionName, setRegionName] = useState("");
  return (
    <SvgContainer xmlns="img/south-korea.svg" viewBox="0 0 524 631">
      <SvgPath setRegionName={setRegionName} />
      <SvgText regionName={regionName} />
    </SvgContainer>
  );
};

export default KoreaSVG;
