import React from "react";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-56px)] w-full grid grid-cols-[5fr_4fr_1fr] grid-rows-[2fr_1fr] bg-[url(https://i.pinimg.com/736x/2b/d4/3b/2bd43bea4a9323214556cd5ad4f4ba45.jpg)] bg-top bg-cover ">
      <div className="grid-items border-4 border-white bg-transparent "></div>
      <div className="grid-items border-4 border-white bg-transparent "></div>
      <div className="grid-items border-4 border-white bg-transparent flex items-center justify-center relative">
        <h2 className="text-xl sm:text-4xl md:text-5xl text-white uppercase text-white- font-regular rotate-90 absolute top-1/2  -translate-y-1/2 tracking-widest text-nowrap">
          session 24-
        </h2>
      </div>
      <div className="grid-items border-4 border-white bg-transparent px-4 ">
        <h2 className="text-6xl font-regular flex items-center h-full w-full text-left leading-14 text-gray-200 ">
          Combination <br /> of lightness <br /> and style
        </h2>
      </div>
      <div className="grid-items border-4 border-white bg-transparent flex items-end p-6 ">
        <button className="shop-all cta capitalize bg-gray-200 px-4 py-2 rounded-sm hover:opacity-60 cursor-pointer shadow  transition-all duration-300">
          shop all
        </button>
      </div>
      <div className="grid-items border-4 border-white bg-transparent flex items-center justify-center py-6 relative">
        <h2 className="text-5xl font-regular text-gray-200 rotate-90 uppercase absolute top-1/2  -translate-y-1/2 tracking-widest text-nowrap ">
          top
        </h2>
      </div>
    </div>
  );
};

export default Hero;
