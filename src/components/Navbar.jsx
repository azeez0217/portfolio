import { useState } from "react";
import pic from "../assets/home_logo.avif";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-scroll";
import { TiHome } from "react-icons/ti";
import { IoIosPerson } from "react-icons/io";
import { PiProjectorScreenFill } from "react-icons/pi";
import { BsBookmarksFill } from "react-icons/bs";
import { MdPermPhoneMsg } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
      icon: <TiHome className="w-5 h-5" />,
    },
    {
      id: 2,
      text: "About",
      icon: <IoIosPerson className="w-5 h-5" />,
    },
    {
      id: 3,
      text: "Portfolio",
      icon: <PiProjectorScreenFill className="w-5 h-5" />,
    },
    {
      id: 4,
      text: "Experience",
      icon: <BsBookmarksFill className="w-5 h-5" />,
    },
    {
      id: 5,
      text: "Contact Me",
      icon: <MdPermPhoneMsg className="w-5 h-5" />,
    },
    {
      id: 6,
      text: "Git Hub",
      git: "https://github.com/azeez0217",
      icon: <FaGithub className="w-5 h-5" />,
    },
  ];
  return (
    <div className="max-w-screen-2xl container mx-auto  shadow-md h-20 fixed top-0 right-0 left-0 bg-white z-10">
      <div className="flex justify-between h-20 items-center px-4 md:px-20">
        <div className="flex space-x-3 duration-200">
          <Link
            to="Home"
            smooth={true}
            duration={700}
            offset={-250}
            activeClass="active"
            className="flex space-x-3 duration-200"
          >
            <img
              src={pic}
              alt="profile Image"
              className="h-14 w-14  cursor-pointer "
              title="Azeez portpolio"
            />
             <h1 className="font-semibold text-xl cursor-pointer">
            Azeez <span className="text-gray-500">Shaik</span>
            <p className="text-sm">
              Web developer <span className="text-gray-500">(React Js)</span>
            </p>
          </h1>
          </Link>
         
        </div>
        {/*Laptop Navbar */}
        <div>
          <ul className="hidden md:flex space-x-8">
            {navItems.map(({ id, text, git, icon }) => (
              <li
                className="hover:scale-105 duration-200 cursor-pointer "
                key={id}
              >
                {console.log(git)}
                {git === undefined ? (
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    activeClass="active"
                    className="flex gap-1 hover:text-rose-600"
                  >
                    <span>{icon}</span> {text}
                  </Link>
                ) : (
                  <a
                    href={git}
                    target="_blank"
                    className="flex gap-1 hover:text-rose-600 shadow-md bounce-short shadow-red-300 border-1 border-red-300 px-2 py-2 rounded mt-[-8px]"
                  >
                    <span>{icon}</span> {text}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <div className="md:hidden" onClick={() => setMenu(!menu)}>
            {menu ? (
              <IoClose size={24} className="cursor-pointer" />
            ) : (
              <IoMenu size={24} className="cursor-pointer" />
            )}
          </div>
        </div>
      </div>
      {/*Mobile Navbar */}
      {menu && (
        <div className="bg-white w-[100%]">
          <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl animate-slideInDiagonal">
            {navItems.map(({ id, text, git }) => (
              <li
                className=" hover:scale-105 duration-200 cursor-pointer "
                key={id}
              >
                {git === undefined ? (
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    activeClass="active"
                    onClick={() => setMenu(!menu)}
                  >
                    {text}
                  </Link>
                ) : (
                  <a href={git} target="_blank" onClick={() => setMenu(!menu)}>
                    {text}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
