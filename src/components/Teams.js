import React, { useEffect, useState } from "react";

const Teams = ({ navBar, setNavBar }) => {
  const [select, setSelect] = useState(true);
  useEffect(() => {
    setNavBar([0, 0, 0, 1, 0, 0]);
  }, []);
  return (
    <div id="temas" className="">
      <div className="w-full home lg:pt-56 pt-40 pb-16 text-center mr-auto ml-auto flex flex-col items-center">
        <h1 className="lg:text-4xl  text-xl font-semibold mb-[16px] leading-5 text-[#002159]">
          Introducing our team!
        </h1>
        <p className=" max-w-[720px] leading-5 text-[#486581] lg:text-lg text-sm mb-0 mt-[10px]">
          The team is a diverse group of individuals working together towards a
          common goal. They value open communication, impartiality, and
          data-driven decision-making. They strive for fairness, respect, and
          continuous improvement.
        </p>
      </div>

      <div className="flex flex-col items-center mt-5 mr-auto ml-auto">
        <div className="flex mb-12 justify-center items-center">
          <button
            onClick={() => setSelect(true)}
            className={
              select
                ? " text-[#fff] h-[45px] mr-8 gradiant-button text-sm md:text-md lg:text-md pl-2 pr-2 border-2 border-[#ff996f] rounded-md"
                : "mr-8 border-2 h-[45px] pl-2 pr-2 text-sm md:text-md lg:text-md   border-[#ff996f] text-[#ea4600] rounded-md"
            }
          >
            Founding Team
          </button>
          {/* <button className="mr-8 border-2 h-[45px] pl-2 pr-2  border-[#ff996f] text-[#ea4600] rounded-md">
            Property Development Team
          </button> */}
          <button
            onClick={() => setSelect(false)}
            className={
              select
                ? "mr-8 border-2 h-[45px] pl-2 pr-2 text-sm md:text-md lg:text-md  border-[#ff996f] text-[#ea4600] rounded-md"
                : " text-[#fff] h-[45px] mr-8 gradiant-button pl-2 pr-2 border-2 text-sm md:text-md lg:text-md  border-[#ff996f] rounded-md"
            }
          >
            MyBricks Partners
          </button>
          {/* <button className="mr-8 border-2 h-[45px] pl-2 pr-2  border-[#ff996f] text-[#ea4600] rounded-md">
            Build Team
          </button> */}
        </div>
        {select ? (
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center">
              <h2 className="lg:text-3xl text-lg font-bold text-[#002159] mb-2">
                Founding team
              </h2>
              <p className="lg:text-lg text-sm text-center text-[#486581]">
                The People Behind MyBricks 2.0's Growth We're driven by a
                passion for both technology and real estate
              </p>
            </div>
            <div className="flex flex-wrap justify-center ml-20 mr-20">
              <div className="flex flex-col mb-4 cursor-pointer m-2 lg:m-10 md:m-10 items-center">
                <img
                  src="https://drive.google.com/uc?export=view&id=16VzHduUmuPoiGWj6Ta368f1UMVhSSms5"
                  alt=""
                  className="mb-3 rounded-full sm:w-[160px] sm:h-[160px] lg:w-[160px] lg:h-[160px] w-[100px] h-[100px] object-contain  teamAvatar mx-auto special"
                />
                <h3 className="font-bold md:text-lg lg:text-lg text-sm text-[#002159]">
                  Hugo
                </h3>
                <p className="md:text-lg lg:text-lg text-sm  text-gray-600 mb-0 font-medium ">
                  Co-Founder
                </p>
              </div>
              <div className="flex flex-col mb-4 cursor-pointer m-2 lg:m-10 md:m-10 items-center">
                <img
                  src="https://drive.google.com/uc?export=view&id=17nMsIJPUn9R1uVcPluOh9xr3gcLdzO41"
                  alt=""
                  className="mb-3 rounded-full sm:w-[160px] sm:h-[160px] lg:w-[160px] lg:h-[160px] w-[100px] h-[100px] object-contain teamAvatar mx-auto special"
                />
                <h3 className="font-bold md:text-lg lg:text-lg text-sm text-[#002159]">
                  Chris
                </h3>
                <p className="md:text-lg lg:text-lg text-sm text-gray-600 mb-0 font-medium ">
                  Co-Founder
                </p>
              </div>
              <div className="flex flex-col mb-4 cursor-pointer m-2  lg:m-10 md:m-10 justify-center items-center">
                <img
                  src="https://drive.google.com/uc?export=view&id=1dSg_jxBr0GiLTvNfIGr7dtwWZz6Mkzxm"
                  alt=""
                  className="mb-3 rounded-full sm:w-[160px] sm:h-[160px] lg:w-[160px] lg:h-[160px] w-[100px] h-[100px]  object-contain teamAvatar mx-auto special"
                />
                <h3 className="font-bold md:text-lg lg:text-lg text-sm text-[#002159]">
                  Valeria
                </h3>
                <p className="md:text-lg lg:text-lg text-sm text-gray-600 mb-0 font-medium ">
                  General Manager
                </p>
              </div>

              <div className="flex flex-col mb-4 cursor-pointer  m-2 lg:m-10 md:m-10 items-center">
                <img
                  src="https://drive.google.com/uc?export=view&id=1VJn7wvNWfnnL0Z7AxsoxmtRvQgyo-yL6"
                  alt=""
                  className="mb-3 rounded-full sm:w-[160px] sm:h-[160px] lg:w-[160px] lg:h-[160px] w-[100px] h-[100px]  object-contain teamAvatar mx-auto special"
                />
                <h3 className="font-bold md:text-lg lg:text-lg text-sm text-[#002159]">
                  Ismar
                </h3>
                <p className="md:text-lg lg:text-lg text-sm text-gray-600 mb-0 font-medium ">
                  Advisor
                </p>
              </div>
              <div className="flex flex-col mb-4 cursor-pointer m-2 lg:m-10 md:m-10 items-center">
                <img
                  src="https://drive.google.com/uc?export=view&id=1-WluSvoGm995DT_LtBIRp1sE6Un9g7mC"
                  alt=""
                  className="mb-3 rounded-full sm:w-[160px] sm:h-[160px] lg:w-[160px] lg:h-[160px] w-[100px] h-[100px]  object-contain teamAvatar mx-auto special"
                />
                <h3 className="font-bold md:text-lg lg:text-lg text-sm text-[#002159]">
                  Neranjan Chameera
                </h3>
                <p className="md:text-lg lg:text-lg text-sm text-gray-600 mb-0 font-medium ">
                  NFT Artist
                </p>
              </div>
              <div className="flex flex-col mb-4 cursor-pointer m-2 lg:m-10 md:m-10 items-center">
                <img
                  src="https://drive.google.com/uc?export=view&id=1-W02XYHiJj6lFJrr6O-fT2XjJ6DRX1ta"
                  alt=""
                  className="mb-3 rounded-full sm:w-[160px] sm:h-[160px] lg:w-[160px] lg:h-[160px] w-[100px] h-[100px]  object-contain teamAvatar mx-auto special"
                />
                <h3 className="font-bold md:text-lg lg:text-lg text-sm text-[#002159]">
                  Frederik Lund
                </h3>
                <p className="md:text-lg lg:text-lg text-sm text-gray-600 mb-0 font-medium ">
                  Legal Adviser
                </p>
              </div>
              <div className="flex flex-col mb-4 cursor-pointer  m-2 lg:m-10 md:m-10 items-center">
                <img
                  src="https://drive.google.com/uc?export=view&id=17XeDf614w3SnUFscgA514S_1ce2dWZBq"
                  alt=""
                  className="mb-3 rounded-full sm:w-[160px] sm:h-[160px] lg:w-[160px] lg:h-[160px] w-[100px] h-[100px]  object-contain teamAvatar mx-auto special"
                />
                <h3 className="font-bold md:text-lg lg:text-lg text-sm text-[#002159]">
                  Abdulah
                </h3>
                <p className="md:text-lg lg:text-lg text-sm text-gray-600 mb-0 font-medium ">
                  Web Developer
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center text-center px-0 mx-auto max-w-[700px]">
              <h2 className="lg:text-3xl text-lg font-bold text-[#002159] mb-2">
                MyBricks Partners
              </h2>
              <p className="lg:text-lg max-w-[720px] text-sm text-center text-[#486581]  w-[320px] md:w-full lg:w-full">
                We’re commited to working with long term partners that believe
                in the vision for the MyBricks platform. Our partners are
                carefully selected to not only help with growing the MyBricks
                brand reputation, but to bring their unique set of expertise to
                the project for long term success.
              </p>
            </div>
            <div className="flex flex-wrap justify-center ml-20 mr-20 p-10 w-[200px] md:w-full lg:w-full">
              <div className="flex justify-center lg:p-3 w-full flex-wrap">
                <div className="flex flex-col border rounded-3xl lg:mb-0 md:mb-0 mb-2">
                  <div className=" h-full flex flex-col justify-center items-center mb-4 lg:p-9">
                    <div className="flex mt-7 ">
                      <div className="md:w-[90px] lg:w-[90px] w-[50px]">
                        <img
                          src="https://mybricksfinance.com/assets/images/ta-logo.svg"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="lg:text-xl text-sm font-semibold mb-1 text-[#486581]">
                          Tech Partner
                        </span>
                        <span className="lg:text-2xl text-md font-bold text-[#002159]">
                          Tech Alchemy
                        </span>
                      </div>
                    </div>
                    <div className="flex ">
                      <div className="flex flex-col mb-4 cursor-pointer p-5 m-10 items-center">
                        <img
                          src="https://mybricksfinance.com/assets/images/ta-arjun.jpg"
                          alt=""
                          className="mb-3 rounded-full lg:w-[112px] lg:h-[112px] object-cover teamAvatar mx-auto "
                        />
                        <h3 className="font-bold lg:text-lg text-sm text-[#002159]">
                          Arjun Shankar
                        </h3>
                        <p className="lg:text-lg text-sm text-gray-600 mb-0 font-medium ">
                          Co-Founder
                        </p>
                      </div>
                      <div className="flex flex-col mb-4 cursor-pointer p-5 m-10 items-center">
                        <img
                          src="https://mybricksfinance.com/assets/images/ta-soham.jpg"
                          alt=""
                          className="mb-3 rounded-full lg:w-[112px] lg:h-[112px]  object-cover teamAvatar mx-auto "
                        />
                        <h3 className="font-bold lg:text-lg text-sm text-[#002159]">
                          Soham Trivedi
                        </h3>
                        <p className="lg:text-lg text-sm  text-gray-600 mb-0 font-medium ">
                          Co-Founder
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" flex justify-evenly bg-[#F0F4F8] rounded-b-3xl h-full mt-auto py-3 lg:px-3 flex-wrap text-[#002159] font-semibold lg:text-lg text-sm">
                    <a
                      href="https://www.techalchemy.co/?ref=mybricksfinance.com"
                      target="_blank"
                    >
                      Website
                    </a>
                    <a
                      href="https://www.linkedin.com/company/tech-alchemy-ltd/"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                    <a href="https://dribbble.com/techalchemy" target="_blank">
                      Dribble
                    </a>
                    <a
                      href="https://clutch.co/profile/tech-alchemy"
                      target="_blank"
                    >
                      Review
                    </a>
                  </div>
                </div>
                <div className="flex flex-col  border rounded-3xl ml-3 ">
                  <div className="h-full flex flex-col justify-center items-center mb-6 lg:mb-14 md:mb-14 p-9">
                    <div className="flex mt-7 ">
                      {/* <div className="md:w-[90px] lg:w-[90px] w-[50px]">
                        <img
                          src="https://mybricksfinance.com/assets/images/ta-logo.svg"
                          alt=""
                        />
                      </div> */}
                      <div className="flex flex-col">
                        <span className="lg:text-2xl text-md  font-semibold mb-1 text-[#486581]">
                          Property expert & Influencer
                        </span>
                      </div>
                    </div>
                    <div className="flex ">
                      <div className="flex flex-col mb-4 cursor-pointer p-5 m-10 items-center w-full">
                        <img
                          src="https://mybricksfinance.com/assets/images/avatar-03.jpg"
                          alt=""
                          className="mb-3 rounded-full lg:w-[112px] lg:h-[112px]  object-cover teamAvatar mx-auto "
                        />
                        <h3 className="font-bold lg:text-lg text-sm text-[#002159]">
                          Anna Pearce
                        </h3>
                        <p className="lg:text-lg text-sm  text-gray-600 mb-0 font-medium ">
                          Property Investor and Mentor
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" flex justify-evenly bg-[#F0F4F8] rounded-b-3xl h-full mt-auto py-3 px-3 flex-wrap text-[#002159] font-semibold lg:text-lg text-xs">
                    <a href="https://annapearce.com/" target="_blank">
                      Website
                    </a>
                    <a
                      href="https://open.spotify.com/show/1ZWXvOh8SF1jsC7RpxBkvO"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://www.tiktok.com/@propertyempress?lang=en"
                      target="_blank"
                    >
                      Dribble
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCAG2mX_5CKIIhqo4GZeDNaQ"
                      target="_blank"
                    >
                      Review
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex justify-center h-full flex-wrap lg:p-3 w-full lg:mt-0 mt-2 p-0">
                <div className="flex flex-col border rounded-3xl lg:mb-0 md:mb-0 mb-2">
                  <div className=" h-full flex flex-col justify-center items-center mb-4 p-9">
                    <div className="flex mt-7 flex-col">
                      <div className="flex flex-col">
                        <span className="lg:text-2xl text-sm font-semibold mb-1 text-[#486581] text-center">
                          MoonPay
                        </span>
                      </div>
                      <div className="md:w-[225px] lg:w-[225px] w-[50px] lg:m-6">
                        <img
                          src="https://mybricksfinance.com/assets/images/moonpay.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className=" flex justify-evenly bg-[#F0F4F8] rounded-b-3xl h-full mt-auto py-3 px-3 flex-wrap text-[#002159] font-semibold lg:text-lg text-xs">
                    <a href="https://www.moonpay.com/" target="_blank">
                      Website
                    </a>
                  </div>
                </div>
                <div className="flex flex-col  border rounded-3xl lg:ml-4 ml-2">
                  <div className="h-full flex flex-col justify-center items-center mb-4 p-9">
                    <div className="flex mt-7 flex-col">
                      <div className="flex flex-col">
                        <span className="lg:text-2xl text-sm font-semibold mb-1 text-[#486581] text-center">
                          Persona
                        </span>
                      </div>
                      <div className="md:w-[225px] lg:w-[225px] w-[50px] lg:m-6">
                        <img
                          src="https://mybricksfinance.com/assets/images/persona.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className=" flex justify-evenly bg-[#F0F4F8] rounded-b-3xl h-full mt-auto py-3 px-3 flex-wrap text-[#002159] font-semibold lg:text-lg text-xs">
                    <a href="https://withpersona.com/" target="_blank">
                      Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Teams;
