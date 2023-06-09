import React, { useState } from "react";

import logo from "../asset/logo.png";

import { Link, useNavigate } from "react-router-dom";
import ListIcon from "@mui/icons-material/List";
import CloseIcon from "@mui/icons-material/Close";

const NavBar = ({ navBar, setNavBar }) => {
  const navigate = useNavigate();
  const [colorChange, setColorchange] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu(true);
  };
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  // useEffect(()=>{

  // })
  return (
    <>
      <div
        className={
          colorChange
            ? "h-[80px] w-screen pt-[20px] z-20 fixed top-0 right-0 left-0 flex flex-col teamAvatar bg-white"
            : openMenu
            ? "h-full w-screen pt-[54px] z-20 fixed top-0 right-0 left-0 flex flex-col teamAvatar bg-white pb-0"
            : "h-[80px] w-screen pt-[54px] z-20 fixed top-0 right-0 left-0 flex flex-col teamAvatar"
        }
      >
        <div className="flex px-4 md:px-[5%] flex-row items-center justify-start">

          <div id="logo" className="w-full h-full flex items-end md:-ml-8 ml-2" >
            <img src={logo} alt="" className="h-[50px] w-[182px]" />
          </div>
          <div
            id="navbar"
            className="w-full space-x-8 hidden h-full lg:flex md:flex xl:flex flex-row items-center justify-end text-md text-[#627d98] mr-12 md:-mr-8"
          >
            <Link to="/">
              <a className={navBar[0] == 1 ? "text-[#0552b5]" : ""}>Home</a>
            </Link>
            <Link to="/learn">
              <a className={navBar[1] == 1 ? "text-[#0552b5]" : ""}>Learn</a>
            </Link>

            <a href="https://mybricksstays.com/">Holiday Rentals</a>

            <Link to="/portfolio">
              <a className={navBar[2] == 1 ? "text-[#0552b5]" : ""}>
                Portfolio
              </a>
            </Link>
            <Link to="/teams">
              <a className={navBar[3] == 1 ? "text-[#0552b5]" : ""}>
                Team & Partners
              </a>
            </Link>

            <a href="https://docs.airbrick.finance/">Docs</a>

            <a href="https://mybricksinvest.co.uk/">Dashboard (beta)</a>
          </div>
          <div className="lg:hidden md:hidden xl:hidden flex right-0 w-full items-center justify-end">
            {openMenu ? (
              <CloseIcon
                onClick={() => {
                  setOpenMenu(false);
                }}
              />
            ) : (
              <ListIcon onClick={handleMenu} />
            )}
          </div>
        </div>
        {openMenu ? (
          <div className="w-full h-fit bg-white lg:hidden md:hidden xl:hidden  flex flex-col  items-start  font-medium p-4 text-[#627d98] teamAvatar">
            <div
              className={
                navBar[0] == 1
                  ? "mt-4 cursor-pointer text-[#0552b5]"
                  : "mt-4 cursor-pointer"
              }
              onClick={() => {
                setOpenMenu(false);
                navigate("/");
              }}
            >
              Home
            </div>
            <div
              className={
                navBar[1] == 1
                  ? "mt-4 cursor-pointer text-[#0552b5]"
                  : "mt-4 cursor-pointer"
              }
              onClick={() => {
                setOpenMenu(false);
                navigate("/learn");
              }}
            >
              Learn
            </div>
            <div className={"mt-4 cursor-pointer"}>
              <a href="https://mybricksstays.com/">Holiday Rentals</a>
            </div>
            <div
              className={
                navBar[2] == 1
                  ? "mt-4 cursor-pointer text-[#0552b5]"
                  : "mt-4 cursor-pointer"
              }
              onClick={() => {
                setOpenMenu(false);
                navigate("/portfolio");
              }}
            >
              Portfolio
            </div>
            <div
              className={
                navBar[3] == 1
                  ? "mt-4 cursor-pointer text-[#0552b5]"
                  : "mt-4 cursor-pointer"
              }
              onClick={() => {
                setOpenMenu(false);
                navigate("/teams");
              }}
            >
              Teams
            </div>
            <div className={"mt-4 cursor-pointer"}>
              <a href="https://docs.airbrick.finance/">Docs</a>
            </div>
            <div className={"mt-4 cursor-pointer"}>
              <a href="https://mybricksinvest.co.uk/">Dashboard (beta)</a>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default NavBar;
