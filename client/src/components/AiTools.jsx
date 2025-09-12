import React from "react";
import { AiToolsData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const AiTools = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  return (
    <div className="px-4 sm:px-20 xl:px-32 my-10">
      <div className="text-center">
        <h2 className="text-slate-700 text-[42px] font-semibold">
          Advanced AI Tools
        </h2>
        <p className="text-slate-500 max-w-lg max-sm:text-xs mx-auto">
          Discover the powerful tools we offer to help you create, enhance, and
          optimize your content effortlessly.
        </p>
      </div>
      <div className="flex flex-wrap mt-10 justify-center">
        {AiToolsData.map((tools, id) => (
          <div
            onClick={() => {
              user && navigate(tools.path);
            }}
            key={id}
            className="p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE]  shadow-xl border border-gray-200  hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <tools.Icon
              className="w-12 h-12 p-3 text-white rounded-xl"
              style={{
                background: `linear-gradient(to bottom, ${tools.bg.from},${tools.bg.to})`,
              }}
            />
            <h3 className="mt-6 mb-3 text-lg font-semibold">{tools.title}</h3>
            <p className="text-gray-600">{tools.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiTools;
