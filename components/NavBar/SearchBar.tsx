"use client";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Searching for:", query);
  };

  return (
    // <form className="flex items-center" onSubmit={handleSearch}>
    //   <input
    //     type="text"
    //     placeholder="Search Anything"
    //     className="bg-green-t text-green-hd px-4 py-2 rounded-l-full focus:outline-none "
    //     value={query}
    //     onChange={(e) => setQuery(e.target.value)}
    //   />
    //   <button
    //     type="submit"
    //     className="bg-green-t text-green-hd text-white px-2 py-2 rounded-r-full hover:text-green-bg transition-colors focus:outline-none"
    //   >
    //     <CiSearch className='h-6 mr-4'/>
    //   </button>
    // </form>
    <form className="w-1/4">
      <label
        htmlFor="default-search"
        className="my-12 text-sm font-medium text-green-t sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-green-t dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-2 ps-10 text-sm text-green-bg border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-bg focus:border-green-hd transition-colors"
          placeholder="Search Mockups, Logos..."
          required
        />
      </div>
    </form>
  );
};

export default SearchBar;
