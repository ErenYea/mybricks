import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import './owl.css';
const Home = ({ navBar, setNavBar }) => {
  useEffect(() => {
    setNavBar([1, 0, 0, 0, 0, 0]);
  }, []);
  return (
    <div id="home" className="">
      <div className="flex-col flex home pt-56">
        <div className="flex justify-center items-center mr-[20rem] ml-[20rem]">
          <div className="max-w-7xl h-fit flex flex-row">
            <div className="w-1/2 flex flex-col">
              <div className="mb-4">
                <span className="text-4xl font-bold text-[#002159] ">
                  Making Property Investing Accessible For Everyone
                </span>
              </div>
              <p className="text-lg mb-8 text-gray-600 w-11/12">
                We’re revolutionising property investment by using blockchain
                technology and NFTs to provide ownership rights to property
                portfolios.
              </p>
              <p className="text-lg mb-4 text-gray-600 ">
                BRICKS Contract Address:{" "}
                <span className="underline">
                  {" "}
                  0x13e1070e3a388e53ec35480ff494538f9ffc5b8d
                </span>
              </p>
            </div>

            <div className="w-1/2 h-full flex flex-col items-start justify-start">
              <div className="scale-[70%] w-9/12 h-64">
                <video
                  className="rounded-lg relative z-40"
                  poster="https://mybricksfinance.com/assets/images/temp.jpg"
                  preload="auto"
                  controls
                  crossOrigin
                  src="video.mp4"
                />

                <div className="ml-6 -mt-[48%] rounded-lg w-full h-full absolute z-20 bg-orange-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mr-auto ml-auto mt-10 bg-white w-full">
        <h2 className="text-[#002159] text-4xl mt-16 font-bold w-1/2 text-center p-2 mb-4">
          We're building a property investment platform with a difference
        </h2>
        <p className="text-center text-gray-600 text-lg w-1/3">
          Bringing property investment to the blockchain via an incredibly
          simple and easy to use platform.
        </p>
      </div>

      <div className="flex-col flex home pt-20 mt-20 pb-20">
        <div className="flex justify-center items-center mr-[20rem] ml-[20rem]">
          <div className="w-11/12 h-fit flex flex-row">
            <div className="w-1/2 flex flex-col justify-end">
              <div className="mb-4">
                <span className="text-4xl font-bold text-[#002159] ">
                  Guaranteed ownership
                </span>
              </div>
              <p className="text-lg mb-4 text-gray-600 ">
                With traditional crowdfunding property investments you never
                know if the project you are funding will come to fruition. With
                MyBricks, we already fully own the properties. This means that
                when you purchase a Portfolio NFT, you can be certain of your
                ownership and can start earning within 30 days.
              </p>
            </div>
            <div className="w-1/2 h-full flex flex-col items-start justify-start pb-4">
              <img src="https://mybricksfinance.com/assets/images/guranteed_ownership.svg"></img>
              {/* <div className="rounded-lg scale-[70%] w-1/2 h-full border-black border-2 z-1"></div>               */}
            </div>
          </div>
        </div>
      </div>

      <div className="flex-col flex pt-20 mt-20 pb-20">
        <div className="flex justify-center items-center mr-[20rem] ml-[20rem]">
          <div className="w-11/12 h-fit flex flex-row space-x-10">
            <div className="w-1/2 h-full flex flex-col items-start justify-start pb-4">
              <img src="https://mybricksfinance.com/assets/images/higher_than_rental.svg"></img>
              {/* <div className="rounded-lg scale-[70%] w-1/2 h-full border-black border-2 z-1"></div>               */}
            </div>
            <div className="w-1/2 flex flex-col justify-end">
              <div className="mb-4">
                <span className="text-4xl font-bold text-[#002159] ">
                  Higher than average rental yield
                </span>
              </div>
              <p className="text-lg mb-4 text-gray-600 ">
                The average rental income for properties in the UK is 3.63%. At
                MyBricks, we're purchasing attractive short term let properties
                that look to generate at least 7% returns for Portfolio NFT
                owners.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-col flex home pt-20 mt-20 pb-20">
        <div className="flex justify-center items-center mr-[20rem] ml-[20rem]">
          <div className="w-11/12 h-fit flex flex-row">
            <div className="w-1/2 flex flex-col justify-end">
              <div className="mb-4">
                <span className="text-4xl font-bold text-[#002159] ">
                  Autonomy over your investments
                </span>
              </div>
              <p className="text-lg mb-4 text-gray-600 ">
                With REITs and bonds you can invest your capital, but in most
                cases you have no say in where that capital goes. With MyBricks,
                you choose what Portfolio NFTs you purchase based on our
                historical data and forecasting.
              </p>
            </div>
            <div className="w-1/2 h-fit flex flex-col items-start justify-end pb-4">
              <div className="w-full flex items-end justify-end">
                <img
                  className=" w-3/4"
                  src="https://mybricksfinance.com/assets/images/autonomy_over_investment.svg"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-col flex pt-20 pb-20">
        <h1 className="text-4xl font-bold text-[#002159] text-center pb-12">
          BRICKS Token
        </h1>
        <div className="flex justify-center items-center mr-[20rem] ml-[20rem]">
          <div className="w-11/12 h-[100%] flex flex-row space-x-10">
            <div className="w-1/2 h-full flex flex-col items-center justify-start pb-4">
              <div className="h-[260px] flex justify-end items-end">
                <img src="https://mybricksfinance.com/assets/images/idea_flow.svg"></img>
              </div>
              <p className="text-lg mb-4 text-gray-600 pt-12">
                The BRICKS utility token is a key part of the MyBricks ecosystem
                and is used to unlock all of the features that are built into
                the MyBricks platform. The tokens need to be held to perform
                multiple functions like:
              </p>
              <ul className="text-lg text-gray-600 font-medium flex flex-col w-11/12 ">
                <li>Accessing your MyBricks Wallet</li>
                <li>Unlocking MyBricks Portfolios</li>
                <li>Accessing exclusive community content</li>
              </ul>
            </div>
            <div className="w-1/2 h-full flex flex-col items-center justify-end pb-4">
              <div className="h-[260px] flex justify-end items-end">
                <img src="https://mybricksfinance.com/assets/images/discount.svg"></img>
              </div>

              <p className="text-lg mb-4 text-gray-600 pt-12">
                We have additional plans to add even more utility to the BRICKS
                token in the future. These plans include using BRICKS tokens to:
              </p>
              <ul className="text-lg text-gray-600 font-medium flex flex-col w-11/12">
                <li>Unlock staking features on the MyBricks platform</li>
                <li>Get discounted night stays at MyBricks properties</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-col flex pt-20 pb-20">
        <h1 className="text-4xl font-bold text-[#002159] text-center pb-12">
          Our Recent Property Purchases
        </h1>
        <div className="flex justify-center items-center mr-[20rem] ml-[20rem]">
          <div className="w-full h-[100%] flex flex-row space-x-10 ">
            <div className="w-1/2 h-full flex flex-col items-center justify-start pb-4 rounded-xl  overflow-hidden shadow-2xl m-2 p-4">
              <div className="flex flex-row items-start justify-start w-full ">
                <span className="text-4xl pl-4 pb-8 font-bold text-[#002159]">
                  MyBricks Callington
                </span>
              </div>
              <OwlCarousel
                items={2}
                className="owl-theme mt-4 pl-4 "
                loop
                animateOut={true}
                nav
                center={true}
                margin={8}
                autoplay
                autoplaySpeed={12}
                responsiveRefreshRate={100}
              >
                <div>
                  <img
                    className="img rounded-xl"
                    src="https://mybricksfinance.com/assets/images/homepage/callington/c4.jpg"
                  />
                </div>
                <div>
                  <img
                    className="img rounded-xl"
                    src="https://mybricksfinance.com/assets/images/homepage/callington/c5.jpg"
                  />
                </div>
                <div>
                  <img
                    className="img rounded-xl"
                    src="https://mybricksfinance.com/assets/images/homepage/callington/c6.jpg"
                  />
                </div>
                <div>
                  <img
                    className="img rounded-xl"
                    src="https://mybricksfinance.com/assets/images/homepage/callington/c1.jpg"
                  />
                </div>
                <div>
                  <img
                    className="img rounded-xl"
                    src="https://mybricksfinance.com/assets/images/homepage/callington/c3.jpg"
                  />
                </div>
                <div>
                  <img
                    className="img rounded-xl"
                    src="https://mybricksfinance.com/assets/images/homepage/callington/c2.jpg"
                  />
                </div>
              </OwlCarousel>
              <p className="text-md pl-4 pt-2">
                Callington is a small beautiful town situated in South East
                Cornwall. Once a busy mining area, Callington's main industries
                are now farming and tourism, making it an ideal short-term
                rental opportunity. Only 6 miles from Tamar Valley AONB (Area of
                outstanding natural beauty), 14 miles north the naval city of
                Plymouth, and a handy base for those tackling Bodmin Moor and
                Dartmoor, Callington has a lot to offer.
              </p>

              <a
                className="w-1/2 h-full"
                target="_blank"
                href="https://www.airbnb.co.uk/rooms/54272872?guests=1&adults=2&s=67&unique_share_id=48045487-53a5-4e32-a3ca-71908a0a51e8&source_impression_id=p3_1648716536_I0xmGl71xz5NQHUw"
              >
                <button className="text-white bg-[#ff6a5a] w-full rounded-lg h-[40px] mt-10">
                  View on AirBnB
                </button>
              </a>
            </div>
            <div className="w-1/2 h-full flex flex-col items-center justify-start pb-4 rounded-xl  overflow-hidden shadow-2xl m-2 p-4">
              <div className="flex flex-row items-start justify-start w-full ">
                <span className="text-4xl pl-4 pb-8 font-bold text-[#002159]">
                  MyBricks Redruth
                </span>
              </div>
              <OwlCarousel
                items={2}
                className="owl-theme mt-4 pl-4"
                loop
                animateOut={true}
                center={true}
                nav
                margin={12}
                autoplay
                autoplaySpeed={12}
              >
                <div>
                  <img
                    className="img rounded-xl"
                    src="https://mybricksfinance.com/assets/images/homepage/redruth/s8.jpg"
                  />
                </div>
                <div>
                  <img
                    className="img rounded-xl"
                    src="https://mybricksfinance.com/assets/images/homepage/redruth/s7.jpg"
                  />
                </div>
                <div>
                  <img
                    className="img rounded-xl"
                    src="https://mybricksfinance.com/assets/images/homepage/redruth/s6.jpg"
                  />
                </div>
                <div>
                  <img
                    className="img rounded-xl"
                    src="https://mybricksfinance.com/assets/images/homepage/redruth/s5.jpg"
                  />
                </div>
                <div>
                  <img
                    className="img rounded-xl"
                    src="https://mybricksfinance.com/assets/images/homepage/redruth/s4.jpg"
                  />
                </div>
                <div>
                  <img
                    className="img rounded-xl"
                    src="https://mybricksfinance.com/assets/images/homepage/redruth/s3.jpg"
                  />
                </div>
              </OwlCarousel>
              <p className="text-md pl-4 pt-2">
                Redruth is a town situated in the heart of Cornwall. Cornwall is
                a hugely popular staycation destination in the UK with a variety
                of activities and destinations to visit. Redruth sits in a prime
                location for those wanting a central base in Cornwall allowing
                them to travel south and visit the most southernly point of
                Cornwall, Lizard point, in just 40 minutes or head north to
                Padstow and be there in only 45 minutes.
              </p>
              <a
                className="w-1/2 h-full"
                target="_blank"
                href="https://www.airbnb.co.uk/rooms/619416483981866067"
              >
                <button className="text-white bg-[#ff6a5a] w-full rounded-lg h-[40px] mt-10">
                  View on AirBnB
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="learn"></div>

      <div className="flex-col flex pt-10 pb-20 home">
        <h1 className="text-4xl font-semibold text-[#002159] text-center  pb-2">
          All the benefit with zero hassle
        </h1>
        <div className="flex items-center justify-center w-full pb-12">
          <p className="w-2/5 text-center text-lg">
            By owning portfolio NFT contracts you will legally own the rights to
            the value and yield that the portfolio generates without all the
            paperwork and headaches involved with having your name on the deeds.
          </p>
        </div>

        <div className="flex justify-center items-center mr-[20rem] ml-[20rem]">
          <div className="w-full h-[100%] flex flex-row ">
            <div className="w-1/4  flex flex-col items-center justify-center ">
              <img
                className="w-1/4 mb-4"
                src="https://mybricksfinance.com/assets/images/icons/asset_value.svg"
              ></img>
              <h2 className="text-[#002159] text-lg font-semibold ">
                Asset appreciation value
              </h2>
              <p className="text-sm text-center">
                The value of your NFTs increase as the market value of the
                assets increase.
              </p>
            </div>
            <div className="w-1/4  flex flex-col items-center justify-center ">
              <img
                className="w-1/4 mb-4"
                src="https://mybricksfinance.com/assets/images/icons/stable_yeild.svg"
              ></img>
              <h2 className="text-[#002159] text-lg font-semibold ">
                Stable yield generation
              </h2>
              <p className="text-sm text-center">
                Generate passive income with rental yield paid to all wallets
                that hold NFTs.
              </p>
            </div>
            <div className="w-1/4  flex flex-col items-center justify-center ">
              <img
                className="w-1/4 mb-4"
                src="https://mybricksfinance.com/assets/images/icons/ownership_perk.svg"
              ></img>
              <h2 className="text-[#002159] text-lg font-semibold ">
                Ownership perks
              </h2>
              <p className="text-sm text-center">
                Get additional perks like early access to portfolio launches and
                discounted nights accommodation.
              </p>
            </div>
            <div className="w-1/4  flex flex-col items-center justify-center ">
              <img
                className="w-1/4 mb-4"
                src="https://mybricksfinance.com/assets/images/icons/zero_hassle.svg"
              ></img>
              <h2 className="text-[#002159] text-lg font-semibold ">
                Zero hassle and minimal fees
              </h2>
              <p className="text-sm text-center">
                Avoid all the headaches associated with ownership and gain all
                the value after our management fees.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-col flex pt-20 pb-20">
        <h1 className="text-4xl font-semibold text-[#002159] text-center  pb-2">
          Get started in a few minutes
        </h1>
        <div className="flex items-center justify-center w-full pb-12">
          <p className="w-[640px] text-center text-lg">
            Creating your MyBricks account is quick and free. Simply sign up
            below and get access to your MyBricks wallet address.
          </p>
        </div>

        <div className="flex justify-center items-center w-full px-[21%]">
          <div className="w-full h-[100%] flex justify-center text-center">
            <div className="w-1/3 flex flex-col items-center justify-center ">
              <img
                className="w-[50px] sm:w-[105px] h-[42px] sm:h-[80px] mb-4"
                src="https://mybricksfinance.com/assets/images/create_account.svg"
              ></img>
              <h2 className="text-[#002159] text-lg font-semibold ">
                Create your account
              </h2>
            </div>

            <div className="w-[165px] h-[1px] mt-12 bg-[#bcccdc]" />

            <div className="w-1/3 flex flex-col items-center justify-center ">
              <img
                className="w-[105px] h-[80px] mb-4"
                src="https://mybricksfinance.com/assets/images/buy_bricks.svg"
              ></img>
              <h2 className="text-[#002159] text-lg font-semibold ">
                Buy BRICKS tokens
              </h2>
            </div>

            <div className="w-[165px] h-[1px] mt-12 bg-[#bcccdc]" />

            <div className="w-1/3 flex flex-col items-center justify-center ">
              <img
                className="w-[105px] h-[80px] mb-4"
                src="https://mybricksfinance.com/assets/images/participate.svg"
              ></img>
              <h2 className="text-[#002159] text-lg font-semibold">
                Participate in NFT launches
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
