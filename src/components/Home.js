import React, { useEffect } from "react";

const Home = ({ navBar, setNavBar }) => {
  useEffect(() => {
    setNavBar([1, 0, 0, 0, 0, 0]);
  },[]);
  return <>
  <div className="flex-col flex">
      <div className="flex justify-center items-center mr-[20rem] ml-[20rem] mt-10">
        <div className="max-w-7xl h-fit flex flex-row">

          <div className="w-1/2 flex flex-col">
            <div className="mb-4">
              <span className="text-4xl font-bold text-[#002159] ">Making Property Investing Accessible For Everyone</span>                
            </div>
            <p className="text-lg mb-8 text-gray-600 w-11/12">
               We’re revolutionising property investment by using blockchain technology and NFTs to provide ownership rights to property portfolios.
            </p>
            <p className="text-lg mb-4 text-gray-600 ">
                BRICKS Contract Address: <span className="underline"> 0x13e1070e3a388e53ec35480ff494538f9ffc5b8d</span>
            </p>
          </div>

          <div className="w-1/2 h-full flex flex-col items-start justify-start">

              <div className="scale-[70%] w-9/12 h-64">
                <video className="rounded-lg relative z-40" poster="https://mybricksfinance.com/assets/images/temp.jpg" preload="auto" controls crossOrigin src="https://devmybricks.s3.eu-west-2.amazonaws.com/61fbbb10c1c29f00124ca8eb.mp4" />

                <div className="ml-6 -mt-[48%] rounded-lg w-full h-full absolute z-20 bg-orange-200"></div>
              </div>
          </div>
        </div>
      </div>
  </div>
  <div className="flex flex-col justify-center items-center mr-auto ml-auto mt-10 bg-white w-full ">
          <h2 className="text-[#002159] text-4xl mt-16 font-bold w-1/2 text-center p-2 mb-4">We're building a property investment platform with a difference</h2>
          <p className="text-center text-gray-600 text-lg w-1/3">Bringing property investment to the blockchain via an incredibly simple and easy to use platform.</p>
        </div>

    </>
};

export default Home;
