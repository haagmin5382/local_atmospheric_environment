import React from "react";
import { MapContainer, SvgContainer } from "styledcomponents/koreamap.style";
import SvgPath from "./SvgPath";
import SvgText from "./SvgText";

const KoreaSVG = () => {
  return (
    <MapContainer>
      <SvgContainer xmlns="img/south-korea.svg" viewBox="0 0 524 631">
        <SvgPath />
        <SvgText />
      </SvgContainer>
    </MapContainer>
  );
};

export default KoreaSVG;
