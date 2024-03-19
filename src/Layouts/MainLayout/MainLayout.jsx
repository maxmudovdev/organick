import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <>
      <div className="flex flex-col justify-between h-[100vh]">
        <div>
          <Header />
          <main className="mt-[150px]">
            <Outlet />
          </main>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default MainLayout;
