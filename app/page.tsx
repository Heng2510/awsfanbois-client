import TCarousel from "@/components/Carousel/Carousel";
import Sidebar from "@/components/SideBar/SideBar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <Sidebar />
        <div className="p-4 sm:ml-64">
          <div className="p-3 border-2 border-green-t border-double rounded-lg dark:border-gray-700 mt-14">
            <TCarousel />
            <div className="flex items-center justify-center h-28 mb-4 rounded bg-transparent dark:bg-gray-800">
              <h1 className="mb-4 text-4xl font-thin leading-none tracking-tight text-green-t md:text-5xl lg:text-6xl">
                {" "}
                <span className="underline decoration-8 decoration-green-t">
                  Featured Events
                </span>
              </h1>
            </div>
            <div className="grid grid-cols-4 gap-4 mb-4">
              <figure className="max-w-lg items-center justify-center rounded h-full">
                <img
                  className="h-fit max-w-full rounded-lg"
                  src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                  alt="image description"
                />{" "}
                <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                  Image caption
                </figcaption>
              </figure>
              <div className="flex items-center justify-center rounded h-64">
                <figure className="max-w-lg items-center justify-center rounded h-full">
                  <img
                    className="h-fit max-w-full rounded-lg"
                    src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                    alt="image description"
                  />
                  <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                    Image caption
                  </figcaption>
                </figure>
              </div>
              <div className="flex items-center justify-center rounded h-64">
                <figure className="max-w-lg items-center justify-center rounded h-full">
                  <img
                    className="h-fit max-w-full rounded-lg"
                    src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                    alt="image description"
                  />
                  <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                    Image caption
                  </figcaption>
                </figure>
              </div>
              <div className="flex items-center justify-center rounded h-64">
                <figure className="max-w-lg items-center justify-center rounded h-full">
                  <img
                    className="h-fit max-w-full rounded-lg"
                    src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                    alt="image description"
                  />
                  <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                    Image caption
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mb-4">
              <figure className="max-w-lg items-center justify-center rounded h-full">
                <img
                  className="h-fit max-w-full rounded-lg"
                  src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                  alt="image description"
                />
                <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                  Image caption
                </figcaption>
              </figure>
              <div className="flex items-center justify-center rounded h-64">
                <figure className="max-w-lg items-center justify-center rounded h-full">
                  <img
                    className="h-fit max-w-full rounded-lg"
                    src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                    alt="image description"
                  />
                  <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                    Image caption
                  </figcaption>
                </figure>
              </div>
              <div className="flex items-center justify-center rounded h-64">
                <figure className="max-w-lg items-center justify-center rounded h-full">
                  <img
                    className="h-fit max-w-full rounded-lg"
                    src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                    alt="image description"
                  />
                  <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                    Image caption
                  </figcaption>
                </figure>
              </div>
              <div className="flex items-center justify-center rounded h-64">
                <figure className="max-w-lg items-center justify-center rounded h-full">
                  <img
                    className="h-fit max-w-full rounded-lg"
                    src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                    alt="image description"
                  />
                  <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                    Image caption
                  </figcaption>
                </figure>
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
        </div>
      </div>
    </>
  );
}
