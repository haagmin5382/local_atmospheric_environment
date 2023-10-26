import Header from "components/Header";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";

const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<Main />} path="/" />
      </Routes>
    </>
  );
};

export default Router;
