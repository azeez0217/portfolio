
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
    <div name="Experience">
      <div className="bg-gray-100 pb-12">
        <div className="container mx-auto" id="about">
          <div className="max-w-screen-2xl container px-5 mx-auto md:px-20 py-8">
            <h3 className="text-2xl font-semibold text-center text-red-600 mb-8">
              Education and Experience
            </h3>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="mt-6 w-full h-auto bg-white shadow-md shadow-red-200 px-10 py-6 rounded-md cursor-pointer hover:scale-105 transition duration-200 border-l-4 border-red-600">
                <h4 className="text-2xl font-semibold tracking-wide flex justify-between border-b-2 pb-2">
                  Experience
                  <IoIosPersonAdd className="h-10 w-10" />
                </h4>
                <h6 className="text-lg font-semibold text-red-600 mt-3">
                  Summary
                </h6>
                <p className="mt-2 text-base mb-3">
                  Experienced Frontend Developer with 3+ years of expertise in
                  creating responsive, user-friendly web applications using
                  HTML5, CSS3, JavaScript, and React.js. Skilled in
                  collaborating with cross-functional teams to deliver
                  innovative digital solutions and committed to enhancing user
                  experiences while staying updated with industry trends and
                  tools.
                </p>
              </div>
              <div className="mt-6 w-full h-auto text-left bg-white shadow-md shadow-red-200 px-10 py-6 cursor-pointer rounded-md hover:scale-105 transition duration-200 border-l-4 border-red-600">
                <h4 className="text-2xl font-semibold tracking-wide flex justify-between border-b-2 pb-2">
                  Education
                  <FaGraduationCap className="h-10 w-10" />
                </h4>
                <h6 className="text-lg font-semibold text-red-600 mt-3">
                  JNTU Kakinada
                </h6>
                <p className="mt-2 text-lg text-gray-700">
                  Priyadarshini Institute of Science and Technology
                </p>
                <p className="mt-2 mb-3">
                  B-Tech in Mechanical Engineering
                  <span className="px-2">&nbsp;2016-2019</span> with
                  <span className="px-2 text-red-600">78.25%</span>
                </p>
              </div>
          
            </div>
            <div className="mt-12">
              <h4 className="text-2xl font-semibold text-center text-red-600 mb-6">
                Skills
              </h4>
              <div className="flex flex-wrap justify-center gap-8 ">
                {skills.map((skill) => {
                  return (
                    <div className="text-center" key={skill.id}>
                      <div className="bg-white shadow-md shadow-red-200 px-3 py-2 rounded-md text-center border-red-200 border-solid border hover:scale-110 duration-200 cursor-pointer">
                        <p className="text-lg font-semibold text-gray-700 flex justify-center">
                          {skill.icon}
                        </p>
                      </div>
                      <p className="mt-2 text-gray-400 font-semibold uppercase">
                        {skill.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  //   <div name="Experience" className="bg-gradient-to-b from-gray-50 to-gray-200 py-16">
  //   <div className="max-w-screen-2xl mx-auto px-6 md:px-20">
  //     <h3 className="text-4xl font-extrabold text-center text-red-600 mb-12 uppercase tracking-wider drop-shadow-lg">
  //       Education & Experience
  //     </h3>
      
  //     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
  //       {/* Education Card */}
  //       <div className="w-full bg-white shadow-xl rounded-lg p-8 transform hover:scale-105 transition duration-300 border-l-4 border-red-600">
  //         <h4 className="text-3xl font-bold flex items-center justify-between border-b pb-4 text-gray-800">
  //           Education <FaGraduationCap className="h-10 w-10 text-red-600" />
  //         </h4>
  //         <h6 className="text-xl font-semibold text-red-600 mt-6">JNTU Kakinada</h6>
  //         <p className="mt-2 text-lg text-gray-700">Priyadarshini Institute of Science and Technology</p>
  //         <p className="mt-2 text-gray-600 font-medium">
  //           B-Tech in Mechanical Engineering <span className="text-red-600">(2016-2019)</span>
  //           <br />
  //           <span className="text-red-600 font-bold text-xl">78.25%</span>
  //         </p>
  //       </div>
        
  //       {/* Experience Card */}
  //       <div className="w-full bg-white shadow-xl rounded-lg p-8 transform hover:scale-105 transition duration-300 border-l-4 border-red-600">
  //         <h4 className="text-3xl font-bold flex items-center justify-between border-b pb-4 text-gray-800">
  //           Experience <IoIosPersonAdd className="h-10 w-10 text-red-600" />
  //         </h4>
  //         <h6 className="text-xl font-semibold text-red-600 mt-6">Summary</h6>
  //         <p className="mt-4 text-gray-700 leading-relaxed text-lg">
  //           Experienced Frontend Developer with 3+ years of expertise in
  //           creating responsive, user-friendly web applications using HTML5, CSS3, JavaScript, and React.js.
  //           Skilled in collaborating with cross-functional teams to deliver innovative digital solutions and
  //           committed to enhancing user experiences while staying updated with industry trends and tools.
  //         </p>
  //       </div>
  //     </div>
      
  //     {/* Skills Section */}
  //     <div className="mt-16">
  //       <h4 className="text-3xl font-extrabold text-center text-red-600 mb-8 uppercase tracking-wider drop-shadow-lg">
  //         Skills
  //       </h4>
  //       <div className="flex flex-wrap justify-center gap-6">
  //         {skills.map((skill) => (
  //           <div key={skill.id} className="text-center">
  //             <div className="bg-white shadow-lg p-4 rounded-lg border border-red-200 hover:scale-110 transition duration-300 cursor-pointer">
  //               <p className="text-3xl text-red-600">{skill.icon}</p>
  //             </div>
  //             <p className="mt-2 text-gray-500 font-semibold uppercase">{skill.name}</p>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // </div>
  );
};

export default Experience;
