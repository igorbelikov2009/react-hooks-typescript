import React from "react";
import { FC } from "react";
import { Link, Outlet } from "react-router-dom";

const Layuout: FC = () => {
  return (
    <section className="container">
      <div className="navbar">
        <nav className="container bg-info">
          <Link className="link" to="/">
            Home-UseState
          </Link>
          <Link className="link" to="/stateCopy">
            MyHook UseCounters
          </Link>
          <Link className="link" to="/effect">
            UseEffect
          </Link>
          <Link className="link" to="/ref">
            UseRef
          </Link>
          <Link className="link" to="/memo">
            UseMemo
          </Link>
          <Link className="link" to="/callback">
            UseCallback
          </Link>
          <Link className="link" to="/context">
            UseContext
          </Link>
          <Link className="link" to="/notpage">
            NotFoundPage
          </Link>
        </nav>
      </div>

      <main className="main">
        <Outlet />
      </main>

      <footer className="container">2022</footer>
    </section>
  );
};

export default Layuout;
