import Footer from "components/Footer";
import Graph from "components/graph/Graph";
import Header from "components/Header";
import KoreaMap from "components/KoreaMap";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<KoreaMap />} path="/" />
        <Route element={<Graph />} path="/graph" />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default Main;
