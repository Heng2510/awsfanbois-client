import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";
import Sidebar from "../SideBar/SideBar";

const NavBar = () => {
  return (
    <nav className="bg-green-hd dark:bg-gray-900 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <svg
            className="w-6 h-6 text-green-t dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 8v1h4V8m4 7H4a1 1 0 0 1-1-1V5h14v9a1 1 0 0 1-1 1ZM2 1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"
            />
          </svg>
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-green-t">
            TicketBok
          </span>
        </a>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a
                href="/"
                className="block py-2 px-3 font-light rounded md:bg-transparent hover:bg-green-bg transition-colors md:text-green-t md:p-3"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 px-3 font-light rounded md:bg-transparent hover:bg-green-bg transition-colors md:text-green-t md:p-3"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 px-3 font-light rounded md:bg-transparent hover:bg-green-bg transition-colors md:text-green-t md:p-3"
              >
                Services
              </a>
            </li>
            <li>
              <button
                type="button"
                className="block py-2 px-3 md:p-3 font-light bg-green-t text-green-hd hover:text-green-bg transition-colors rounded-full focus:outline-none"
              >
                Create Event
              </button>
            </li>
            <li>
              <a
                href="/user/sign_in"
                className="block py-2 px-3 md:p-3 font-light md:bg-transparent md:text-green-t text-gray-800  hover:bg-green-bg rounded-lg transition-colors"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="/user/sign_up"
                className="block py-2 px-3 md:p-3 font-light md:bg-transparent md:text-green-t text-gray-800  hover:bg-green-bg rounded-lg transition-colors"
              >
                Sign up
              </a>
            </li>
          </ul>
        </div>
        <SearchBar />
      </div>
      <Sidebar />
    </nav>
  );
};

export default NavBar;
