import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";
import "flowbite";

const NavBar = () => {
  return (
    <>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js" />
      <nav className="fixed top-0 z-50 w-full bg-green-hd">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end ml-20">
              <a
                href="/"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
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
            </div>
            <ul className="flex flex-col font-medium border rounded-lg md:space-x-8 md:flex-row md:border-0">
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 font-light rounded md:bg-transparent hover:bg-green-bg transition-colors md:text-green-t"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/aboutus"
                  className="block py-2 px-3 font-light rounded md:bg-transparent hover:bg-green-bg transition-colors md:text-green-t"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  className="block py-2 px-3 font-light rounded md:bg-transparent hover:bg-green-bg transition-colors md:text-green-t"
                >
                  Discorver
                </a>
              </li>
              <SearchBar />
              <li>
                <a href="/create-event">
                  <button
                    type="button"
                    className="block py-2 px-3 font-light bg-green-t text-green-hd hover:text-green-bg transition-colors rounded-full focus:outline-none"
                  >
                    Create Event
                  </button>
                </a>
              </li>
              <li>
                <a
                  href="/user/sign_in"
                  className="block py-2 px-3 font-light md:bg-transparent md:text-green-t text-gray-800  hover:bg-green-bg rounded-lg transition-colors"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="/user/sign_up"
                  className="block py-2 px-3 font-light md:bg-transparent md:text-green-t text-gray-800  hover:bg-green-bg rounded-lg transition-colors"
                >
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
