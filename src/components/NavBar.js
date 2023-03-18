import React, { useEffect, useState } from "react";

import logo from '../asset/logo.png'

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

            ? "h-[80px] w-screen pt-[20px]  z-10 fixed  top-0 right-0 left-0  flex flex-col teamAvatar bg-white"
            : openMenu
            ? "h-full w-screen pt-[54px]  z-10 fixed  top-0 right-0 left-0  flex flex-col teamAvatar bg-white pb-0"
            : "h-[80px] w-screen pt-[54px]  z-10 fixed  top-0 right-0 left-0  flex flex-col teamAvatar"

        }
      >
        <div className="flex  lg:pr-[52px] lg:pl-[52px] md:pr-[52px] md:pl-[52px] flex-row items-end justify-start">
          <div id="logo " className="w-fit  h-full flex items-end ">
            <Link to="/">
              <img
                src={logo}
                
                alt=""
                className="h-[50px] w-[182px]"
              />
            </Link>
          </div>
          <div
            id="navbar"
            className="w-full space-x-8 hidden  h-full lg:flex md:flex xl:flex flex-row items-end justify-end  text-md text-[#627d98] mr-12"
          >
            <Link to="/">
              <a className={navBar[0] == 1 ? "text-[#0552b5]" : ""}>Home</a>
            </Link>
            <Link to="/learn">
              <a className={navBar[1] == 1 ? "text-[#0552b5]" : ""}>Learn</a>
            </Link>
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
            <Link to="/docs">
              <a className={navBar[4] == 1 ? "text-[#0552b5]" : ""}>Docs</a>
            </Link>
            <Link to="/login">
              <a className={navBar[5] == 1 ? "text-[#0552b5]" : ""}>Login</a>
            </Link>
          </div>
          <div className="lg:hidden md:hidden xl:hidden flex right-0 w-full justify-end">
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
            <div
              className={
                navBar[4] == 1
                  ? "mt-4 cursor-pointer text-[#0552b5]"
                  : "mt-4 cursor-pointer"
              }
              onClick={() => {
                setOpenMenu(false);
                navigate("/docs");
              }}
            >
              Docs
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
