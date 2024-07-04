"use client";
import React from "react";

const Hero = () => {
  return (
    <section
      id="profile"
      className="flex flex-col justify-center items-center lg:items-start h-[70vh] bg-white text-black "
    >
      <div className="text-center lg:text-left flex flex-col gap-6 p-8 lg:p-1">
        <h1 className="text-4xl lg:text-6xl font-bold">Deepanshu</h1>
        <p className="text-2xl lg:text-4xl">Web Developer</p>
        <p className="mt-4 text-lg lg:text-xl max-w-2xl">
          Tech enthusiast with a passion for problem-solving and innovation.
          Experienced in software development with proficiency in various
          programming languages and technologies. Dedicated to continuous
          learning and eager to contribute to impactful projects.
        </p>
        <div className="flex justify-center lg:justify-start gap-4 mt-6">
          <button
            className="btn bg-black text-white px-6 py-2 rounded-full transition hover:bg-gray-800"
            onClick={() => window.open("./assets/deepanshu-cv.pdf")}
          >
            Download CV
          </button>
          <button
            className="btn border border-black text-black px-6 py-2 rounded-full transition hover:bg-black hover:text-white"
            onClick={() => (window.location.href = "./#contact")}
          >
            Contact Info
          </button>
        </div>
      </div>
      {/* Scroll down button */}
      <div className="flex justify-between  gap-4 mt-6 w-full">
        <div className="flex gap-8">
          {" "}
          <img
            width={32}
            height={32}
            src="/assets/linkedin.png"
            alt="LinkedIn"
            className="cursor-pointer"
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/deepanshu-pali-8664a4209/")
            }
          />
          <img
            width={32}
            height={32}
            src="/assets/github.png"
            alt="GitHub"
            className="cursor-pointer"
            onClick={() =>
              (window.location.href = "https://github.com/deepanshupali")
            }
          />
        </div>
        <div className=" self-end">
          <a
            href="#experience"
            className="btn bg-black text-white px-4 py-2 rounded-full transition-all
                      duration-300 hover:bg-gray-800 "
          >
            Scroll down
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
