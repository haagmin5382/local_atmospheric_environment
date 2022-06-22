import Graph from "components/graph/Graph";
import Header from "components/Header";
import KoreaMap from "components/KoreaMap";
import RegionButton from "components/RegionButton";
import React from "react";
import { Routes, Route } from "react-router-dom";
// import { Routes } from "react-router-dom";
const Main = () => {
  return (
    <div>
      <Header />
      <Routes>
        {/* <RegionButton /> */}
        <Route element={<KoreaMap />} path="/" />
        <Route element={<Graph />} path="/graph" />
      </Routes>
    </div>
  );
};

export default Main;
