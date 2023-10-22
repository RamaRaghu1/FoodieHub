import React from "react";
import img from "../../assets/hero.png";

const Hero = () => {
  return (
    <div>
      <section className="  flex justify-center items-center  bg-gradient-to-t from-red-200 to-white rounded-b-3xl">
        <div className="px-4 lg:px-8 xl:px-12  sm:w-4/5 ">
          <div className="py-8 mx-auto flex flex-col justify-start items-start lg:flex-row lg:justify-between lg:items-center">
            <div className="text-start sm:max-w-md space-y-4">
              <h2 className="text-5xl lg:text-6xl font-bold text-red">
                Order Food Online in Chennai
              </h2>
              <p className="text-white lg:pr-16"></p>
            </div>

            <div className="hidden ml-10 mr-2 lg:block">
              <img
                src={img}
                className="max-w-30 max-h-28 bg-none"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
// bg-gradient-to-b from-white to-[#ED3B43]
