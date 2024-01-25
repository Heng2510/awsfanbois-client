import { Datepicker, Dropdown, DropdownItem } from "flowbite-react";

export default function Discover() {
  return (
    <div className="mt-8 pb-8">
      <form className="max-w-xl mx-auto">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-light text-gray-900 sr-only"
        >
          Search
        </label>
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-green-bg border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-bg focus:border-green-hd transition-color"
            placeholder="Search Mockups, Logos, Design Templates..."
            required
          />
          <button
            type="submit"
            className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-green-hd rounded-e-lg border hover:bg-green-t focus:ring-4 focus:outline-none transition-colors"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </form>
      <div className="grid md:grid-cols-4 pb-6 my-12 justify-items-center bg-green-hd">
        <div className="block w-max mt-6 font-light text-green-t rounded bg-green-bg hover:bg-green-t transition-colors">
          <Dropdown
            label="Event Locations"
            className="block font-light text-green-t transition-colors"
          >
            <DropdownItem>Ha Noi</DropdownItem>
            <DropdownItem>Da Nang</DropdownItem>
            <DropdownItem>Ho Chi Minh City</DropdownItem>
            <DropdownItem>Can Tho</DropdownItem>
          </Dropdown>
        </div>
        <div className="block w-max mt-6 font-light text-green-t rounded bg-green-bg hover:bg-green-t transition-colors">
          <Dropdown
            label="Event Types"
            className="block font-light text-green-t transition-colors"
          >
            <DropdownItem>Movies</DropdownItem>
            <DropdownItem>Arts</DropdownItem>
            <DropdownItem>Music Art & Culture</DropdownItem>
            <DropdownItem>Live Music</DropdownItem>
          </Dropdown>
        </div>
        <div className="block w-max mt-6 font-light text-green-t rounded bg-green-bg hover:bg-green-t transition-colors">
          <Dropdown
            label="Price Range"
            className="block font-light text-green-t transition-colors"
          >
            <DropdownItem>Movies</DropdownItem>
            <DropdownItem>Arts</DropdownItem>
            <DropdownItem>Music Art & Culture</DropdownItem>
            <DropdownItem>Live Music</DropdownItem>
          </Dropdown>
        </div>
        <div className="block w-max mt-6 font-light text-green-t rounded bg-green-hd hover:bg-green-hd transition-colors">
          <div>
            <Datepicker />
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 mt-6 justify-items-center p-1/2">
        <div className="max-w-md p-1 mb-6 bg-white border border-green-hd rounded-lg shadow">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div className="grid md:grid-cols-2">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Date:{" "}
                <span className="mb-3 font-normal text-green-bg dark:text-gray-400">
                  11/11/2024
                </span>
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Location:{" "}
                <span className="mb-3 font-normal text-green-bg dark:text-gray-400">
                  Da Nang
                </span>
              </p>
              <div className="grid md:grid-cols-1">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Price:{" "}
                  <span className="mb-3 font-normal text-green-bg dark:text-gray-400">
                    300.000đ
                  </span>
                </p>{" "}
                <p className="mb-3 font-normal text-green-bg dark:text-gray-400">
                  Live Music
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-md p-1 mb-6 bg-white border border-green-hd rounded-lg shadow">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div className="grid md:grid-cols-2">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Date:{" "}
                <span className="mb-3 font-normal text-green-bg dark:text-gray-400">
                  11/11/2024
                </span>
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Location:{" "}
                <span className="mb-3 font-normal text-green-bg dark:text-gray-400">
                  Da Nang
                </span>
              </p>
              <div className="grid md:grid-cols-1">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Price:{" "}
                  <span className="mb-3 font-normal text-green-bg dark:text-gray-400">
                    300.000đ
                  </span>
                </p>{" "}
                <p className="mb-3 font-normal text-green-bg dark:text-gray-400">
                  Live Music
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-md p-1 mb-6 bg-white border border-green-hd rounded-lg shadow">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div className="grid md:grid-cols-2">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Date:{" "}
                <span className="mb-3 font-normal text-green-bg dark:text-gray-400">
                  11/11/2024
                </span>
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Location:{" "}
                <span className="mb-3 font-normal text-green-bg dark:text-gray-400">
                  Da Nang
                </span>
              </p>
              <div className="grid md:grid-cols-1">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Price:{" "}
                  <span className="mb-3 font-normal text-green-bg dark:text-gray-400">
                    300.000đ
                  </span>
                </p>{" "}
                <p className="mb-3 font-normal text-green-bg dark:text-gray-400">
                  Live Music
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-md p-1 mb-6 bg-white border border-green-hd rounded-lg shadow">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div className="grid md:grid-cols-2">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Date:{" "}
                <span className="mb-3 font-normal text-green-bg dark:text-gray-400">
                  11/11/2024
                </span>
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Location:{" "}
                <span className="mb-3 font-normal text-green-bg dark:text-gray-400">
                  Da Nang
                </span>
              </p>
              <div className="grid md:grid-cols-1">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Price:{" "}
                  <span className="mb-3 font-normal text-green-bg dark:text-gray-400">
                    300.000đ
                  </span>
                </p>{" "}
                <p className="mb-3 font-normal text-green-bg dark:text-gray-400">
                  Live Music
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-md p-1 mb-6 bg-white border border-green-hd rounded-lg shadow">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div className="grid md:grid-cols-2">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Date:{" "}
                <span className="mb-3 font-normal text-green-bg dark:text-gray-400">
                  11/11/2024
                </span>
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Location:{" "}
                <span className="mb-3 font-normal text-green-bg dark:text-gray-400">
                  Da Nang
                </span>
              </p>
              <div className="grid md:grid-cols-1">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Price:{" "}
                  <span className="mb-3 font-normal text-green-bg dark:text-gray-400">
                    300.000đ
                  </span>
                </p>{" "}
                <p className="mb-3 font-normal text-green-bg dark:text-gray-400">
                  Live Music
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-md p-1 mb-6 bg-white border border-green-hd rounded-lg shadow">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div className="grid md:grid-cols-2">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Date:{" "}
                <span className="mb-3 font-normal text-green-bg dark:text-gray-400">
                  11/11/2024
                </span>
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Location:{" "}
                <span className="mb-3 font-normal text-green-bg dark:text-gray-400">
                  Da Nang
                </span>
              </p>
              <div className="grid md:grid-cols-1">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Price:{" "}
                  <span className="mb-3 font-normal text-green-bg dark:text-gray-400">
                    300.000đ
                  </span>
                </p>{" "}
                <p className="mb-3 font-normal text-green-bg dark:text-gray-400">
                  Live Music
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center h-28 mb-4 rounded bg-transparent dark:bg-gray-800">
            <button
              type="button"
              className="text-green-t hover:bg-green-t2 font-light block py-2 px-3 md:p-3 md:bg-transparent md:text-green-t  rounded-lg transition-colors"
            >
              See More
            </button>
          </div>
    </div>
  );
}
