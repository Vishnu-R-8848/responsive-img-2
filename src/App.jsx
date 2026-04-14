import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainWrapper from "./components/MainWrapper";

const App = () => {
  console.log(window.innerWidth);
  if (window.innerWidth < 700) {
    return (
      <div className="mobile-caption flex items-center justify-center ">
        <h1 className="text-5xl font-semibold uppercase">
          this project is only for the large tables and laptops
        </h1>
      </div>
    );
  }
  return (
    <div className=" min-h-screen w-screen ">
      <Navbar />
      <MainWrapper />
      <Footer />
    </div>
  );
};

export default App;
