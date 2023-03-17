import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = ({ navBar, setNavBar }) => {
  // useEffect(()=>{

  // })
  return (
    <>
    <div className="h-[80px]  pr-[52px] pl-[52px] z-10 sticky  top-0 right-0 left-0  flex flex-row items-end justify-start">
      <div id="logo " className="w-fit  h-full flex items-end">
        <Link to="/">
          <img
            src="https://mybricksfinance.com/assets/images/logo_full.svg"
            alt=""
            className="h-[34px] w-[172px]"
          />
        </Link>
      </div>
      <div
        id="navbar"
        className="w-full space-x-8  h-full flex flex-row items-end justify-end  text-md text-[#627d98] mr-12"
      >
        <Link to="/">
          <a className={navBar[0] == 1 ? "text-[#0552b5]" : ""}>Home</a>
        </Link>
        <Link to="/learn">
          <a className={navBar[1] == 1 ? "text-[#0552b5]" : ""}>Learn</a>
        </Link>
        <Link to="/portfolio">
          <a className={navBar[2] == 1 ? "text-[#0552b5]" : ""}>Portfolio</a>
        </Link>
        <Link to="/teams">
          <a className={navBar[3] == 1 ? "text-[#0552b5]" : ""}>
            Team & Partners
          </a>
        </Link>
        <Link to="/docs">
          <a className={navBar[4] == 1 ? "text-[#0552b5]" : ""}>Docs</a>
        </Link>
        <Link to="/login">
          <a className={navBar[5] == 1 ? "text-[#0552b5]" : ""}>Login</a>
        </Link>
      </div>
    </div>
    <div className="w-full h-fit bg-[#ff8b5b] mt-4 flex flex-col items-center justify-center text-white font-medium p-2">
      <p>As part of the MyBricks 2.0 Launch, we're temporarily pausing new platform signups</p>
    </div>
    </>
  );
};

export default NavBar;
