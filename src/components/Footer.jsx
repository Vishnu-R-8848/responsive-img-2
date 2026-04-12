import React from "react";

const Footer = () => {
  let footerLinksData = [
    {
      id: 1,
      data: "men",
    },
    {
      id: 2,
      data: "women",
    },
    {
      id: 3,
      data: "blog",
    },
    {
      id: 4,
      data: "contacts",
    },
  ];
  let footerSocialLinksData = [
    {
      id: 1,
      data: "facebook",
    },
    {
      id: 2,
      data: "twitter",
    },
    {
      id: 3,
      data: "instagram",
    },
    {
      id: 4,
      data: "linkedin",
    },
  ];
  return (
    <div className="h-80 py-2 px-4 flex flex-col justify-between ">
      <div className="caption-wrapper">
        <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl">
          Premium online-shop
        </h2>
      </div>
      <div className="footer-content border-b-4 border-gray-800 flex justify-between py-4">
        <div className="footer-links-wrapper flex flex-col gap-2 items-start">
          {footerLinksData.map((item) => (
            <h2
              key={item.id}
              className="text-sm uppercase opacity-60 cursor-pointer font-semibold"
            >
              {item.data}
            </h2>
          ))}
        </div>
        <div className="footer-social-links-wrapper flex flex-col gap-2 items-end">
          {footerSocialLinksData.map((item) => (
            <h2
              key={item.id}
              className="text-sm uppercase opacity-60 cursor-pointer font-semibold text-right"
            >
              {item.data}
            </h2>
          ))}
        </div>
      </div>
      <div className="footer-copy-right-wrapper w-full">
        <p className="text-sm text-center">© 2024 TOFF. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
