"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section
      id="profile"
      className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-28 h-[45vh] sm:h-[73vh] mb-24 "
    >
      <div className="text-center lg:text-left flex flex-col gap-3">
        <p className="font-semibold text-lg text-gray-600">Hello, I'm</p>
        <h1 className="text-4xl lg:text-5xl font-bold text-black">Deepanshu</h1>
        <p className="text-2xl lg:text-3xl text-gray-700">
          Fullstack Developer
        </p>
        <div className="flex justify-center lg:justify-start gap-4 mt-6">
          <button
            className="btn bg-black text-white px-6 py-2 rounded-full transition hover:bg-gray-800"
            onClick={() => window.open("./assets/deepanshu-cv.pdf")}
          >
            Download CV
          </button>
          <button
            className="btn border border-black px-6 py-2 rounded-full transition hover:bg-black hover:text-white"
            onClick={() => (window.location.href = "./#contact")}
          >
            Contact Info
          </button>
        </div>
        <div className="flex justify-center lg:justify-start gap-4 mt-6">
          <Image
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
          <Image
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
      </div>
      <div className="hidden justify-center h-[275px] w-[275px] lg:h-[400px] lg:w-[400px] sm:flex">
        <Image
          width={400}
          height={400}
          src="/assets/dp.jpeg"
          alt="Profile"
          className="rounded-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
