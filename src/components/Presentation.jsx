import React from "react";

const Presentation = () => {
  let presentationData = [
    {
      id: 1,
      data: "female",
    },
    {
      id: 2,
      data: "news in",
    },
    {
      id: 3,
      data: "clothes",
    },
    {
      id: 4,
      data: "stores",
    },
    {
      id: 5,
      data: "accessories",
    },
  ];
  return (
    <div className="presentation-wrapper grid grid-cols-1 lg:grid-rows-1 grid-rows-2 lg:grid-cols-2 min-h-screen w-full">
      <div className="mens-presentation h-full border-4 border-gray-800 text-white flex items-center justify-center bg-[url(https://i.pinimg.com/736x/a6/ce/7e/a6ce7e6197122fadfb468c4a3a9285c1.jpg)] object-center object-cover">
        <h2 className=" uppercase text-2xl cursor-pointer text-shadow-2xl">
          mens
        </h2>
      </div>
      <div className="women-presentation h-full border-4 border-gray-800 text-white flex flex-col gap-2 lg:gap-6 xl:gap-8 items-center justify-center bg-[url(https://i.pinimg.com/736x/7e/eb/db/7eebdb27b9441956fad5f532d36858e1.jpg)] object-center object-cover">
        {presentationData.map((item) => (
          <h2
            key={item.id}
            className=" uppercase text-2xl cursor-pointer text-shadow-2xl"
          >
            {item.data}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default Presentation;
