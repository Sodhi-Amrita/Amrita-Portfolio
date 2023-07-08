import React from "react";
import Image from "next/image";
import Link from "next/link";
const ProjectItems = ({ title, img, url, description }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-sl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#15797a] to-[#46c6c8]">
      <Image className="rounded-xl group-hover:opacity-10" src={img} alt="/" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h6 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h6>
        <p className="pb-4 pt-2 text-white text-center">{description}</p>
        <Link href={url} target="_blank">
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            Code
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItems;
