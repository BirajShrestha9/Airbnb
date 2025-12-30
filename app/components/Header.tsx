"use client";

import React, { useState } from "react";
import Image from "next/image";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import { DateRangePicker, RangeKeyDict } from "react-date-range";
import {
  GlobeAltIcon,
  Bars3Icon,
  // UsersIcon,
  UserCircleIcon,
  MagnifyingGlassIcon,
  UsersIcon,
} from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";

function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();
  const search = () => {
    router.push(
      `/search?location=${searchInput}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&guests=${noOfGuests}`
    );
  };
  const handleSelect = (ranges: RangeKeyDict) => {
    const { startDate, endDate } = ranges.selection;
    if (startDate && endDate) {
      setStartDate(startDate);
      setEndDate(endDate);
    }
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <header
      className="sticky top-0 z-50 grid  grid-cols-3 gap-1 items-center bg-white shadow-lg p-5 
     "
    >
      {/* logo */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10  my-auto"
      >
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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder="Start your search"
          className="outline-none grow p-2 bg-transparent  text-gray-600 placeholder-gray-600 "
        />
        <MagnifyingGlassIcon className="hidden md:w-7 md:inline-flex md:mx-2 h-7 p-1 bg-red-400 text-white rounded-full cursor-pointer" />
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

      {searchInput && (
        <div className="flex flex-col  col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5861"]}
            onChange={handleSelect}
          />
          <div className="flex items-center">
            <h2 className="text-2xl font-semibold grow">Number Of Guests</h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              min={1}
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(Number(e.target.value))}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex">
            <button
              onClick={() => setSearchInput("")}
              className="grow text-gray-500 cursor-pointer"
            >
              cancel
            </button>
            <button
              onClick={search}
              className="grow text-red-400 cursor-pointer"
            >
              search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
