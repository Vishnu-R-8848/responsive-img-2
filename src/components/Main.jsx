import React from "react";
import Hero from "./Hero";
import Product from "./product";
import Presentation from "./Presentation";
import Contact from "./contact";

const Main = () => {
  return (
    <main className="main-wrapper h-full">
      <Hero />
      <Product />
      <Presentation />
      <Contact/>
    </main>
  );
};

export default Main;
