import React from "react";
import { Route, Routes } from "react-router-dom";
import UseState from "../pages/UseState";
import HomeUseStateCopy from "../pages/HomeUseStateCopy";
import NotFoundPage from "../pages/NotFoundPage";
import Layuout from "./Layuout";
import UseEffectHook from "../pages/UseEffectHook";
import UseRefHook from "../pages/UseRefHook";
import UseMemoHook from "../pages/UseMemoHook";
import UseCallbackHook from "../pages/UseCallbackHook";
import UseContextHook from "../pages/UseContextHook";

const Navbar = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layuout />}>
          <Route index element={<UseState />} />
          <Route path="stateCopy" element={<HomeUseStateCopy />} />
          <Route path="effect" element={<UseEffectHook />} />
          <Route path="ref" element={<UseRefHook />} />
          <Route path="memo" element={<UseMemoHook />} />
          <Route path="callback" element={<UseCallbackHook />} />
          <Route path="context" element={<UseContextHook />} />

          <Route path="notpage" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default Navbar;
