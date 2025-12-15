import React from "react";
import Image from "next/image";
import {
  GlobeAltIcon,
  Bars3Icon,
  // UsersIcon,
  UserCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/16/solid";
function Header() {
  return (
    <header
      className="sticky top-0 z-50 grid  grid-cols-3 gap-1 items-center bg-white shadow-lg p-5 
     "
    >
      {/* logo */}
      <div className="relative flex items-center h-10  my-auto">
        <Image
          className="cursor-pointer"
          src={"https://links.papareact.com/qd3"}
          alt="picture"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* SearchBar */}
      <div
        className=" border-2 border-gray-300 rounded-2xl flex pl-5 items-center focus-within:border-2 focus-within:border-blue-500
      md:shadow-md
      "
      >
        <input
          type="text"
          placeholder="Start your search"
          className="outline-none grow p-2 bg-transparent  text-gray-600 placeholder-gray-600 "
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex md:mx-2 h-7 p-1 bg-red-400 text-white rounded-full cursor-pointer" />
      </div>

      {/* Right Section */}
      <div className="flex space-x-3 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6" />
        <div className="border-3 border-gray-300 rounded-full space-x-2 flex p-2 items-center">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
