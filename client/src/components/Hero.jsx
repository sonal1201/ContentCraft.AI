import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url(.\assets\gradientBackground.png)] bg-cover bg-no-repeat min-h-screen">
      <div className="text-center mb-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mx-auto leading-[1.1]">
          Transform Ideas into Great Content <br /> with{" "}
          <span className="text-primary ">AI Tools</span>
        </h1>
        <p className="mt-4 max-w-s sm:max-w-lg m-auto max-sm:text-xs text-gray-600">
          Unleash your imagination with AI tools that turn ideas into amazing
          content and visuals. Create, transform, and inspire all with AI by
          your side.
        </p>
      </div>
      <div className="flex flex-wrap  justify-center gap-4 text-sm max-sm:text-xs ">
        <button
          onClick={() => navigate("/ai")}
          className="bg-primary text-white px-10 py-3 rounded-xl hover:scale-102 active:scale-95 transition cursor-pointer"
        >
          Start Creating Now
        </button>
        <button className=" text-gray-900 border-2 border-gray-300 px-10 py-3 rounded-xl hover:scale-102 active:scale-95 transition cursor-pointer">
          Watch Demo
        </button>
      </div>
      <div className="flex  justify-center items-center mt-8 gap-3 mx-auto ">
        <img src={assets.user_group} alt="" className="h-8 max-sm:h-6" />
        <span className="text-gray-600 max-sm:text-xs">Trusted by 1k+ people</span>
      </div>
    </div>
  );
};

export default Hero;
