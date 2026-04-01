import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import profilePhoto from "../assets/mylogo.png";

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const Navbar = (props) => {
  const [hireMeClick, setHireMeClick] = useState(false);
  const [hamBurgerClick, setHamBurgerClick] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    const { name, email, title, message } = formData;

    if (!name || !email || !title || !message) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { name, email, title, message },
        PUBLIC_KEY,
      );
      setStatus("success");
      setFormData({ name: "", email: "", title: "", message: "" });
      setTimeout(() => {
        setStatus("idle");
        setHireMeClick(false);
        props.onHireMeClick(hireMeClick);
      }, 2500);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="top-0 z-50 w-full bg-[#212428] navbar navbar-shadow flex justify-center items-center fixed">
      <div
        className="flex items-center bg-[#212428] max-w-7xl w-full justify-between text-stone-100 h-24 max-[450px]:h-[70px]"
        id="navbar"
      >
        <a href="/" className="nav-first-wrapper pl-3 flex items-center">
          <img
            src={profilePhoto}
            alt="profile-img"
            className="w-10"
            style={{ minWidth: "45px" }}
          />
          {/* <h4 className="sm:text-lg text-md pl-2 uppercase tracking-wider font-normal font-primary">
            LAWAL
          </h4> */}
        </a>

        <div className="nav-second-wrapper" style={{ width: "60%" }}>
          <ul className="hidden xl:flex nav-second-wrapper justify-evenly font-secondary text-sm text-gray-300">
            {[
              "home",
              "features",
              "resume",
              "portfolio",
              "testimonial",
              "service",
            ].map((section) => (
              <li key={section}>
                <Link
                  activeClass="active"
                  to={section}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {section.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-third-wrapper xl:w-1/6 fl w-96 flex justify-around items-center">
          <button
            onClick={() => {
              setHireMeClick(true);
              setStatus("idle");
              props.onHireMeClick(hireMeClick);
            }}
            className="red-text transition-all duration-500 sm:w-32 hover:mb-2 w-22 max-[450px]:w-[84px] max-[450px]:text-[8px] max-[450px]:px-0 max-[450px]:font-light max-[450px]:py-2 rounded-md text-[10px] py-3 px-2 sm:px-0 btn-shadow sm:font-medium font-primary sm:text-sm tracking-wider"
          >
            CONTACT ME
          </button>

          {/* Contact Form Modal */}
          <div
            className={`${
              hireMeClick ? "opacity-100" : "invisible opacity-0"
            } hireme z-50 max-w-6xl xl:m-auto transition-all flex ease-out duration-200 flex-col justify-center items-center rounded-2xl fixed top-6 bottom-4 sm:top-3 sm:bottom-3 btn-shadow`}
            style={{ backgroundColor: "#212428" }}
          >
            <div className="w-full flex justify-end pr-5 text-xl">
              <button
                className="sm:w-8 sm:h-8 w-7 h-7 sm:text-md text-sm top-3 right-3 flex justify-center absolute items-center rounded-full cursor-pointer"
                onClick={() => {
                  setHireMeClick(false);
                  setStatus("idle");
                  props.onHireMeClick(hireMeClick);
                }}
              >
                <FaTimes className="red-text" />
              </button>
            </div>

            <div className="flex flex-col justify-evenly font-secondary items-center w-full sm:px-12 sm:pt-4 sm:pb-6 px-6 py-3">
              <label
                className="flex flex-col w-full sm:text-sm text-xs text-gray-300"
                htmlFor="name"
              >
                Full Name
                <input
                  className="text-gray-200 focus:outline-none capitalize pl-3 mt-2 bg-transparent w-full h-10 rounded-lg border border-gray-600 border-solid"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="eg: John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  style={{ backgroundColor: "#212428" }}
                />
              </label>

              <label
                className="sm:mt-4 mt-3 flex flex-col w-full sm:text-sm text-xs text-gray-300"
                htmlFor="email"
              >
                Email
                <input
                  className="text-gray-200 focus:outline-none pl-3 mt-2 bg-transparent w-full h-10 rounded-lg border border-gray-600 border-solid"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Eg: johndoe@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  style={{ backgroundColor: "#212428" }}
                />
              </label>

              <label
                className="text-gray-300 sm:mt-4 mt-3 flex flex-col w-full sm:text-sm text-xs"
                htmlFor="title"
              >
                Subject
                <input
                  placeholder="eg: Website Development"
                  className="text-gray-200 focus:outline-none capitalize pl-2 mt-3 bg-transparent w-full h-10 rounded-lg border border-gray-600 border-solid"
                  id="title"
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleChange}
                  style={{ backgroundColor: "#212428" }}
                />
              </label>

              <label
                className="sm:mt-4 mt-3 flex flex-col w-full font-secondary sm:text-sm text-xs text-gray-300"
                htmlFor="message"
              >
                What Service Do You Want?
                <textarea
                  className="text-gray-200 focus:outline-none capitalize pl-3 pt-3 mt-2 bg-transparent w-full rounded-lg border border-gray-600 border-solid"
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="eg: I want you to develop a tinder like website for dogs and cats which should be..."
                  value={formData.message}
                  onChange={handleChange}
                  style={{ backgroundColor: "#212428" }}
                ></textarea>
              </label>

              {/* Status messages */}
              {status === "success" && (
                <p className="mt-3 text-green-400 text-xs sm:text-sm font-medium">
                  ✅ Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="mt-3 text-red-400 text-xs sm:text-sm font-medium">
                  ❌ Please fill in all fields and try again.
                </p>
              )}
            </div>

            <div className="flex justify-end items-end w-full absolute bottom-0 pr-6 pb-3 pt-2">
              <button
                onClick={handleSubmit}
                disabled={status === "loading"}
                className="text-red-600 sm:w-28 w-20 rounded-md text-xs py-2 shadow-lg bg-white ml-5 mr-3 sm:ml-8 sm:mr-6 sm:font-semibold sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "SENDING..." : "SUBMIT"}
              </button>
            </div>
          </div>

          <button
            className="red-text xl:hidden m-3 p-3 max-[450px]:p-2 text-lg rounded-full btn-shadow"
            onClick={() => setHamBurgerClick(true)}
          >
            <GiHamburgerMenu className="max-[450px]:text-sm" />
          </button>

          {/* Small screen navbar */}
          <div
            className={`${
              hamBurgerClick ? "opacity-100 " : "opacity-0 invisible"
            } fixed flex overflow-y-auto flex-col top-0 bottom-0 left-0 py-6 px-6 transition-all duration-500 ease-out mr-10`}
            style={{ backgroundColor: "#191b1e", width: "370px" }}
          >
            <div className="max-[350px]:w-5/6 w-full">
              <div className="flex justify-between items-center">
                <a
                  href="/"
                  className="nav-first-wrapper pl-3 flex items-center"
                >
                  <img
                    src={profilePhoto}
                    alt="profile-img"
                    className="w-10"
                    style={{ minWidth: "70px" }}
                  />
                  {/* <h4 className="sm:text-lg text-md pl-2 uppercase tracking-wider font-normal font-primary">
                    LAWAL
                  </h4> */}
                </a>
                <button
                  className="w-12 h-12 flex justify-center items-center rounded-full"
                  onClick={() => setHamBurgerClick(false)}
                >
                  <FaTimes className="red-text" />
                </button>
              </div>
            </div>

            <div className="border-t text-gray-300 border-gray-700 border-b py-1 pb-20">
              <ul className="flex flex-col justify-evenly h-72 font-semibold font-secondary text-sm text-gray-300">
                {[
                  "home",
                  "features",
                  "resume",
                  "portfolio",
                  "testimonial",
                  "service",
                ].map((section) => (
                  <li key={section}>
                    <Link
                      activeClass="active"
                      to={section}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onClick={() => setHamBurgerClick(false)}
                    >
                      {section.toUpperCase()}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h6 className="uppercase tracking-wider text-sm text-black pt-6">
                FIND ME WITH
              </h6>
              <div className="flex w-56 justify-evenly mt-7">
                <a
                  href="https://github.com/Ay-shizzi"
                  className="w-14 h-14 rounded-md text-xl flex justify-center items-center"
                  style={{ backgroundColor: "#212428" }}
                >
                  <FiGithub />
                </a>
                <a
                  href="https://twitter.com/ay_shizzi"
                  className="w-14 h-14 rounded-md text-xl flex justify-center items-center"
                  style={{ backgroundColor: "#212428" }}
                >
                  <FiTwitter />
                </a>
                <a
                  href="https://linkedin.com/in/abdullahi-lawal-5032ba1b3"
                  style={{ backgroundColor: "#212428" }}
                  className="w-14 h-14 rounded-md text-xl flex justify-center items-center"
                >
                  <FiLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
