import React from "react";
import pic from "../assets/home_logo.avif";
import { ReactTyped } from "react-typed";
import resume from "../assets/Azeez _Resume.pdf";
import { FaDownload } from "react-icons/fa";
import { FaHandPointDown } from "react-icons/fa";

const Home = ({ socialLinks, technoloyIcon }) => {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 "
      >
        <div className="flex flex-col md:flex-row mb-28 my-36">
          <div className="md:w-1/2 mt-12 md:mt-20 space-y-2 order-2 md:order-1">
            <span className="text-xl">Hello, It's Me</span>
            <div className="flex space-x-3 text-2xl mb-2 md:text-4xl">
              <h1>Shaik</h1>
              <span className="text-red-700 font-bold ">Azeez</span>
            </div>
            <p className="text-xl mt-3">
              And I'm a &nbsp;
              <ReactTyped
                strings={[
                  "Frontend web developer",
                  "Software Application developer",
                  "MERN stack developer ",
                  "Freelancer",
                  "Open source contributor",
                ]}
                backSpeed={40}
                typeSpeed={80}
                className="text-[20px] font-semibold text-red-700"
                loop={true}
              />
            </p>
            <br />
            <p className="md:text-md text-justify">
              Welcome to my portfolio! I'm a web developer with 3+ years of
              experience, passionate about creating engaging online experiences.
              Fascinated by how websites work, I strive to build beautiful and
              functional sites that connect people. With a strong belief in the
              power of technology to inspire action, I am dedicated to crafting
              solutions that make a difference. Let's explore my work together!
            </p>
            <br />
            {/*Social-Media Icons */}
            <div className="flex flex-col items-center md:flex md:flex-row md:justify-between ">
              <div className="space-y-2">
                <h1 className="text-center md:text-left font-bold">
                  Available on
                </h1>
                <ul className="flex space-x-2 justify-center">
                  {socialLinks.map((logo) => (
                    <li key={logo.id}>
                      <a href={logo.link} target="_blank">
                        {logo.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 md:mt-0">
                <h1 className="text-center font-bold md:text-left ">
                  Currently working on
                </h1>
                <ul className="flex justify-center space-x-3 mt-2">
                  {technoloyIcon.map((logo) => (
                    <li key={logo.id}>{logo.icon}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:w-60">
              <a
                href="https://drive.google.com/file/d/1CwHZQ6-7Y_B_btlYP0KzCExPMcdp0eBZ/view"
                download="Resume"
                target="_blank"
                className="mt-10 !w-20"
              >
                <FaHandPointDown className="text-red-600 w-7 h-7 bounce-short mt-14 text-center mx-auto md:mx-0" />
                <button className="font-medium text-[1.1rem] px-4 py-3 w-56 flex gap-5 border-[1px] border-red-300 rounded-md mx-auto md:mx-0 shadow-sm shadow-red-300 hover:shadow-md hover:shadow-red-600 hover:border-red-600">
                  {/* Download Resume */} Discover Talent
                  <FaDownload className="text-red-500 h-4 w-4 mt-1" />
                </button>
              </a>
            </div>
          </div>
          <div className="mt-6 md:w-1/2 md:ml-44 md:mt-10 order-1 md:order-2">
            <img
              src={pic}
              alt="image"
              className="rounded-md h-[60%] md:h-[80%] mx-auto"
            />
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Home;
