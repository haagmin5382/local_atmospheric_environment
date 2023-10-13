import KoreaMap from "components/KoreaMap";
import LocalSection from "components/LocalSection";
import styled from "styled-components";

const Main = () => {
  const HomeContainer = styled.div`
    display: flex;
    align-items: center;
  `;
  return (
    <HomeContainer>
      <KoreaMap />
      <LocalSection />
    </HomeContainer>
  );
};

export default Main;
