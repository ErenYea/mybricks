import { useEffect } from "react";
import React from "react";

const Portfolio = ({ navBar, setNavBar }) => {
  useEffect(() => {
    setNavBar([0, 0, 1, 0, 0, 0]);
  }, []);
  return (
    <div id="portfolio" className="flex-col portfolio-background pt-56">
      <div className="h-[600px] w-full flex justify-center items-start">
        <div className="flex flex-col-reverse md:flex-row w-full md:w-5/6 md:h-1/2 justify-start items-start">
          <div className="md:w-1/2 md:h-[400px] flex justify-center items-center">
            <h1 className="lg:text-4xl w-[60%] text-[#002159] font-bold">
              Experience the cutting-edge technology and advanced systems that
              are shaping the future of property timeshare investment. Be a part
              of the innovative revolution
            </h1>
          </div>

          <div className="md:w-1/3 md:h-[400px] pb-4">
            <img
              className="scale-[60%] md:scale-110"
              src="https://mybricksfinance.com/assets/images/portfolio/no_portfolio.png"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
