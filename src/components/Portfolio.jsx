import React from "react";

const Portfolio = ({ cardItems }) => {
  return (
    <div
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 "
      name="Portfolio"
    >
      <div className="mb-20 mt-10">
        <h1 className="text-3xl font-semibold text-gray-900 mb-1 ">
          Portfolio
        </h1>
        <span className="underline-offset-1 mt-2">
          Present & Featured Projects
        </span>
        <div className="flex flex-wrap justify-center gap-6 mt-10 mx-auto my-5">
          {cardItems.map((card) => (
            <div
              key={card.id}
              className="bg-white shadow-md shadow-red-200 rounded-md cursor-pointer flex flex-col w-[85%] sm:w-[48%] md:w-[31%] lg:w-[23%] min-h-[450px] hover:border-blue-900 hover:shadow-md hover:shadow-blue-800"
            >
              <div className="border-b-[1px]  rounded-t-md">
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-48 object-cover rounded-t-md"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h4 className="text-lg font-semibold">{card.name}</h4>
                <p className="text-sm mt-2 mb-4 flex-grow">
                  {card.description}
                </p>
              </div>
              <div className="flex justify-center gap-4 p-4">
                <a href={card.demo} target="_blank">
                  <button className="bg-white w-24 px-2 py-1.5 rounded-md border border-red-300  hover:scale-105 duration-150 hover:border-blue-950 hover:border hover:shadow-md hover:shadow-blue-600">
                    Demo
                  </button>
                </a>
                <a href={card.gitHub} target="_blank">
                  <button className="bg-white w-24 px-2 py-1.5 rounded-md border border-red-300 hover:scale-105 duration-150 hover:border-blue-950 hover:border hover:shadow-md hover:shadow-blue-600">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Portfolio;
