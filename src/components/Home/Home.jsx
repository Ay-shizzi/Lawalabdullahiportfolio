import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
// import { Link } from "react-router-dom";
import heroImg from "../../assets/heroimg.png";

const Home = (props) => {
  const tools = [
    {
      name: "React",
      src: "https://icon.icepanel.io/Technology/svg/React.svg",
      width: "22px",
    },
    {
      name: "Next.js",
      src: "https://icon.icepanel.io/Technology/svg/Next.js.svg",
      width: "22px",
    },
    {
      name: "TypeScript",
      src: "https://icon.icepanel.io/Technology/svg/TypeScript.svg",
      width: "32px",
    },
    {
      name: "WordPress",
      src: "https://icon.icepanel.io/Technology/svg/WordPress.svg",
      width: "22px",
    },
    {
      name: "Webflow",
      src: "https://icon.icepanel.io/Technology/svg/Webflow.svg",
      width: "22px",
    },
  ];
  return (
    <div
      id="home"
      className="max-w-7xl pt-24 max-[450px]:pt-14 xl:m-auto flex flex-col-reverse lg:flex-row font-secondary items-center justify-center h-full mt-24"
    >
      <div className="home-wrapper-1 lg:w-3/5 w-full p-5 xl:pt-20">
        <div className="flex flex-col justify-center">
          <h6 className="text-[#333] mb-6 tracking-widest lg:text-md text-xs">
            WELCOME TO MY WORLD
          </h6>
          <h1 className="text-black lg:text-6xl text-4xl font-bold mb-3">
            Hi, I’m{" "}
            <span style={{ color: "#ff014f" }} className="text-[#fe3231]">
              {props.name}
            </span>
          </h1>
          <h2 className="lg:text-5xl text-3xl text-black font-semibold capitalize">
            {props.profession}
          </h2>
          <p className="w-full text-[#333] mt-8 lg:text-lg text-md leading-8 lg:leading-9">
            {props.aboutMe}
          </p>
        </div>

        <div className="pl-3 md:flex-row flex flex-col md:items-end items-center justify-evenly text-gray-300 font-primary h-96 md:h-64 mt-9 md:mt-0">
          <div className="flex flex-col ">
            <p className="text-[#333]">FIND ME WITH</p>
            <div className="flex w-72 justify-evenly mt-7">
              <a
                href={props.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-[#333] hover:bg-white hover:text-[#333] rounded-md shadow-lg text-2xl flex justify-center items-center"
              >
                <FiGithub />
              </a>
              <a
                href={props.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-[#333] hover:bg-white hover:text-[#333] rounded-md shadow-lg text-2xl flex justify-center items-center"
              >
                <FiTwitter />
              </a>
              <a
                href={props.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-[#333] hover:bg-white hover:text-[#333] rounded-md shadow-lg text-2xl flex justify-center items-center"
              >
                <FiLinkedin />
              </a>
            </div>
          </div>
          <div>
            <p className="text-[#333]">BEST SKILL ON</p>
            <div className="flex w-72 justify-evenly mt-7">
              {tools.map(({ name, src, width }) => (
                <div key={name} className="relative group">
                  <button className="w-16 h-16 cursor-default rounded-md bg-white shadow-xl text-2xl flex justify-center items-center">
                    <img width={width} src={src} alt={name} />
                  </button>

                  {/* Tooltip */}
                  <div
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 
                      opacity-0 group-hover:opacity-100 
                      transition-opacity duration-200
                      bg-gray-800 text-white text-xs 
                      px-2 py-1 rounded whitespace-nowrap pointer-events-none"
                  >
                    {name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <div className='seperator w-full py-28 flex justify-center items-center'>
          <div className=" w-11/12 border-b  border-black"></div>
        </div> */}
      </div>

      {/* <div className="home-wrapper-2 flex justify-end">
        <div className='btn-shadow flex items-end justify-center w-full lg:w-3/4 ' style={{ height: '33rem' }}>
          <img className='' width={'100%'} src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/banner-01.png" alt="" />
        </div>
      </div> */}

      <div className="sm:px-5 px-7 max-w-2xl lg:max-w-full pb-10 lg:pb-0">
        <img className="w-full lg:max" src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
