import { Button } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const LayoutFooter = () => {
  let location = useLocation();
  const quickLinks = [
    {
      name: "Terms & Condition",
      path: "#",
    },
    {
      name: "Privacy Policy",
      path: "#",
    },
    {
      name: "Refund Policy",
      path: "#",
    },
  ];

  const quickLinks1 = [
    { name: "About Us", path: "#" },
    { name: "Faqs", path: "#" },
  ];
  return (
    <div>
      <div className="flex flex-col p-10 mx-auto justify-between md:flex-row md:gap-6 border-t-2 border-amber-500 mb-0  bg-[#1C2127] ">
        <div className="text-left">
          <h2 className="text-2xl font-medium  text-[#A0A0A0]">Shortcuts</h2>
          {quickLinks1.map((item, i) => (
            <Link to={item.path} key={i}>
              <p className=" text-[#A0A0A0] text-[17px] ">{item?.name}</p>
            </Link>
          ))}
        </div>
        <div className="text-left">
          <h2 className="text-2xl font-medium  text-[#A0A0A0]">Policy Links</h2>

          {quickLinks.map((item, i) => (
            <Link to={item.path} key={i}>
              <p className="text-md text-[#A0A0A0]  text-[17px] ">
                {item?.name}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-left">
          <h2 className="text-2xl font-medium  text-[#A0A0A0]">Contact Us</h2>
          <div className="flex flex-row">
            <p className="text-md text-[#A0A0A0] text-[17px]  ">
              4th floor, Sharif Plaza, 39 Kemal Ataturk Avenue,
              <br /> Banani, Dhaka-1213.
            </p>
          </div>
          <p className="text-md text-[#A0A0A0] text-[17px] ">09613123123</p>
          <p className="text-md text-[#A0A0A0] text-[17px]">
            support@firsttrip.com
          </p>
        </div>
      </div>

     
    </div>
  );
};

export default LayoutFooter;
