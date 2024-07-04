import Image from "next/image";
import React from "react";
import Homely from "../public/assets/yt.png";
import Ecom from "../public/assets/ecom.png";
import Netflix from "../public/assets/netflix.png";
import { MdKeyboardArrowRight } from "react-icons/md";

const Projects = () => {
  const data = [
    {
      type: "Next.js, Typescript, Tailwind, Pusher.js, and MongoDb",
      name: "YT Watch party",
      des: "A real-time web app for synchronizing YouTube videos, enabling users to watch together. Included instant messaging for chat during videos and admin controls for playback speed. Designed rooms for multiple groups to watch simultaneously, showing current online users per room.",
      image: Homely,
      github: "https://github.com/deepanshupali/watch-party",
      live: "https://watch-party-rho.vercel.app/",
    },
    {
      type: "React.js, Redux, JavaScript, Axios, and Firebase",
      name: "E-commerce Store",
      des: "A fully functional e-commerce website using React.js, Redux, JavaScript, Axios, and Firebase. Integrated Firebase Authentication for secure user login and ensured a seamless shopping experience through Redux.",
      image: Ecom,
      github: "https://github.com/deepanshupali/Ecommerce",
      live: "https://playful-semifreddo-7b40b8.netlify.app/",
    },
    {
      type: "React.js, JavaScript, Tailwind CSS, and Firebase",
      name: "Netflix clone",
      des: "A Netflix clone using React.js, JavaScript, Tailwind CSS, and Firebase Authentication. Implemented features allowing users to save favorite shows, which persist across logins. Developed sections for upcoming, popular, trending, and top-rated movies.",
      image: Netflix,
      github: "https://github.com/deepanshupali/netflix",
      live: "https://mellifluous-churros-b1b1d2.netlify.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="pt-16 lg:pt-24 mx-auto max-w-screen-lg px-4 lg:px-0"
    >
      <p className="font-semibold text-center text-gray-600">Browse My</p>
      <h1 className="text-4xl lg:text-5xl text-center font-bold text-gray-800">
        Recent Projects
      </h1>

      <div className="flex flex-col gap-28 mt-20">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse lg:flex-row gap-16 items-center ${
              index % 2 === 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* left */}
            <div className="flex flex-col items-start basis-full lg:basis-[40%]">
              <p className="text-2xl sm:text-3xl lg:text-[34px] mt-5 mb-5 lg:mb-10 leading-normal font-bold text-textb text-start">
                {item.name}
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-gry leading-6 sm:leading-8 lg:leading-9 text-start">
                {item.des}
              </p>
              <p className="mt-5">
                <span className="text-lg lg:text-xl font-semibold">
                  Tech Stack
                </span>{" "}
                :
                <span className="text-base lg:text-lg font-medium">{` ${item.type}`}</span>
              </p>
              <div className="mt-6 space-x-4">
                <a
                  href={item.live}
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href={item.github}
                  className="inline-block bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              </div>
            </div>

            {/* right */}
            <div className="basis-full lg:basis-[60%]">
              <Image
                className="w-full h-auto sm:hover:scale-110 transition-all duration-500"
                src={item.image}
                alt="image"
                width={600}
                height={400}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
