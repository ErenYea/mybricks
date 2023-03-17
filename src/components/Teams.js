import React, { useEffect } from "react";

const Teams = ({ navBar, setNavBar }) => {
  useEffect(() => {
    setNavBar([0, 0, 0, 1, 0, 0]);
  }, []);
  return (
    <div id="temas" className="">
      <div className="w-full home pt-56 pb-16 text-center mr-auto ml-auto flex flex-col items-center">
        <h1 className="text-4xl font-semibold mb-[16px] leading-5 text-[#002159]">
          Meet the team
        </h1>
        <p className=" max-w-[720px] leading-5 text-[#486581] text-lg mb-0 mt-[10px]">
          We’ve built a world class team with expertise in various disciplines
          to build MyBricks Finance Limited into a sustainable and successful
          business.
        </p>
      </div>
      <div className="flex flex-col items-center mt-5 mr-auto ml-auto">
        <div className="flex mb-12 justify-center items-center">
          <button className=" text-[#fff] mr-8 gradiant-button pl-2 pr-2 border border-[#ff996f] rounded">
            Founding Team
          </button>
          <button className="">Property Development Team</button>
          <button>MyBricks Partners</button>
          <button>Build Team</button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Teams;
