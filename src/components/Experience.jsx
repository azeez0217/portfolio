
import { FaGraduationCap } from "react-icons/fa";
import { IoIosPersonAdd } from "react-icons/io";
import { FaHtml5, FaSquareJs } from "react-icons/fa6";
import { RiReactjsLine, RiNodejsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaCss3Alt, FaBootstrap, FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
const Experience = () => {
 
  const skills = [
    {
      id: 1,
      name: "HTML5",
      icon: <FaHtml5 className="w-16 h-16 text-red-600" />,
    },
    {
      id: 2,
      name: "CSS3",
      icon: <FaCss3Alt className="w-16 h-16 text-red-600" />,
    },
    {
      id: 3,
      name: "JavaScript",
      icon: <FaSquareJs className="w-16 h-16 text-red-600" />,
    },
    {
      id: 4,
      name: "React.js",
      icon: <RiReactjsLine className="w-16 h-16 text-red-600" />,
    },
    {
      id: 5,
      name: "Bootstrap",
      icon: <FaBootstrap className="w-16 h-16 text-red-600" />,
    },
    {
      id: 6,
      name: "Tailwind css",
      icon: <SiTailwindcss className="w-16 h-16 text-red-600" />,
    },
    {
      id: 7,
      name: "Git Hub",
      icon: <FaGithub className="w-16 h-16 text-red-600" />,
    },
    {
      id: 8,
      name: "Express.js",
      icon: <SiExpress className="w-16 h-16 text-red-600" />,
    },
    {
      id: 9,
      name: "Node.js",
      icon: <RiNodejsLine className="w-16 h-16 text-red-600" />,
    },
    {
      id: 10,
      name: "Mongo DB",
      icon: <SiMongodb className="w-16 h-16 text-red-600" />,
    },
  ];
  return (

    <div name="Experience" className="bg-gray-50 py-16">
    <div className="container mx-auto px-5 md:px-12">

      <h3 className="text-3xl md:text-2xl font-bold text-center text-red-600 mb-12">
        Education & Experience
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        <div className="w-full bg-white shadow-lg shadow-red-100 px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl border-l-4 border-red-600 cursor-pointer">
          <h4 className="text-2xl font-semibold tracking-wide flex justify-between border-b-2 pb-3">
            Experience
            <IoIosPersonAdd className="h-10 w-10 text-red-500" />
          </h4>
          <h6 className="text-lg font-semibold text-red-600 mt-4">
            Summary
          </h6>
          <p className="mt-3 text-gray-600 leading-relaxed">
            Experienced Frontend Developer with 3+ years of expertise in
            building responsive and user-friendly web applications using
            HTML5, CSS3, JavaScript, and React.js. Passionate about enhancing
            user experiences and collaborating with cross-functional teams.
          </p>
        </div>

        <div className="w-full bg-white shadow-lg shadow-red-100 px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl border-l-4 border-red-600 cursor-pointer">
          <h4 className="text-2xl font-semibold tracking-wide flex justify-between border-b-2 pb-3">
            Education
            <FaGraduationCap className="h-10 w-10 text-red-500" />
          </h4>
          <h6 className="text-lg font-semibold text-red-600 mt-4">
            JNTU Kakinada
          </h6>
          <p className="mt-2 text-lg text-gray-700">
            Priyadarshini Institute of Science and Technology
          </p>
          <p className="mt-2">
            B-Tech in Mechanical Engineering{" "}
            <span className="px-2 text-gray-600">2016-2019</span> with{" "}
            <span className="px-2 text-red-600 font-semibold">78.25%</span>
          </p>
        </div>
      </div>
        
      <div className="mt-16">
        <h4 className="text-3xl font-bold text-center text-red-600 mb-8">
          Skills
        </h4>
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill) => (
            <div className="text-center" key={skill.id}>
              <div className="bg-white shadow-md shadow-red-200 px-5 py-4 rounded-lg border border-red-200 hover:scale-110 duration-200 cursor-pointer transition-all">
                <p className="text-xl font-semibold text-gray-700 flex justify-center">
                  {skill.icon}
                </p>
              </div>
              <p className="mt-2 text-gray-500 font-semibold uppercase text-sm">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <hr className="mt-16 border-t-2 border-gray-300" />
  </div>
  );
};

export default Experience;
