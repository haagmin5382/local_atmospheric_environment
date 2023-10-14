import Graph from "components/graph/Graph";
import Header from "components/Header";
import KoreaMap from "components/KoreaMap";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";

const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Graph />} path="/graph" />
      </Routes>
    </>
  );
};

export default Router;
