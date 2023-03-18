import { useEffect } from "react";
import React from "react";

const Portfolio = ({ navBar, setNavBar }) => {
  useEffect(() => {
    setNavBar([0, 0, 1, 0, 0, 0]);
  }, []);
  return (
    <div id="portfolio" className="flex-col portfolio-background pt-40">
      <div className="h-fit w-full flex justify-center items-start">
        <div className="flex flex-col md:flex-row w-full md:w-5/6 md:h-1/2 justify-start items-start pb-10">
          <div className="md:w-1/2 md:h-full w-full flex justify-start md:justify-center pl-2 md:pl-0">
            <h1 className="lg:text-4xl md:w-[100%] text-[#002159] font-bold text-2xl ">
              Experience the cutting-edge technology and advanced systems that
              are shaping the future of property timeshare investment. Be a part
              of the innovative revolution
            </h1>
          </div>

          <div className="md:w-1/3 md:h-full pb-4">
            <img
              className="scale-[100%] md:scale-110"
              src="https://mybricksfinance.com/assets/images/portfolio/no_portfolio.png"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
