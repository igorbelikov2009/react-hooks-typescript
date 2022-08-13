import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layuout = () => {
  return (
    <section className="container">
      <div className="navbar">
        <nav className="container bg-info">
          <Link className="link" to="/">
            Home-State
          </Link>

          <Link className="link" to="/counters">
            UseCounters
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
