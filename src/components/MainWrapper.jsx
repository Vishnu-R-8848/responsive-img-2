import React from "react";
import Hero from "./Hero";

import Presentation from "./Presentation";
import Contact from "./contact";
import Product from "./product";

const MainWrapper = () => {
  return (
    <main className="main-wrapper h-full">
      <Hero />
      <Product />
      <Presentation />
      <Contact />
    </main>
  );
};

export default MainWrapper;
