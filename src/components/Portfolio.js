import { useEffect } from "react";
import React from "react";

const Portfolio = ({ navBar, setNavBar }) => {
  useEffect(() => {
    setNavBar([0, 0, 1, 0, 0, 0]);
  }, []);
  return (
    <div id="portfolio" className="flex-col portfolio-background pt-28">
      <div className="h-fit w-full flex justify-center items-center">
        <div className="flex flex-col md:flex-row w-full md:min-h-[550px] justify-start items-start md:items-center pb-10 px-4 lg:px-[17.5%] space-x-12">

          <div className="md:h-full w-full flex justify-start md:justify-center pl-2 md:pl-0 items-center">
            <h1 className="lg:text-3xl md:w-[100%] text-[#002159] text-left font-bold text-3xl">
              Experience the cutting-edge technology and advanced systems that
              are shaping the future of property timeshare investment. Be a part
              of the innovative revolution
            </h1>
          </div>

          <div className="md:h-full pb-4 pt-8 md:pt-0">
            <img
              className="scale-[100%]"
              src="https://mybricksfinance.com/assets/images/portfolio/no_portfolio.png"
            ></img>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Portfolio;
