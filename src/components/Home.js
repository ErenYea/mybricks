import React, { useState, useEffect } from "react";
import TravelDetailsView from "./LineChart.js";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Home = ({ navBar, setNavBar }) => {

  const [click, setClick] = useState(true);

  const [dataLine, setdataLine] = useState([
    4.5, 5, 6, 5, 7, 5.8, 5, 6, 5, 6, 4.8, 4.4,
  ]);

  const [itemsToShow, setItemsToShow] = useState(1);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setItemsToShow(2);
      } else {
        setItemsToShow(1);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setNavBar([1, 0, 0, 0, 0, 0]);
  }, []);
  return (
    <div id="home" className="w-screen">

      <div className="flex-col flex justify-center items-center home w-full pt-40 pb-20 px-3 lg:px-4">
        <div className="max-w-7xl flex items-center justify-center ">

          <div className="flex justify-center md:justify-between items-center w-full">
            <div className="w-full h-fit flex flex-col md:flex-row items-start lg:items-center lg:space-x-10 space-y-10 lg:space-y-0">

              <div className="w-full md:w-1/2 flex flex-col text-start">
                <div className="mb-4">
                  <span className="text-2xl lg:text-4xl font-[700] text-[#002159]">
                    ROCKS - a new era of ownership accessible for everyone
                  </span>
                </div>
                <p className="lg:text-lg text-sm mb-8 text-gray-600 w-full xl:w-11/12">
                  For the first time, investors worldwide can invest in the
                  property market through NFT-based Timeshare Ownership, powered
                  by the Binance Smart Chain (BSC) network.
                </p>
                <p className="w-full lg:text-base text-sm mb-4 text-gray-600">
                  ROCKS Contract Address: <br />
                  <span className="underline max-w-full">
                    {" "}
                    0xc2F121d1a0B2d2bEAd8f6C5d274E568b868d4913
                  </span>
                </p>
                <p className="w-full lg:text-base text-sm mb-4 text-gray-600">
                  MyUSD Contract Address: <br />
                  <span className="underline max-w-full">
                    {" "}
                    0xcf110164BF0e3Ed7859a6750b3326B861AEE028E
                  </span>
                </p>
              </div>

              <div className="w-full md:w-1/2 h-full flex flex-col items-center lg:justify-start">
                <div className="scale-[100%] xl:scale-[160%] xl:mt-20 w-[367px] h-[250px]">
                  <video
                    className="rounded-lg absolute z-40"
                    poster="https://drive.google.com/uc?export=view&id=1QlRFwpeS_ifLbeqjTILOYsm0mkKPii16"
                    preload="auto"
                    controls
                    crossOrigin
                    src="video.mp4"
                  />

                  <div className="ml-6 -mt-[48%] rounded-lg w-[77.5%] absolute z-20 vidBg"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mr-auto ml-auto bg-white w-full lg:w-1/2 px-6 lg:px-1 pb-32 pt-16">
        <h2 className="text-[#002159] text-2xl lg:text-4xl mt-16 font-bold w-full text-center p-2 mb-4">
          We're building a property investment platform with a difference
        </h2>
        <p className="text-center text-gray-600 text-sm lg:text-lg w-full">
          Bringing property Timeshare Ownership to the blockchain via an
          incredibly simple and easy to use platform.
        </p>
      </div>

      <div className="flex-col flex home w-full pt-20 pb-20 px-1 lg:px-4">
        <div className="flex flex-col justify-center items-center mb-12">
          <div className="bg-white w-full lg:w-[55%] border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 flex flex-col items-center justify-center">
            <h2 className="text-[#002159] text-4xl font-bold w-full text-center p-4 mb-4">
              Track Record
            </h2>
            <div class="inline-flex rounded-md shadow-sm" role="group">
              <button
                id="clicked"
                onClick={() =>{
                  setClick(true)
                  setdataLine([
                    4.5, 5.10, 6.15, 5.55, 7.20, 5.8, 5.40, 6.25, 5.10, 6.10, 4.8, 4.4,
                  ])}
                }
                type="button"
                className={
                  click?"px-4 py-2 text-sm font-medium bg-white border-b  border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 z-10 ring-2 ring-blue-700 text-blue-700 dark:text-whitedark:ring-blue-500 ":"px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700"}
                >
                2022
              </button>
              <button
                onClick={() =>{ 
                  setClick(false)
                  setdataLine([5.65, 5.2, 5.1])}}
                type="button"
                className={
                  click?"px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700  dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white":"px-4 py-2 text-sm font-medium bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 ring-2 ring-blue-700 text-blue-700"}
                >
                2023
              </button>
            </div>
            <TravelDetailsView props={dataLine} className="w-full" />
          </div>
        </div>
      </div>

      <div className="flex-col flex home w-full pt-20 mt-20 pb-6 md:pb-20 px-0 xl:px-28 2xl:px-80">
        <div className="flex justify-center items-center">
          <div className="w-full h-fit flex flex-col-reverse md:flex-row items-center lg:space-x-10">
            <div className="w-full md:w-1/2 flex flex-col items-center xl:items-start text-center md:text-left px-4 justify-center lg:justify-end">
              <div className="mb-2">
                <span className="text-lg md:text-3xl 2xl:text-4xl font-bold text-[#002159]">
                  Democratising the Airbnb investing experience
                </span>
              </div>
              <p className="text-sm md:text-lg mb-2 text-gray-600 mt-0 md:mt-6 px-1 md:px-0">
                Once you become a MyBricks 2.0 (ROCKS) NFT holder, you are now
                part of a very select group of investors with some pretty
                amazing perks. These include discounted stays in any property in
                our portfolio, returns of up to 60% APR through our protocol, no
                locking period, the option to exit your investment by selling
                your ROCKS in the open market, and many more features, which are
                outlined in our roadmap.
              </p>
            </div>

            <div className="w-full md:w-1/2 h-full flex flex-col items-start justify-start pb-4 scale-[95%] md:scale-[85%]">
              <img src="https://mybricksfinance.com/assets/images/guranteed_ownership.svg"></img>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-col flex pt-4 md:pt-20 md:mt-20 md:pb-20 px-0.5 sm:px-10 xl:px-28 2xl:px-80">
        <div className="flex justify-center items-center">
          <div className="w-full h-fit flex flex-col md:flex-row items-center lg:space-x-12">
            <div className="w-full h-full flex flex-col items-start justify-start pb-4 scale-[95%] md:scale-[85%] lg:scale-[100%]">
              <img src="https://mybricksfinance.com/assets/images/higher_than_rental.svg"></img>
            </div>
            <div className="w-full flex flex-col text-center md:text-left">
              <div className="mb-2">
                <span className="text-lg md:text-3xl 2xl:text-4xl font-bold text-[#002159]">
                  Higher than average rental yield
                </span>
              </div>
              <p className="text-sm md:text-lg mb-4 md:text-left md:-ml-4 text-gray-600 px-2 md:px-4 md:mt-4">
                Despite the average rental income for properties in the UK being
                3.63%, MyBricks 2.0 has managed to deliver a remarkable 65%
                return to our investors in 2022. We are determined to maintain
                this level of success and our track record speaks for itself. We
                welcome you to join our community on Telegram and learn more
                about our NFT-based timeshare ownership opportunity.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-col flex home pt-20 lg:mt-20 lg:pb-20 lg:px-10 xl:px-28 2xl:px-80 text-sm lg:text-lg mb-4 text-center md:text-left lg:-ml-4 text-gray-600 px-4 md:mt-4">
        <div className="flex justify-center items-center">
          <div className="w-full h-fit flex flex-col-reverse md:flex-row items-center lg:space-x-10">
            <div className="md:w-1/2 flex flex-col justify-center md:justify-end">
              <div className="mb-2">
                <span className="text-lg md:text-3xl 2xl:text-4xl text-left lg:text-4xl font-bold text-[#002159]">
                  Contract Audit by Cyberscope
                </span>
              </div>
              <p className="text-sm md:text-lg mb-4 text-center md:text-left text-gray-600 px-2 md:px-0 md:mt-4">
                Cyberscope is a top auditing firm in the crypto space for smart
                contract audits, having audited over 1200+ blockchain projects
                and NFTs. Their services are well recognized as one of the
                leading authorities in the industry.
              </p>
            </div>
            <div className="w-1/2 h-fit flex flex-col items-start justify-end pb-4 mb-6 ">
              <div className="w-full h-full flex flex-col items-start justify-start pb-4 scale-[175%] md:scale-[50%] lg:scale-75">
                <img src="https://mybricksfinance.com/assets/images/autonomy_over_investment.svg"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-col flex pt-2 lg:pt-20 pb-8 px-1 xl:px-28 2xl:px-80">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#002159] text-center pb-2">
          ROCKS (NFT)
        </h1>
        <div className="flex justify-center items-center">
          <div className="w-full h-[100%] flex flex-col md:flex-row lg:space-x-10 items-start px-2 text-center lg:text-left mx-4 sm:mx-0">
            <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-start pb-4">
              <div className="h-[260px] flex justify-end items-end">
                <img src="https://mybricksfinance.com/assets/images/idea_flow.svg"></img>
              </div>
              <p className="text-sm lg:text-lg text-left mb-4 text-gray-600 pt-12">
                Complete control of your investment. Download and set up your
                Metamask wallet, connect your wallet to our app and keep track
                of your investment and rewards. Talking about rewards, let's
                compare some performances:
              </p>
              <ul className="text-sm lg:text-lg text-gray-600 text-left font-medium flex flex-col w-11/12 ">
                <li>
                  Average Annual Return on Investment for residential Real
                  Estate in the United States 10.6%
                </li>
                <li>
                  Average Rate of Return for the S&P 500 for the last 10 years
                  16.4%
                </li>
                <li>
                  Average Rate of Return for the Airbrick's Portfolio in 2022 is
                  66.09%
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-end pb-4">
              <div className="h-[260px] flex justify-end items-end">
                <img src="https://mybricksfinance.com/assets/images/discount.svg"></img>
              </div>

              <p className="text-sm lg:text-lg mb-4 text-gray-600 pt-12 text-left">
                We have additional plans to add even more utility to the token
                in the future. These plans include:
              </p>
              <span className="font-bold w-full text-left pb-2">
                2023 Plans:
              </span>
              <ul className="text-sm lg:text-lg text-left text-gray-600 font-medium flex flex-col w-11/12">
                <li>Launch MyBricks 2.0 Dashboard & Referral System</li>
                <li>Add 24 new units to Portfolio</li>
                <li>Expand NFT-based Timeshare Worldwide</li>
                <li>Add Booking System to MyBricks Dashboard</li>
                <li>Access to exclusive Members Club & Restaurants</li>
                <li>Launch NFT Marketplace with Buy Back & Burn program</li>
                <li>Launch MyDebitCard with Airport Lounge Access</li>
              </ul>
              <span className="font-bold w-full text-left pb-2 pt-2">
                2024 Plans:
              </span>
              <ul className="text-sm lg:text-lg text-left text-gray-600 font-medium flex flex-col w-11/12">
                <li>Launch MyMetaverse & NFT Accessories</li>
                <li>Launch MyCasino - Games and Sports Betting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-col flex pt-1 lg:pt-20 pb-1 px-1 xl:px-28 2xl:px-80">
        <h1 className="text-lg lg:text-3xl font-bold text-[#002159] text-center pb-2 lg:pb-10">
          Our Recent Timeshare Portfolio Additions.
        </h1>
        <div className="flex justify-center items-center">
          <div className="w-full h-[100%] flex flex-col xl:flex-row p-4 xl:space-x-10">
            <div className="w-full xl:w-1/2 min-h-full flex flex-col items-center justify-center lg:justify-start pb-4 rounded-xl overflow-hidden shadow-2xl">
              
              <OwlCarousel
                items={itemsToShow}
                className="owl-theme mt-6 md:order-2 md:px-8 lg:px-10"
                loop
                animateOut={true}
                nav
                center={false}
                margin={36}
                stagePadding={32}
                autoplay
                autoplaySpeed={12}
                responsiveRefreshRate={100}
              >
                <div>
                  <img
                    className="img rounded-xl"
                    src="https://a0.muscache.com/im/pictures/miso/Hosting-843446839011977175/original/7a25c84f-4d87-4b0a-9e19-5ee54d66c49c.png"
                  />
                </div>
                <div>
                  <img
                    className="img rounded-xl"
                    src="https://a0.muscache.com/im/pictures/miso/Hosting-843446839011977175/original/e82347cc-b7eb-4792-9f40-8caac430ee63.png"
                  />
                </div>
                <div>
                  <img
                    className="img rounded-xl"
                    src="https://a0.muscache.com/im/pictures/miso/Hosting-843446839011977175/original/ba4f1649-9da3-4f81-a2f4-711a61eb09bf.png"
                  />
                </div>
                <div>
                  <img
                    className="img rounded-xl"
                    src="https://a0.muscache.com/im/pictures/miso/Hosting-843446839011977175/original/c21c8629-79c8-48fb-a7b7-a59a08ebeec6.png"
                  />
                </div>
                <div>
                  <img
                    className="img rounded-xl"
                    src="https://a0.muscache.com/im/pictures/miso/Hosting-843446839011977175/original/3502a0f2-5efd-424b-abaf-d8e750d561cb.png"
                  />
                </div>
                <div>
                  <img
                    className="img rounded-xl"
                    src="https://a0.muscache.com/im/pictures/miso/Hosting-843446839011977175/original/c015e189-ca3a-4ddc-b1a7-2c23e8d95543.png"
                  />
                </div>
              </OwlCarousel>

              <div className="flex flex-row items-start justify-start w-full px-[7.5%] md:order-1 md:mt-6">
                <span className="text-lg md:text-3xl text-left pb-2 pt-2 font-bold text-[#002159]">
                  The Crown Hotel
                </span>
              </div>

              <p className="text-sm md:text-lg text-left pt-2 px-[7.5%] order-3 xl:h-[320px]">
                Discover our charming hotel blocks in Liverpool's heart! Our six
                furnished and fully equipped apartments each have a unique style
                and character, ideal for families or groups of four. With our
                central location, exploring Liverpool's iconic Beatles
                landmarks, museums, and docks has never been easier. Enjoy
                doorstep access to restaurants, shops, and entertainment
                options. Whether you're here for leisure or business, experience
                Liverpool like a true local. Book now for an unforgettable stay!
              </p>

              <a target="_blank" href="https://www.airbnb.co.uk/p/bricks" className="order-4">
                <button className="text-white text-sm airbnbBtn w-[240px] rounded-[8px] h-[45px] mt-4 md:mt-9 mb-8">
                  View on AirBnB
                </button>
              </a>
            </div>

            <div className="w-full xl:w-1/2 h-full flex flex-col items-center justify-center lg:justify-start pb-4 rounded-xl overflow-hidden shadow-2xl mt-10 md:mt-0">
              
              <OwlCarousel
                items={itemsToShow}
                className="owl-theme mt-6 md:order-2 md:px-8 lg:px-10"
                loop
                animateOut={true}
                center={false}
                nav
                margin={36}
                stagePadding={32}
                autoplay
                autoplaySpeed={12}
              >
                <div>
                  <img
                    className="img rounded-xl"
                    src="https://a0.muscache.com/im/pictures/miso/Hosting-730189889692276194/original/a887b1ee-f417-4394-8d34-2834cfccd251.jpeg"
                  />
                </div>
                <div>
                  <img
                    className="img rounded-xl"
                    src="https://a0.muscache.com/im/pictures/miso/Hosting-730189889692276194/original/3b63c3ad-9b0f-4f8d-8956-9c6fa0c72f67.jpeg"
                  />
                </div>
                <div>
                  <img
                    className="img rounded-xl"
                    src="https://a0.muscache.com/im/pictures/miso/Hosting-730189889692276194/original/0411bef5-2e47-4ac2-bf0d-1cd9bcfc4994.jpeg"
                  />
                </div>
                <div>
                  <img
                    className="img rounded-xl"
                    src="https://a0.muscache.com/im/pictures/miso/Hosting-730189889692276194/original/fc84d597-428e-4b16-9029-c3ac257a890d.jpeg"
                  />
                </div>
                <div>
                  <img
                    className="img rounded-xl"
                    src="https://a0.muscache.com/im/pictures/miso/Hosting-730189889692276194/original/bebc174f-162a-4ad2-b6e0-8cfc408e5fe5.jpeg"
                  />
                </div>
                <div>
                  <img
                    className="img rounded-xl"
                    src="https://a0.muscache.com/im/pictures/miso/Hosting-730189889692276194/original/df78d8d0-e580-406b-be57-6e27eb654aa0.jpeg"
                  />
                </div>
              </OwlCarousel>
              <div className="flex flex-row items-start justify-start w-full px-[7.5%] md:order-1">
                <span className="text-lg md:text-3xl text-left pb-2 pt-2 font-bold text-[#002159] md:mt-6">
                  Manchester Comfy City Stay
                </span>
              </div>
              <p className="text-sm md:text-lg text-left pt-2 px-[7.5%] order-3 xl:h-[320px]">
                Experience chic city living in our 1-bed flat located in the
                heart of Manchester. This modern and stylish apartment is
                perfect for solo travelers or couples looking for a comfortable
                and convenient stay. Featuring a comfortable double bed, fully
                equipped kitchen, and tasteful furnishings throughout, this flat
                offers all the amenities you need for a relaxing and enjoyable
                stay. Explore the city's vibrant nightlife, shopping, and dining
                options, all just moments from your doorstep. Book your stay
                today and experience the best of urban living in Manchester.
              </p>
              <a target="_blank" href="https://www.airbnb.co.uk/p/bricks" className="order-4">
                <button className="text-white text-sm airbnbBtn w-[240px] rounded-[8px] h-[45px] mt-4 md:mt-9 mb-8">
                  View on AirBnB
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-col flex pt-10 lg:pt-20 pb-20 home px-1 xl:px-28 2xl:px-80">
        <h1 className="text-xl md:text-3xl xl:text-4xl font-semibold text-[#002159] text-center pb-2 md:px-20 xl:px-0">
          Introducing NFTs, Timeshare Ownership, and a Decentralized Stablecoin.
        </h1>

        <div className="flex justify-center items-start mx-4 sm:mx-0">
          <div className="w-full h-[100%] grid grid-cols-1 md:grid-cols-2 xl:flex xl:space-x-8 space-y-6 lg:space-y-0">
            <div className="xl:w-1/4 flex flex-col items-center justify-center mt-4">
              <img
                className="w-1/4 mb-4 md:mb-0 md:scale-[60%] xl:scale-100"
                src="https://mybricksfinance.com/assets/images/icons/asset_value.svg"
              ></img>
              <h2 className="text-[#002159] text-lg font-semibold ">
                Mint NFTs
              </h2>
              <p className="text-xs text-center px-4">
                Invest in our protocol by buying ROCKS (NFTs). The ROCKS
                represent your portfolio in the Boardroom. You will be asked to
                connect your Metamask wallet so you can approve any action.
              </p>
            </div>
            <div className="xl:w-1/4 flex flex-col items-center justify-center">
              <img
                className="w-1/4 mb-4 md:mb-0 md:scale-[60%] xl:scale-100"
                src="https://mybricksfinance.com/assets/images/icons/stable_yeild.svg"
              ></img>
              <h2 className="text-[#002159] text-lg font-semibold">
                Daily Income
              </h2>
              <p className="text-xs text-center px-4">
                Receive MyUSD rewards every 8 hours. The profits generated are
                beyond any traditional real estate investment, thanks to
                MyBricks 2.0's Protocol.
              </p>
            </div>
            <div className="xl:w-1/4 flex flex-col items-center justify-center">
              <img
                className="w-1/4 mb-4 md:mb-0 md:scale-[60%] xl:scale-100"
                src="https://mybricksfinance.com/assets/images/icons/ownership_perk.svg"
              ></img>
              <h2 className="text-[#002159] text-lg font-semibold ">
                Reinvest
              </h2>
              <p className="text-xs text-center px-4">
                Use your MyUSD rewards and compound your gains by providing
                liquidity in our Liquidity Pool (LP).
              </p>
            </div>
            <div className="xl:w-1/4 flex flex-col items-center justify-center ">
              <img
                className="w-1/4 mb-4 md:mb-0 md:scale-[60%] xl:scale-100"
                src="https://mybricksfinance.com/assets/images/icons/zero_hassle.svg"
              ></img>
              <h2 className="text-[#002159] text-lg font-semibold ">
                Cash out
              </h2>
              <p className="text-xs text-center px-4">
                Convert rewards into the currency of your choice and have it in
                your bank account with only a few clicks.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-col flex pt-20 pb-20 w-full">
        <h1 className="text-2xl lg:text-4xl font-semibold text-[#002159] text-center pb-2">
          Get started in a few minutes
        </h1>
        <div className="flex items-center justify-center w-full pb-12">
          <p className="w-[640px] text-center text-sm lg:text-lg mx-6 lg:mx-0">
            Creating your MyBricks 2.0 account is quick and free. Simply sign up
            below and get access to your dashboard. <br />
            Create your account
          </p>
        </div>

        <div className="flex justify-center items-center w-full px-[10%] lg:px-[21%]">
          <div className="w-full h-[100%] flex justify-center text-center">
            <div className="w-1/3 flex flex-col items-center justify-center ">
              <img
                className="w-[50px] sm:w-[105px] h-[42px] sm:h-[80px] mb-4"
                src="https://mybricksfinance.com/assets/images/create_account.svg"
              ></img>
              <h2 className="text-[#002159] text-xs lg:text-lg font-semibold w-20 sm:w-[232px]">
                Create your account
              </h2>
            </div>

            <div className="w-[165px] h-[1px] mt-12 bg-[#bcccdc]" />

            <div className="w-1/3 flex flex-col items-center justify-center ">
              <img
                className="w-[105px] h-[50px] md:h-[80px] mb-4"
                src="https://mybricksfinance.com/assets/images/buy_bricks.svg"
              ></img>
              <h2 className="text-[#002159] text-xs lg:text-lg font-semibold w-20 sm:w-[232px]">
                Buy ROCKS (NFT)
              </h2>
            </div>

            <div className="w-[165px] h-[1px] mt-12 bg-[#bcccdc]" />

            <div className="w-1/3 flex flex-col items-center justify-center ">
              <img
                className="w-[105px] h-[45px] md:h-[80px] mb-4"
                src="https://mybricksfinance.com/assets/images/participate.svg"
              ></img>
              <h2 className="text-[#002159] text-xs lg:text-lg font-semibold w-24 sm:w-[232px]">
                Join the New World Economy
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;