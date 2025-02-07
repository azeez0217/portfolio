import React from "react";
import website_one from "../assets/portpolio/stop_watch.jpeg";
import website_two from "../assets/portpolio/todolist.jpeg";

const Portfolio = () => {
  const cardItems = [
    {
      id: 1,
      image: website_one,
      name: "Stop Watch",
      description:
        "This React application implements a basic stopwatch functionality. Users can start, stop, and reset the timer, observing the elapsed time in real-time. The interface provides clear visual feedback with buttons for easy interaction.",
    },
    {
      id: 2,
      image: website_two,
      name: "Todo List",
      description:
        "This React application allows users to create, read,and delete tasks within a dynamic to-do list. Tasks can be marked as completed and prioritized, enhancing task management efficiency.",
    },
  ];

  return (
    <div
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 "
      name="Portfolio"
    >
      <div className="mb-16">
        <h1 className="text-3xl font-semibold text-gray-900 mb-1">Portfolio</h1>
        <span className="underline-offset-1 mt-2">
          Present & Featured Projects
        </span>
        <div className="w-3/4 mt-10 mx-auto flex flex-col md:flex-row items-center md:flex-wrap md:justify-center md:space-x-3 my-5">
          {cardItems.map((card) => (
            <div
              key={card.id}
              className="w-[100%] sm:w-[75%] md:w-[45%] lg:w-[40%] xl:w-[32%] h-[520px] md:h-[470px] flex flex-col shadow-md shadow-red-200 rounded-md mb-5 md:mb-3 mx-3 cursor-pointer hover:scale-105 duration-200 hover:shadow-xl"
            >
              <div className="border-2 border-sloid border-red-300 rounded-t-md">
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-48 rounded-t-md"
                />
              </div>
              <div className="px-3 mt-5 h-[220px] md:h-44">
                <h4 className="text-[1.1rem] font-semibold">{card.name}</h4>
                <p className="text-[15px] mt-2 mb-2">{card.description}</p>
              </div>
              <div className="mt-5 flex justify-center gap-4">
                <button className="bg-white w-24 px-1.5 py-1.5 rounded-md border border-solid border-red-300 shadow-md shadow-red-300 ">
                  Demo
                </button>
                <button className="bg-white w-24 px-1.5 py-1.5 rounded-md border border-solid border-red-300 shadow-md shadow-red-300 ">
                  Git Hub
                </button>
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
