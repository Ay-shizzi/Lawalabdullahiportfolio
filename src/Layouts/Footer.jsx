import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="max-w-7xl xl:m-auto h-full">
      <div className="flex justify-center sm:flex-row flex-col w-full">
        <div className="max-[450px]:pl-3 flex sm:flex-col max-[450px]:flex-col max-[500px]:items-start flex-row justify-evenly sm:justify-center sm:items-start items-center w-full sm:w-1/4 mb-9">
          <div className="flex justify-evenly sm:w-full w-3/12 max-[500px]:w-2/5 mt-7 text-gray-400">
            <a
              href="https://github.com/Ay-shizzi"
              target="_blank"
              rel="noopener noreferrer"
              className="md:mr-5 mr-3 inner-shadow-effect max-[450px]:w-12 max-[450px]:h-12 max-[450px]:text-xl lg:w-14 lg:h-14 md:w-12 md:h-12 h-10 w-10 text-xl rounded-md bg-[#333] shadow-lg hover:bg-white hover:text-[#333] md:text-2xl flex justify-center items-center"
            >
              <FiGithub />
            </a>
            <a
              href="https://twitter.com/ay_shizzi"
              target="_blank"
              rel="noopener noreferrer"
              className="max-[450px]:w-12 max-[450px]:h-12 max-[450px]:text-xl md:mr-5 mr-3 lg:w-14 lg:h-14 max-[500px]:text-lg md:w-12 md:h-12 h-10 w-10 text-xl rounded-md bg-[#333] shadow-lg hover:bg-white hover:text-[#333] md:text-2xl flex justify-center items-center"
            >
              <FiTwitter />
            </a>
            <a
              href="https://linkedin.com/in/abdullahi-lawal-5032ba1b3</div>"
              target="_blank"
              rel="noopener noreferrer"
              className="max-[450px]:w-12 max-[450px]:h-12 max-[450px]:text-xl lg:w-14 lg:h-14 md:w-12 md:h-12 max-[500px]:text-lg h-10 w-10 text-xl rounded-md bg-[#333] shadow-lg hover:bg-white hover:text-[#333] md:text-2xl flex justify-center items-center"
            >
              <FiLinkedin />
            </a>
          </div>
        </div>
        <div className="flex justify-evenly max-[450px]:flex-col  max-[500px]:pl-4 sm:w-9/12 w-full"></div>
      </div>
    </div>
  );
};

export default Footer;
