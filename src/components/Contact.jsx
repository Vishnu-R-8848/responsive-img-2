import React from "react";
import { ArrowUpRight } from "lucide-react";

const contact = () => {
  return (
    <div className="h-100 flex justify-between items-start text-white bg-[#373227] py-2 px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl capitalize leading-[1.1] font-regular">
        subscribe to our <br /> newsletter to receive <br /> notifications about{" "}
        <br /> drops
      </h2>
      <div className="form-wrapper h-full flex flex-col justify-between items-end">
        <h2 className="text-6xl uppercase opacity-10 font-medium ">toff</h2>
        <form
          method="post"
          className="flex flex-col gap-4 w-full my-8  items-center py-2"
        >
          <div className="first-main-wrapper border-b">
            <label htmlFor="email" className="text-xl capitalize opacity-60">
              e-mail
            </label>
            <input
              type="email"
              className="px-4 py-2 rounded-sm text-white outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300 flex-1"
            />
            <button className="px-4 py-2 text-gray-200  rounded-sm hover:opacity-60 transition-all duration-300">
              <ArrowUpRight />
            </button>
          </div>
          <p className="text-sm opacity-60 flex items-center gap-2">
            <input type="checkbox" name="privacy" id="privacy" />
            We care about your data. Read our{" "}
            <a href="#" className="underline">
              privacy policy
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default contact;
