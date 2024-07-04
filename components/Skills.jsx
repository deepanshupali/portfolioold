import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <section
      id="experience"
      className="pt-16 lg:pt-24 mx-auto max-w-screen-lg h-[70vh]"
    >
      <p className="font-semibold text-center text-gray-600">Explore My</p>
      <h1 className="text-4xl lg:text-5xl text-center font-bold text-gray-800 mb-8">
        Skills
      </h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-medium mb-4 text-center">
            Frontend Development
          </h2>
          <div className="grid grid-cols-2 gap-10 border-black border-2 rounded-md p-10">
            {/* Row 1 */}
            <div className="skill-item flex items-center">
              <Image
                width={30}
                height={20}
                src={"/assets/checkmark.png"}
                alt="checkmark"
                className="mr-2"
              />
              <span className="text-lg font-semibold">HTML</span>
            </div>
            <div className="skill-item flex items-center">
              <Image
                width={30}
                height={20}
                src={"/assets/checkmark.png"}
                alt="checkmark"
                className="mr-2"
              />
              <span className="text-lg font-semibold">CSS</span>
            </div>
            <div className="skill-item flex items-center">
              <Image
                width={30}
                height={20}
                src={"/assets/checkmark.png"}
                alt="checkmark"
                className="mr-2"
              />
              <span className="text-lg font-semibold">JavaScript</span>
            </div>
            <div className="skill-item flex items-center">
              <Image
                width={30}
                height={20}
                src={"/assets/checkmark.png"}
                alt="checkmark"
                className="mr-2"
              />
              <span className="text-lg font-semibold">TypeScript</span>
            </div>
            {/* Row 2 */}
            <div className="skill-item flex items-center">
              <Image
                width={30}
                height={20}
                src={"/assets/checkmark.png"}
                alt="checkmark"
                className="mr-2"
              />
              <span className="text-lg font-semibold">Next.js</span>
            </div>
            <div className="skill-item flex items-center">
              <Image
                width={30}
                height={20}
                src={"/assets/checkmark.png"}
                alt="checkmark"
                className="mr-2"
              />
              <span className="text-lg font-semibold">React.js</span>
            </div>
            {/* Row 3 */}
            <div className="skill-item flex items-center">
              <Image
                width={30}
                height={20}
                src={"/assets/checkmark.png"}
                alt="checkmark"
                className="mr-2"
              />
              <span className="text-lg font-semibold">Tailwind CSS</span>
            </div>
            <div className="skill-item flex items-center">
              <Image
                width={30}
                height={20}
                src={"/assets/checkmark.png"}
                alt="checkmark"
                className="mr-2"
              />
              <span className="text-lg font-semibold">Bootstrap</span>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-medium mb-4 text-center">
            Backend Development
          </h2>
          <div className="grid grid-cols-2 gap-10 border-black border-2 rounded-md p-10">
            {/* Row 1 */}
            <div className="skill-item flex items-center">
              <Image
                width={30}
                height={20}
                src={"/assets/checkmark.png"}
                alt="checkmark"
                className="mr-2"
              />
              <span className="text-lg font-semibold">MongoDB</span>
            </div>
            <div className="skill-item flex items-center">
              <Image
                width={30}
                height={20}
                src={"/assets/checkmark.png"}
                alt="checkmark"
                className="mr-2"
              />
              <span className="text-lg font-semibold">MySQL</span>
            </div>
            {/* Row 2 */}
            <div className="skill-item flex items-center">
              <Image
                width={30}
                height={20}
                src={"/assets/checkmark.png"}
                alt="checkmark"
                className="mr-2"
              />
              <span className="text-lg font-semibold">Node.js</span>
            </div>
            <div className="skill-item flex items-center">
              <Image
                width={30}
                height={20}
                src={"/assets/checkmark.png"}
                alt="checkmark"
                className="mr-2"
              />
              <span className="text-lg font-semibold">Express</span>
            </div>
            {/* Row 3 */}
            <div className="skill-item flex items-center">
              <Image
                width={30}
                height={20}
                src={"/assets/checkmark.png"}
                alt="checkmark"
                className="mr-2"
              />
              <span className="text-lg font-semibold">Sockets</span>
            </div>
            <div className="skill-item flex items-center">
              <Image
                width={30}
                height={20}
                src={"/assets/checkmark.png"}
                alt="checkmark"
                className="mr-2"
              />
              <span className="text-lg font-semibold">Docker</span>
            </div>
            <div className="skill-item flex items-center">
              <Image
                width={30}
                height={20}
                src={"/assets/checkmark.png"}
                alt="checkmark"
                className="mr-2"
              />
              <span className="text-lg font-semibold">Kubernetes</span>
            </div>
            <div className="skill-item flex items-center">
              <Image
                width={30}
                height={20}
                src={"/assets/checkmark.png"}
                alt="checkmark"
                className="mr-2"
              />
              <span className="text-lg font-semibold">Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
