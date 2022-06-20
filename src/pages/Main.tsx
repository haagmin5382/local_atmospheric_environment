import Graph from "components/Graph";
import Header from "components/Header";
import KoreaMap from "components/KoreaMap";
import RegionButton from "components/RegionButton";
import React from "react";

const Main = () => {
  return (
    <div>
      <Header />
      {/* <RegionButton /> */}
      <KoreaMap />
      <Graph />
    </div>
  );
};

export default Main;
