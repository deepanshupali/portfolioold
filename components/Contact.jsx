import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="pt-16 lg:pt-24 mx-auto max-w-screen-lg h-[80vh] px-4 lg:px-0"
    >
      <p className="font-semibold text-center text-gray-600">Get in Touch</p>
      <h1 className="text-4xl lg:text-5xl text-center font-bold text-gray-800">
        Contact Me
      </h1>
      <div className="flex justify-center items-center h-[30vh] gap-6 mt-10 lg:mt-20">
        <div className="border-black border-2 rounded-2xl p-6 lg:p-12 flex flex-col lg:flex-row gap-5">
          <div className="flex gap-2 items-center">
            <Image
              src={"/assets/email.png"}
              alt="Email Icon"
              width={35}
              height={35}
            />
            <a
              href="mailto:deepanshu8451@gmail.com"
              className="text-lg lg:text-xl"
            >
              deepanshu8451@gmail.com
            </a>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src={"/assets/linkedin.png"}
              alt="LinkedIn Icon"
              width={35}
              height={35}
            />
            <a
              href="https://www.linkedin.com/in/deepanshu-pali-8664a4209/"
              className="text-lg lg:text-xl"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div>
        <ul className="flex  lg:flex-row gap-4 lg:gap-8 text-xl lg:text-2xl mt-10 lg:mt-20 justify-center">
          <li>About</li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
