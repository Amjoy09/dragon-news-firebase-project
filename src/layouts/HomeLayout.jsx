import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";

const HomeLayout = () => {
  return (
    <div>
      <header className="space-y-4">
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-11/12 mx-auto mt-6 mb-15">
          <Navbar></Navbar>
        </nav>
      </header>

      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
        <section className="LEFT-BAR col-span-3 sticky top-3 h-fit">
          <LeftBar></LeftBar>
        </section>
        <section className="MAIN col-span-6">
          <Outlet></Outlet>
        </section>
        <section className="RIGHT-BAR col-span-3 sticky top-3 h-fit">
          <RightBar></RightBar>
        </section>
      </main>
    </div>
  );
};

export default HomeLayout;
