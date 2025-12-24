import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="relative h-75 w-screen  sm:h-100 lg:h-125 xl:h-150 2xl:h-175">
      <Image
        src={"https://links.papareact.com/0fm"}
        alt=" bgPic"
        layout="fill"
        // objectFit="cover"
        // objectPosition="left"
        className="object-cover object-bottom"
      />
      <div className="top-1/2 absolute w-full text-center ">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="text-purple-500 bg-white shadow-md hover:shadow-xl active:scale-90  transition-transform duration-150 px-10 py-4 my-3 cursor-pointer rounded-full">
          I am flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
