import { useEffect } from "react";
import React from "react";
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  

const Learn = ({ navBar, setNavBar }) => {
  useEffect(() => {
    setNavBar([0, 1, 0, 0, 0, 0]);
  }, []);
  return (
    <section id="learn" className="flex-col home pb-10 pt-56">
      <div className="flex flex-col justify-center items-center mb-40 mt-40">

        <div className="flex flex-col md:flex-row w-full md:w-5/6 p-8 md:p-0">

          <div className="flex flex-col w-full md:w-1/2">
            <h1 className="text-[#002159] text-3xl font-semibold pb-4">
            Crypto & NFT Learning Centre
            </h1>
            <p className="text-md text-gray-600">
            New to MyBricks? Get to know the fundamentals of the MyBricks ecosystem with our beginner guides and practical tips on everything property investing, cryptocurrency & NFTs.
            </p>
          </div>

          <div className="md:ml-48 w-full md:w-1/2 flex flex-row justify-center md:justify-start items-center md:items-start pt-4 md:pt-0">
            <a className="w-1/2" href="https://docs.mybricksfinance.com/knowledge-base/learning-resources/amas" target="_blank">
              <div className="w-full md:w-1/3 h-[110px] pl-4">
                <img className="h-[105px]" src="https://mybricksfinance.com/assets/images/ama_videos.svg"></img>
              </div>
              <h1 className="text-lg text-[#002159]">AMA Videos <span className="text-2xl ">➔</span></h1>
            </a>
            <a className="w-1/2" href="https://docs.mybricksfinance.com/knowledge-base/the-bricks-token/tokenomics" target="_blank">
              <div className="w-full md:w-1/3 h-[110px] pl-4">
                <img className="h-[100px]" src="https://mybricksfinance.com/assets/images/brick_playlist.svg"></img>
              </div>
              <h1 className="text-lg text-[#002159]">BRICKS Basics <span className="text-2xl">➔</span></h1>
            </a>
          </div>

        </div>

        <div className="flex flex-col md:flex-row w-full md:w-5/6 p-8 md:p-0 space-y-4 md:space-y-0">

          <div className="w-full md:w-1/2 flex flex-col justify-start items-center md:items-start space-y-2 md:space-y-0">
            <div className="w-full md:w-1/2 pb-4">
              <video className="rounded-xl pt-4" controls poster="https://devmybricks.s3.eu-west-2.amazonaws.com/62096e38cd9093001ad95fb4.jpeg" src="https://devmybricks.s3.eu-west-2.amazonaws.com/62096e67cd9093001ad95fb8.mp4"></video>
            </div>
            <h2 className="text-lg text-gray-600 font-semibold">MyBricks Wallet</h2>
            <h1 className="text-2xl text-[#002159] font-semibold" >How to create your MyBricks Wallet</h1>
            <p className="text-sm md:w-[65%]">Learn everything you need to know about the MyBricks Wallet. The MyBricks Wallet will be launched once FCA authorisation is obtained.</p>

          </div>
        
          <div className="w-full md:w-1/2 flex flex-col justify-start items-center md:items-start space-y-2 md:space-y-0">
              <div className="w-full md:w-1/2 pb-4">
              <video className="rounded-xl pt-4" controls poster="https://devmybricks.s3.eu-west-2.amazonaws.com/62096ebf7c5f480014f8fc61.jpeg" src="https://devmybricks.s3.eu-west-2.amazonaws.com/62096ecc7c5f480014f8fc63.mp4"></video>
              </div>
              <h2 className="text-lg text-gray-600 font-semibold">What is BNB?</h2>
              <h1 className="text-2xl text-[#002159] font-semibold" >What is BNB and why do you need it?</h1>
              <p className="text-sm md:w-[65%]">BNB is a fundamental part of the MyBricks ecosystem. Find out what it is and why we use it here at MyBricks.</p>

          </div>

        </div>

        <div className="flex justify-center items-center w-[75%] h-[40%] mt-20">

        <OwlCarousel items={4}
          className="owl-theme mt-4 pl-4 space-x-10 w-full"  
          loop  
          animateOut={true}
          nav  
          center={true}
          margin={16}
          autoplay
          autoplaySpeed={12}
          responsiveRefreshRate={100} >  
          <a href="https://www.youtube.com/watch?v=JuSeAwGPFCw&t" target="_blank" ><img  className="img rounded-xl scale-[65%] hover:scale-[70%] duration-200" src= 'https://devmybricks.s3.eu-west-2.amazonaws.com/620a6af477e8990015a3d825.png'/>
            <h2 className="text-sm md:text-lg">Article</h2>
            <h1 className="text-xs md:text-2xl font-semibold text-[#002159] w-[70%] hover:text-[#ff675c] duration-200">How to Keep Your Crypto Wallet Safe</h1>
          </a>  
          <a href="https://www.youtube.com/watch?v=v98KDmhYq5E&t " target="_blank"><img  className="img rounded-xl scale-[65%] hover:scale-[70%] duration-200" src= 'https://devmybricks.s3.eu-west-2.amazonaws.com/620a6aef583b4800149e258a.png'/>
            <h2 className="text-sm md:text-lg">Article</h2>
            <h1 className="text-xs md:text-2xl font-semibold text-[#002159] w-[70%] hover:text-[#ff675c] duration-200">25 Crypto Terms You Need to Know</h1>
          </a>  
          <a href="https://mybricksfinance.medium.com/what-are-nfts-a-complete-beginners-guide-to-non-fungible-tokens-84ae547802a1" target="_blank"><img  className="img rounded-xl scale-[65%] hover:scale-[70%] duration-200" src= 'https://devmybricks.s3.eu-west-2.amazonaws.com/620a6aea583b4800149e2588.png'/>
            <h2 className="text-sm md:text-lg">Article</h2>
            <h1 className="text-xs md:text-2xl font-semibold text-[#002159] w-[70%] hover:text-[#ff675c] duration-200">Beginners Guide to NFTs</h1>
          </a>  
          <a href="https://mybricksfinance.medium.com/what-is-cryptocurrency-a-complete-beginners-guide-to-crypto-cryptocurrencies-730e754dcbfa" target="_blank"><img  className="img rounded-xl scale-[65%] hover:scale-[70%] duration-200" src= 'https://devmybricks.s3.eu-west-2.amazonaws.com/620a6ae4583b4800149e2587.png'/>
            <h2 className="text-sm md:text-lg">Article</h2>
            <h1 className="text-xs md:text-2xl font-semibold text-[#002159] w-[70%] hover:text-[#ff675c] duration-200">Beginners Guide to Crypto</h1>
          </a>  

          </OwlCarousel>  
        </div>

      </div>
    </section>
    // <div id="learn" >

  );
};

export default Learn;
