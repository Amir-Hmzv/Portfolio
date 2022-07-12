import React from "react";
import Image from "next/image";
const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2" id="skill">
      <div className="max-w-[1240px] flex flex-col  justify-center h-full mx-auto">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-2">What can I do?</h2>
        <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-8">
          <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/html.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                  HTML
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/css.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                  CSS
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/github1.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                  GITHUB
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/javascript.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center uppercase justify-center">
              javascript
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto " >
                <Image
                  src="/../public/assets/skills/tailwind.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                  TAILWIND
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/react.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                  REACT
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Skills;
