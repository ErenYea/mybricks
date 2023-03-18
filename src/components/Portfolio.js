import { useEffect } from "react";
import React from "react";

const Portfolio = ({ navBar, setNavBar }) => {
  useEffect(() => {
    setNavBar([0, 0, 1, 0, 0, 0]);
  }, []);
  return (
    <div id="portfolio" className="flex-col portfolio-background pt-56">
        <div className="h-[600px] w-full flex justify-center items-start">
            <div className="flex w-5/6 h-1/2 justify-start items-start">
                <div className="w-1/2 h-[400px] flex justify-center items-center">
                    <h1 className="text-4xl w-[60%] text-[#002159] font-bold">
                    Be a part of the future of property investment
                    </h1>
                </div>
                <div className="w-1/3 h-[400px] ">
                    <img className="scale-75" src="https://mybricksfinance.com/assets/images/portfolio/no_portfolio.png"></img>
                </div>

            </div>

        </div>
    </div>
  );
};

export default Portfolio;
