import React from "react";
import { NavBar } from "../components";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
