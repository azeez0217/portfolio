import React from "react";
import website_one from "../assets/portpolio/stop_watch.jpeg";
import website_two from "../assets/portpolio/todolist.jpg";
import website_three from "../assets/portpolio/qr_code.png";
import website_four from "../assets/portpolio/bmi_calculator.png";
const Portfolio = () => {
  const cardItems = [
    {
      id: 1,
      image: website_one,
      name: "Stop Watch",
      description:
        "This React application implements a basic stopwatch functionality. Users can start, stop, and reset the timer, observing the elapsed time in real-time. The interface provides clear visual feedback with buttons for easy interaction.",
      gitHub: "https://github.com/azeez0217/stop_watch",
      demo: "https://samplestopwatch.netlify.app/",
    },
    {
      id: 2,
      image: website_two,
      name: "Todo List",
      description:
        "This React application allows users to create, read,and delete tasks within a dynamic to-do list. Tasks can be marked as completed and prioritized, enhancing task management efficiency.",
      gitHub: "https://github.com/azeez0217/todo_list",
      demo: "https://azeez-todo-list.netlify.app/",
    },
    {
      id: 3,
      image: website_three,
      name: "QR Code",
      description:
        "Enter your name in the input field to generate a unique QR code instantly! Scan the QR code to share your name easily. Simple, fast, and efficient—try it now and see your personalized QR code appear in seconds!",
      gitHub: "https://github.com/azeez0217/QR_Code",
      demo: "https://azeez-qr-code.netlify.app/",
    },
    {
      id: 4,
      image: website_four,
      name: "BMI Calculator",
      description:
        "Enter your height and weight to calculate your BMI instantly! Our BMI calculator provides quick results, helping you track your health and fitness. Try it now and get insights into your body mass index effortlessly!",
      gitHub: "https://github.com/azeez0217/bmi_calculator",
      demo: "https://azeezbmicalculator.netlify.app/",
    },
  ];

  return (
    <div
      className="max-w-screen-2xl container mx-auto px-4 md:px-20"
      name="Portfolio"
    >
      <div className="mb-20">
        <h1 className="text-3xl font-semibold text-gray-900 mb-1">Portfolio</h1>
        <span className="underline-offset-1 mt-2">
          Present & Featured Projects
        </span>
        <div className="flex flex-wrap justify-center gap-6 mt-10 mx-auto my-5">
          {cardItems.map((card) => (
            <div
              key={card.id}
              className="bg-white shadow-md shadow-red-200 rounded-md cursor-pointer hover:shadow-xl flex flex-col w-[85%] sm:w-[48%] md:w-[31%] lg:w-[23%] min-h-[450px]"
            >
              <div className="border-2 border-solid border-red-300 rounded-t-md">
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
                <button className="bg-white w-24 px-2 py-1.5 rounded-md border border-red-300 shadow-md shadow-red-300 hover:scale-105 duration-150  hover:bg-red-600 hover:text-white hover:border-1 hover:border-gray-600">
                  Demo
                </button>
                </a>
                <a href={card.gitHub} target="_blank">
                <button className="bg-white w-24 px-2 py-1.5 rounded-md border border-red-300 shadow-md shadow-red-300 hover:scale-105 duration-150 hover:bg-red-600 hover:text-white hover:border-1 hover:border-gray-600">
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
