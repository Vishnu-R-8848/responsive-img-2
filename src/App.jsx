import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";

const App = () => {
  console.log(window.innerWidth);
  if (window.innerWidth < 700) {
   
    return (
    <div className="mobile-caption">
      <h1>this project is only for the large tables and laptops</h1>
    </div>
  );
  }
 return (
      <div className=" min-h-screen w-screen ">
        <Navbar />
        <Main />
        <Footer />
      </div>
    );
  
};

export default App;
