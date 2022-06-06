import React from "react";
import { Outlet, Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout.js";
import { Navbar, Bigsidebar, Smallsidebar } from "../../components";
const Sharedlayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <Smallsidebar />
        <Bigsidebar />

        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default Sharedlayout;
