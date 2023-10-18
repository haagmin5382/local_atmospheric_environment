import KoreaMap from "components/KoreaMap";
import LocalSection from "components/LocalSection";
import { useState } from "react";
import { regions } from "resource/region";
import styled from "styled-components";

const Main = () => {
  const HomeContainer = styled.div`
    display: flex;
    /* align-items: center; */
  `;

  const [ModalRegion, setModalRegion] = useState("");
  return (
    <HomeContainer>
      <KoreaMap ModalRegion={ModalRegion} setModalRegion={setModalRegion} />
      <LocalSection ModalRegion={ModalRegion} />
    </HomeContainer>
  );
};

export default Main;
