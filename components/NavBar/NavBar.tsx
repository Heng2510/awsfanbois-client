import Link from "next/link";
import React from "react";
import { AiFillAlipayCircle } from "react-icons/ai";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <nav className="flex space-x-6 mb-5 px-5 h-14 items-center bg-green-hd">
      <Link href="/">
        <AiFillAlipayCircle className="w-12 h-12" />
      </Link>
      <SearchBar/>
      <button className="font-light bg-green-t text-green-hd hover:text-green-bg transition-colors px-4 py-2 rounded-full focus:outline-none">
        Create Event
      </button>
    </nav>
  );
};

export default NavBar;
