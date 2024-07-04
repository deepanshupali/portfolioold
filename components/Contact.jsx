import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="pt-16 lg:pt-24 mx-auto max-w-screen-lg h-[80vh]"
    >
      <p className="font-semibold text-center text-gray-600">Get in Touch</p>
      <h1 className="text-4xl lg:text-5xl text-center font-bold text-gray-800">
        Contact Me
      </h1>
      <div className="flex justify-center items-center h-[30vh] gap-6">
        <div className="border-black border-2 rounded-2xl p-12 flex gap-5">
          <div className="flex gap-2 items-center">
            <Image
              src={"/assets/email.png"}
              alt="Email Icon"
              width={35}
              height={35}
            />
            <a href="mailto:deepanshu8451@gmail.com" className="text-xl">
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
              className="text-xl"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div>
        <ul className="flex  gap-8 text-2xl mt-[10%] justify-center">
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
