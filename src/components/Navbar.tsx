import React from "react";
import { Route, Routes } from "react-router-dom";
import UseState from "../pages/UseState";
import HomeUseStateCopy from "../pages/HomeUseStateCopy";
import NotFoundPage from "../pages/NotFoundPage";
import Layuout from "./Layuout";
import UseEffectHook from "../pages/UseEffectHook";
import UseRefHook from "../pages/UseRefHook";
import UseMemoHook from "../pages/UseMemoHook";

const Navbar = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layuout />}>
          <Route index element={<UseState />} />
          <Route path="counters" element={<HomeUseStateCopy />} />
          <Route path="effect" element={<UseEffectHook />} />

          <Route path="memo" element={<UseMemoHook />} />
          <Route path="ref" element={<UseRefHook />} />
          <Route path="notpage" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default Navbar;
