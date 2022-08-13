import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeUseState from "../pages/HomeUseState";
import HomeUseStateCopy from "../pages/HomeUseStateCopy";
import NotFoundPage from "../pages/NotFoundPage";
import Layuout from "./Layuout";

const Navbar = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layuout />}>
          <Route index element={<HomeUseState />} />
          <Route path="counters" element={<HomeUseStateCopy />} />
          <Route path="notpage" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default Navbar;
