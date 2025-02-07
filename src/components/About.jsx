import React from "react";
import Html from "../assets/html.png";
import Css from "../assets/css.jpg";
import Java_Script from "../assets/javascript.png";
import ReactJs from "../assets/reactjs.png";
import Java_Spring from "../assets/spring.png";
import Next from "../assets/NextJs.png";
import Git from "../assets/Github.png";
import Redux from "../assets/Redux.png";
import Bootstrap from "../assets/Bootstrap.png";
import Tailwind from "../assets/Tailwind Css.png";
import { GiJourney } from "react-icons/gi";
const About = () => {
  return (
    <div className="bg-gray-100 mb-20" name="About">
      <div className="container mx-auto" id="about">
        <div className="max-w-screen-2xl container px-5 mx-auto md:px-20 py-5">
          <div className="text-center ">
            <h2 className=" text-red-700 font-semibold tracking-wide uppercase">
              About Me
            </h2>
            {/* <p className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Hi, I am Shaik Azeez
            </p> */}
            <p className="mt-4 max-w-2xl text-gray-500 lg:mx-auto">
              Frontend Developer in React.js, HTML5, CSS3, and JavaScript. I
              build responsive, user-friendly web apps and collaborate with
              teams to deliver innovative digital solutions. Let's create
              something amazing!
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  My Journey
                </h3>
                <p className="mt-4 text-gray-600">
                  I started my journey in web development with a passion for
                  creating intuitive and scalable applications. With proficiency
                  in React JS (HTML5, CSS3, and JavaScript), I have built such
                  projects in React JS as hotel bookings, e-commerce websites,
                  and branding websites. My project demonstrates my ability to
                  integrate with backend API calls and user-friendly designs.
                </p>
                <div className="mt-4">
                  <GiJourney size={80} className="text-gray-700" />
                </div>
              </div>
              <div className="border border-red-200 rounded-lg md:p-7 py-7 flex flex-col gap-8 items-center shadow-lg shadow-red-300">
                <h3 className="text-2xl font-medium text-red-700">
                  Skills & Expertise
                </h3>
                <div className="flex items-center justify-center flex-wrap gap-3">
                  <div className="border border-red-300 flex items-center py-1 px-2 pr-3 rounded-lg shadow-md shadow-red-300 cursor-pointer hover:scale-105 duration-200">
                    <img src={Html} alt="HTML" className="w-10" />
                    <span className="font-medium">HTML5</span>
                  </div>
                  <div className="border border-red-300 flex items-center py-1 gap-2 px-3 rounded-lg shadow-md shadow-red-300 cursor-pointer hover:scale-105 duration-200">
                    <img src={Css} alt="HTML" className="w-10 h-10" />
                    <span className="font-medium">CSS3</span>
                  </div>
                  <div className="border border-red-300 flex items-center py-1 gap-2 px-3 rounded-lg shadow-md shadow-red-300 cursor-pointer hover:scale-105 duration-200">
                    <img src={Java_Script} alt="HTML" className="w-10 h-10" />
                    <span className="font-medium">Java Script</span>
                  </div>
                  <div className="border border-red-300 flex items-center py-1 gap-2 px-3 rounded-lg shadow-md shadow-red-300 cursor-pointer hover:scale-105 duration-200">
                    <img src={Redux} alt="HTML" className="w-10 h-10" />
                    <span className="font-medium">Redux</span>
                  </div>
                  <div className="border border-red-300 flex items-center py-1 gap-2 px-3 rounded-lg shadow-md shadow-red-300 cursor-pointer hover:scale-105 duration-200">
                    <img src={Bootstrap} alt="HTML" className="w-10 h-10" />
                    <span className="font-medium">Bootstrap</span>
                  </div>
                  <div className="border border-red-300 flex items-center py-1 gap-2 px-3 rounded-lg shadow-md shadow-red-300 cursor-pointer hover:scale-105 duration-200">
                    <img
                      src={Tailwind}
                      alt="HTML"
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="font-medium">Tailwind Css</span>
                  </div>
                  <div className="border border-red-300 flex items-center py-1 gap-2 px-3 rounded-lg shadow-md shadow-red-300 cursor-pointer hover:scale-105 duration-200">
                    <img
                      src={ReactJs}
                      alt="HTML"
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="font-medium">React Js</span>
                  </div>
                  <div className="border border-red-300 flex items-center py-1 gap-2 px-3 rounded-lg shadow-md shadow-red-300 cursor-pointer hover:scale-105 duration-200">
                    <img
                      src={Git}
                      alt="HTML"
                      className="w-10 h-10 bg-slate-500 rounded-full"
                    />
                    <span className="font-medium">Git Hub</span>
                  </div>
                  <div className="border border-red-300 flex items-center py-1 gap-2 px-3 rounded-lg shadow-md shadow-red-300 cursor-pointer hover:scale-105 duration-200">
                    <img
                      src={Next}
                      alt="HTML"
                      className="w-10 h-10 bg-slate-500 rounded-full"
                    />
                    <span className="font-medium">Next Js</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900">
              More About Me
            </h3>
            <p className="mt-4  text-gray-600">
              {/* Apart from coding, I am passionate about learning new technologies
              and keeping myself up-to-date with latest trends in web
              devlopment. */}
              {/* Beyond the realm of code, my passions lie in the vibrant tapestry of life. I am an avid traveler, a zealous gamer, and a dedicated advocate for diabetes awareness. The insatiable thirst for knowledge fuels my every endeavor, driving me to constantly explore the boundless frontiers of human understanding. */}
              Beyond coding, I find joy in exploring the world through travel
              and engaging games. I'm passionate about educating others on
              diabetes management and constantly seeking new knowledge. These
              diverse interests enrich my life and broaden my horizons.
            </p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default About;
