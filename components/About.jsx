import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section id="about" className="pt-16 lg:pt-24 mx-auto max-w-screen-lg ">
      <p className="font-semibold text-center text-gray-600">
        Get To Know More
      </p>
      <h1 className="text-4xl lg:text-5xl text-center font-bold text-gray-800">
        About Me
      </h1>
      <div className="flex flex-col lg:flex-row items-cente lg:items-start lg:justify-center gap-8 lg:gap-16 mt-8">
        <div className="w-full lg:w-1/2 transition-transform duration-300 ease-in-out transform hover:scale-105">
          <Image
            width={400}
            height={400}
            src="/assets/dp2.jpeg"
            alt="About"
            className="rounded-2xl w-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 text-gray-700 my-auto">
          <p className="leading-relaxed text-lg">
            I am a full stack developer passionate about creating seamless and
            dynamic web applications. With expertise in both front-end and
            back-end technologies, I deliver comprehensive and efficient
            solutions.
            <br />
            <br />
            <br />I thrive on solving complex problems and bringing innovative
            ideas to life through code. Explore my portfolio to see how I
            combine creativity and technical expertise to develop impactful web
            applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
